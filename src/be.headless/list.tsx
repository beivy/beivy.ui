import {
    createContext,
    createRef,
    Dispatch,
    ElementType,
    Fragment,
    KeyboardEvent,
    MutableRefObject,
    Ref,
    useContext,
    useId,
    useMemo,
    useReducer,
    useRef,
} from 'react'
import { useEvent } from './utils/hooks/use-event'
import { useIsoMorphicEffect } from './utils/hooks/use-iso-morphic-effect'
import { useSyncRefs } from './utils/hooks/use-sync-refs'
import { useTrackedPointer } from './utils/hooks/use-tracked-pointer'
import { Keys } from './utils/keyboard'
import { Props } from './utils/types'
import {
    calculateActiveIndex,
    Focus,
} from './utils/utils/calculate-active-index'
import { disposables } from './utils/utils/disposables'
import {
    Focus as FocusManagement,
    focusIn,
    getFocusableElements,
    restoreFocusIfNecessary,
    sortByDomNode,
} from './utils/utils/focus-management'
import { match } from './utils/utils/match'
import {
    Features,
    forwardRefWithAs,
    PropsForFeatures,
    render,
} from './utils/utils/render'

export interface ListRenderPropsArg {
    selectedItemIndex: number | null
}

type ListPropsWeControl = 'onKeyDown' | 'role' | 'tabIndex'

const DEFAULT_LIST_TAG = 'div'

enum ActionTypes {
    GoToItem,
    SelectItem,
    UnSelectItem,
    RegisterItem,
    UnregisterItem,
}

enum ActivationTrigger {
    Pointer,
    Other,
}

type ListItemDataRef = MutableRefObject<{
    textValue?: string
    disabled: boolean
    domRef: MutableRefObject<HTMLElement | null>
}>

interface StateDefinition {
    activeItemIndex: number | null
    selectedItemIndex: number | null
    itemsRef: MutableRefObject<HTMLElement | null>
    items: {
        id: string
        dataRef: ListItemDataRef
    }[]
    activationTrigger: ActivationTrigger
}

type Actions =
    | {
          type: ActionTypes.GoToItem
          focus: Exclude<Focus, Focus.Specific>
          trigger?: ActivationTrigger
      }
    | {
          type: ActionTypes.GoToItem
          focus: Focus.Specific
          id: string
          trigger?: ActivationTrigger
      }
    | {
          type: ActionTypes.RegisterItem
          id: string
          dataRef: ListItemDataRef
      }
    | {
          type: ActionTypes.UnregisterItem
          id: string
      }
    | {
          type: ActionTypes.SelectItem
          id: string
      }
    | {
          type: ActionTypes.UnSelectItem
      }

const reducers: {
    [P in ActionTypes]: (
        state: StateDefinition,
        action: Extract<Actions, { type: P }>,
    ) => StateDefinition
} = {
    [ActionTypes.GoToItem]: (state, action) => {
        const adjustedState = adjustOrderedState(state)
        const activeItemIndex = calculateActiveIndex(action, {
            resolveItems: () => adjustedState.items,
            resolveActiveIndex: () => adjustedState.activeItemIndex,
            resolveId: (item) => item.id,
            resolveDisabled: (item) => item.dataRef.current.disabled,
        })
        return {
            ...state,
            ...adjustedState,
            activeItemIndex,
            activationTrigger: action.trigger ?? ActivationTrigger.Other,
        }
    },
    [ActionTypes.RegisterItem]: (state, action) => {
        const adjustedState = adjustOrderedState(state, (items) => [
            ...items,
            { id: action.id, dataRef: action.dataRef },
        ])
        return { ...state, ...adjustedState }
    },
    [ActionTypes.UnregisterItem]: (state, action) => {
        const adjustedState = adjustOrderedState(state, (items) => {
            const adjustedItems = items.filter((item) => item.id !== action.id)
            return adjustedItems
        })
        return {
            ...state,
            ...adjustedState,
            activationTrigger: ActivationTrigger.Other,
        }
    },
    [ActionTypes.SelectItem]: (state, action) => {
        const { id } = action
        const selectedItemIndex = state.items.findIndex(
            (item) => item.id === id,
        )
        return {
            ...state,
            selectedItemIndex,
        }
    },
    [ActionTypes.UnSelectItem]: (state, action) => {
        return {
            ...state,
            selectedItemIndex: null,
        }
    },
}

const ListContext =
    createContext<[StateDefinition, Dispatch<Actions>] | null>(null)
ListContext.displayName = 'ListContext'

