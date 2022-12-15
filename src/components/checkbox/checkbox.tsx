import React, {
    forwardRef,
    useContext,
    useEffect,
    useMemo,
    useRef,
} from 'react'
import { Input, InputRef, Label, Text } from '../be-html'
import { Box } from '../core'
import { ElementConstraintsProps } from '../core/be.core-types'
import { ThemeContext } from '../core/themeProvider'
import { isFunction } from '../utils'
import { predicateHeight, resizeConstrains } from '../utils/be.tw-helper'

export type CheckBoxValue<T> = {
    name: string
    value: string
    checked: boolean
}

export interface CheckboxProps
    extends Omit<
            React.ComponentPropsWithRef<'input'>,
            'className' | 'style' | 'children'
        >,
        Partial<ElementConstraintsProps> {
    label?: string
    description?: string
    indeterminate?: boolean
    children?: never
    a__checkbox?: 'left' | 'right'
    a__content?: 'block' | 'inline'
}

export default forwardRef<InputRef, CheckboxProps>(
    (
        {
            id,
            name,
            value,
            label,
            description,
            indeterminate,
            a__checkbox,
            a__content,
            c__resize,
            ...props
        },
        forwardedRef,
    ) => {
        const rId = id || `${name}_${value}`
        const theme = useContext(ThemeContext)
        const captionTypo = theme.typography[theme['ui'].caption]
        const descriptionTypo = theme.typography[theme['ui'].description]
        const inputRef = useRef<HTMLInputElement>(null)
        const arrangement = Object.assign(
            {
                content: 'block',
                checkbox: 'left',
            },
            a__content && {
                content: a__content,
            },
            a__checkbox && {
                checkbox: a__checkbox,
            },
        )
        useEffect(() => {
            if (!forwardedRef) return
            if (isFunction(forwardedRef) && inputRef.current) {
                const refFunc = forwardedRef as (
                    input: HTMLInputElement,
                ) => void
                return refFunc(inputRef.current)
            }

            if (inputRef.current) {
                ;(
                    forwardedRef as React.MutableRefObject<HTMLInputElement>
                ).current = inputRef.current
            } else {
                forwardedRef = null
            }
        }, [inputRef.current, forwardedRef])

        useEffect(() => {
            if (!inputRef.current) return
            if (indeterminate === undefined || indeterminate === null) return
            inputRef.current.indeterminate = indeterminate
        }, [indeterminate, inputRef.current])

        const checkboxHeight = useMemo(() => {
            const typo = captionTypo
            return predicateHeight(typo.$lineHeight, typo.$fontSize)
        }, [theme, captionTypo])

        const contentsLayout = useMemo(() => {
            if (!arrangement) return
            const direction = arrangement.content
            switch (direction) {
                case 'block':
                    return {
                        $direction: 'col',
                        $alignItems: 'start',
                    } as const
                case 'inline':
                    return {
                        $direction: 'row',
                        $alignItems: 'baseline',
                        $space: 'x-2',
                    } as const
                default:
                    throw new Error(`illegal direction ${direction}`)
            }
        }, [arrangement.content])

        const contents = [
            <Box
                key={`${rId}_input`}
                $height={checkboxHeight}
                $alignItems="center"
            >
                <Input
                    id={rId}
                    type="checkbox"
                    $borderRadius="rounded"
                    $borderColor="neutral-300"
                    $textColor="primary"
                    name={name}
                    value={value}
                    {...props}
                    ref={inputRef}
                ></Input>
            </Box>,
            <Box key={`${rId}_label`} {...contentsLayout} {...captionTypo}>
                {label && <Label htmlFor={rId}>{label}</Label>}
                {description && <Text {...descriptionTypo}>{description}</Text>}
            </Box>,
        ]

        const isLeft = arrangement.checkbox === 'left'
        const constraints = resizeConstrains(c__resize)
        return (
            <Box
                $direction="row"
                $space="x-2"
                $justifyItems="start"
                $alignItems="start"
                {...constraints}
            >
                {isLeft ? contents : contents.reverse()}
            </Box>
        )
    },
)
