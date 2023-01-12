import { Stack } from '@/core'
import {
    CommonElementProps,
    DevControlStyleProps,
    ElementPositionProps,
    PseudoState,
    Screen,
    Typography,
} from '@/core/be.core-types'
import { useTheme } from '@/hooks'
import { Icon } from '@/icon'
import { twClass } from '@/utils'
import { Listbox as HLListbox } from '@headlessui/react'
import React, {
    ComponentPropsWithoutRef,
    ComponentType,
    forwardRef,
    Fragment,
    useMemo,
} from 'react'

type HLProps<T> = T extends infer U ? U : never

type HLListboxProps = ComponentType<ComponentType<HLProps<typeof HLListbox>>>

const DEFAULT_LISTBOX_TAG = Fragment

export interface ListboxProps
    extends ComponentPropsWithoutRef<typeof DEFAULT_LISTBOX_TAG>,
        DevControlStyleProps {
    className?: string
    disabled?: boolean
    value?: any
    defaultValue?: any
    onChange?(value?: any): void
    horizontal?: boolean
    name?: string
    multiple?: boolean
    by?: string
}

const __Listbox = ({ children, value, ...props }: ListboxProps) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props])
    return (
        <HLListbox as="div" value={value} className={classNames} {...restProps}>
            {children}
        </HLListbox>
    )
}

const DEFAULT_BUTTON_TAG = 'button' as const

interface ButtonRenderPropArg {
    open?: boolean
    disabled?: boolean
    value?: any
}

type ButtonPropsWeControl =
    | 'value'
    | 'type'
    | 'aria-haspopup'
    | 'aria-controls'
    | 'aria-expanded'
    | 'aria-labelledby'
    | 'disabled'
    | 'onKeyDown'
    | 'onClick'
interface HLListboxButtonProps
    extends Omit<
            ComponentPropsWithoutRef<typeof DEFAULT_BUTTON_TAG>,
            ButtonPropsWeControl
        >,
        ButtonRenderPropArg {}

export interface ListboxButtonProps
    extends HLListboxButtonProps,
        CommonElementProps,
        Partial<Typography>,
        Partial<Screen<Typography>>,
        Partial<PseudoState<Typography>>,
        ElementPositionProps,
        Partial<Screen<ElementPositionProps>>,
        Partial<PseudoState<ElementPositionProps>> {
    children: React.ReactNode
}

const __ListboxButton = forwardRef<HTMLButtonElement, ListboxButtonProps>(
    ({ children, ...props }: ListboxButtonProps, ref) => {
        const { classNames, ...restProps } = useMemo(
            () => twClass(props),
            [props],
        )
        const theme = useTheme()
        const captionTypo = theme.typography[theme.ui.caption]
        return (
            <HLListbox.Button className={classNames} {...restProps} ref={ref}>
                {({ open }) => (
                    <Stack>
                        {children}
                        <Stack.Item $top="-3" $right="0">
                            {open ? (
                                <Icon
                                    type="ChevronUp"
                                    $height="6"
                                    $width="6"
                                    $fill="neutral-400"
                                    aria-hidden="true"
                                />
                            ) : (
                                <Icon
                                    type="ChevronDown"
                                    $height="6"
                                    $width="6"
                                    $fill="neutral-400"
                                    aria-hidden="true"
                                />
                            )}
                        </Stack.Item>
                    </Stack>
                )}
            </HLListbox.Button>
        )
    },
)

const DEFAULT_OPTIONS_TAG = 'ul' as const
type OptionsPropsWeControl =
    | 'aria-activedescendant'
    | 'aria-labelledby'
    | 'aria-orientation'
    | 'onKeyDown'
    | 'role'
    | 'tabIndex'

interface OptionsRenderPropArg {
    open?: boolean
}

export interface HLListboxOptionsProps
    extends Omit<
            ComponentPropsWithoutRef<typeof DEFAULT_OPTIONS_TAG>,
            OptionsPropsWeControl | 'children' | 'slot'
        >,
        OptionsRenderPropArg {
    children: React.ReactNode
}

export interface ListboxOptionsProps
    extends HLListboxOptionsProps,
        CommonElementProps,
        ElementPositionProps {}

const __ListboxOptions = forwardRef<HTMLUListElement, ListboxOptionsProps>(
    ({ children, ...props }: ListboxOptionsProps, ref) => {
        const { classNames, ...restProps } = useMemo(
            () => twClass(props),
            [props],
        )
        return (
            <HLListbox.Options className={classNames} {...restProps} ref={ref}>
                {children}
            </HLListbox.Options>
        )
    },
)

export const HeadlessSelect = Object.assign(__Listbox, {
    Button: __ListboxButton,
    Options: __ListboxOptions,
})