const ListRenderFeatures = Features.RenderStrategy | Features.Static

function stateReducer(state: StateDefinition, action: Actions) {
    return match(action.type, reducers, state, action)
}

const _List = forwardRefWithAs(
    <T extends ElementType = typeof DEFAULT_LIST_TAG>(
        props: Props<T, ListRenderPropsArg, ListPropsWeControl> &
            PropsForFeatures<typeof ListRenderFeatures>,
        ref: Ref<HTMLElement>,
    ) => {
        const innerId = useId()
        const { id = innerId, selectedItemIndex = null, ...theirProps } = props

        const [state, dispatch] = useReducer(stateReducer, {
            itemsRef: createRef(),
            items: [],
            activeItemIndex: null,
            selectedItemIndex,
            activationTrigger: ActivationTrigger.Other,
        } as StateDefinition)

        const handleKeyDown = useEvent(
            (event: KeyboardEvent<HTMLButtonElement>) => {
                switch (event.key) {
                    // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13

                    case Keys.Space:
                    case Keys.Enter:
                        event.preventDefault()
                        event.stopPropagation()
                        if (state.activeItemIndex !== null) {
                            let { dataRef, id } =
                                state.items[state.activeItemIndex]
                            dataRef.current?.domRef.current?.click()
                            dispatch({ type: ActionTypes.SelectItem, id })
                            restoreFocusIfNecessary(state.itemsRef.current)
                        }
                        break
                    case Keys.Escape:
                        event.preventDefault()
                        event.stopPropagation()
                        if (state.selectedItemIndex !== null) {
                            dispatch({ type: ActionTypes.UnSelectItem })
                        }
                        break
                    case Keys.Tab:
                        event.preventDefault()
                        event.stopPropagation()
                        if (state.selectedItemIndex !== null) {
                            const from =
                                state.items[state.selectedItemIndex].dataRef
                                    .current?.domRef
                            // console.log(
                            //     '====>',
                            //     from.current,
                            //     getFocusableElements(from.current),
                            // )
                            disposables().nextFrame(() => {
                                focusIn(
                                    getFocusableElements(from.current),
                                    FocusManagement.Next |
                                        FocusManagement.WrapAround,
                                )
                            })
                            break
                        }
                        disposables().nextFrame(() =>
                            focusIn(
                                state.items
                                    .map(
                                        (v) =>
                                            v.dataRef.current?.domRef.current,
                                    )
                                    .filter((v) => v !== null) as HTMLElement[],
                                // from.current,
                                event.shiftKey
                                    ? FocusManagement.Previous
                                    : FocusManagement.Next,
                                // FocusManagement.Next,
                            ),
                        )
                        break
                    case Keys.ArrowUp:
                        event.preventDefault()
                        event.stopPropagation()
                        dispatch({
                            type: ActionTypes.GoToItem,
                            focus: Focus.Previous,
                        })
                        break
                    case Keys.ArrowDown:
                        event.preventDefault()
                        event.stopPropagation()
                        dispatch({
                            type: ActionTypes.GoToItem,
                            focus: Focus.Next,
                        })
                        break
                    default:
                        break
                }
            },
        )

        const ourProps = {
            id,
            onKeyDown: handleKeyDown,
            role: 'list',
            tabIndex: 0,
            ref: ref,
        }

        const slot = useMemo<ListRenderPropsArg>(
            () => ({ selectedItemIndex }),
            [selectedItemIndex],
        )

        return (
            <ListContext.Provider value={[state, dispatch]}>
                {render({
                    ourProps,
                    theirProps,
                    slot,
                    defaultTag: DEFAULT_LIST_TAG,
                    features: ListRenderFeatures,
                    name: 'List',
                })}
            </ListContext.Provider>
        )
    },
)

const DEFAULT_ITEM_TAG = Fragment

export interface ItemRenderPropArg {
    active: boolean
    selected: boolean
    disabled: boolean
}

type ListItemPropsWeControl =
    | 'role'
    | 'tabIndex'
    | 'aria-disabled'
    | 'onPointerLeave'
    | 'onPointerMove'
    | 'onMouseLeave'
    | 'onMouseMove'
    | 'onFocus'

const _Item = forwardRefWithAs(
    <T extends ElementType = typeof DEFAULT_ITEM_TAG>(
        props: Props<T, ItemRenderPropArg, ListItemPropsWeControl> & {
            disabled?: boolean
        },
        ref: Ref<HTMLElement>,
    ) => {
        const internalId = useId()
        const {
            id = `beivy-hlList-item-${internalId}`,
            disabled = false,
            ...theirProps
        } = props
        const [state, dispatch] = useListContext('List.Item')
        const active =
            state.activeItemIndex !== null
                ? state.items[state.activeItemIndex].id === id
                : false

        const selected =
            state.selectedItemIndex !== null
                ? state.items[state.selectedItemIndex].id === id
                : false
        const internalItemRef = useRef<HTMLElement | null>(null)
        const itemRef = useSyncRefs(ref, internalItemRef)

        useIsoMorphicEffect(() => {
            if (!active) return
            if (state.activationTrigger === ActivationTrigger.Pointer) {
            }
            const d = disposables()
            d.requestAnimationFrame(() => {
                internalItemRef.current?.scrollIntoView?.({ block: 'nearest' })
            })
            return d.dispose
        }, [internalItemRef, active, state.activationTrigger])

        const bag = useRef<ListItemDataRef['current']>({
            disabled,
            domRef: internalItemRef,
        })

        useIsoMorphicEffect(() => {
            bag.current.disabled = disabled
        }, [bag, disabled])

        useIsoMorphicEffect(() => {
            bag.current.textValue =
                internalItemRef.current?.textContent?.toLowerCase()
        }, [bag, internalItemRef])

        useIsoMorphicEffect(() => {
            dispatch({ type: ActionTypes.RegisterItem, id, dataRef: bag })
            return () => dispatch({ type: ActionTypes.UnregisterItem, id })
        }, [])

        const handleFocus = useEvent(() => {
            if (disabled)
                return dispatch({
                    type: ActionTypes.GoToItem,
                    focus: Focus.Nothing,
                })
            dispatch({ type: ActionTypes.GoToItem, focus: Focus.Specific, id })
        })

        const pointer = useTrackedPointer()

        const handleEnter = useEvent((evt) => pointer.update(evt))

        const handleMove = useEvent((evt) => {
            if (!pointer.wasMoved(evt)) return
            if (disabled) return
            if (active) return
            dispatch({
                type: ActionTypes.GoToItem,
                focus: Focus.Specific,
                id,
                trigger: ActivationTrigger.Pointer,
            })
        })

        const handleLeave = useEvent((evt) => {
            if (!pointer.wasMoved(evt)) return
            if (disabled) return
            if (!active) return
            dispatch({ type: ActionTypes.GoToItem, focus: Focus.Nothing })
        })

        const handleClick = useEvent((evt) => {
            if (disabled) return evt.preventDefault()
            dispatch({ type: ActionTypes.SelectItem, id })
            restoreFocusIfNecessary(state.itemsRef.current)
        })

        const slot = useMemo<ItemRenderPropArg>(
            () => ({ active, selected, disabled }),
            [active, selected, disabled],
        )

        const ourProps = {
            id,
            ref: itemRef,
            role: 'listitem',
            tabIndex: selected === true ? undefined : -1,
            'aria-disabled': disabled === true ? true : undefined,
            disabled: undefined,
            onClick: handleClick,
            onFocus: handleFocus,
            onPointerEnter: handleEnter,
            onMouseEnter: handleEnter,
            onPointerMove: handleMove,
            onMouseMove: handleMove,
            onPointerLeave: handleLeave,
            onMouseLeave: handleLeave,
        }

        return render({
            ourProps,
            theirProps,
            slot,
            defaultTag: DEFAULT_ITEM_TAG,
            name: 'List.Item',
        })
    },
)

export const List = Object.assign(_List, { Item: _Item })

/**
 *
 */
function adjustOrderedState(
    state: StateDefinition,
    adjustment: (
        items: StateDefinition['items'],
    ) => StateDefinition['items'] = (i) => i,
) {
    const currentActiveItem =
        state.activeItemIndex !== null
            ? state.items[state.activeItemIndex]
            : null
    const sortedItems = sortByDomNode(
        adjustment(state.items.slice()),
        (item) => item.dataRef.current.domRef.current,
    )

    let adjustedActiveItemIndex = currentActiveItem
        ? sortedItems.indexOf(currentActiveItem)
        : null
    if (adjustedActiveItemIndex === -1) {
        adjustedActiveItemIndex = null
    }
    return {
        items: sortedItems,
        activeItemIndex: adjustedActiveItemIndex,
    }
}

function useListContext(component: string) {
    const context = useContext(ListContext)
    if (context === null) {
        const err = new Error(
            `<${component} /> is missing a parent <List /> component.`,
        )
        if (Error.captureStackTrace)
            Error.captureStackTrace(err, useListContext)
        throw err
    }
    return context
}
