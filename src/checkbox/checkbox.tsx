import React, {
    forwardRef,
    useContext,
    useEffect,
    useMemo,
    useRef,
} from 'react'
import { useSyncRefs } from '../be.headless/utils/hooks/use-sync-refs'
import { Input, InputRef, Label, Text } from '../be.html'
import { Box } from '../core'
import {
    ElementConstraintsProps,
    PseudoState,
    Screen,
} from '../core/be.core-types'
import { ThemeContext } from '../core/themeProvider'
import { beStyle, beStyleAttrTree, pickupProps } from '../utils/be.style'
import { predicateHeight } from '../utils/be.tw-helper'

export type CheckBoxValue = {
    name: string
    value: string
    checked: boolean
}

interface __CheckboxArrangementProps {
    $a__reverse?: boolean
    $a__display?: 'block' | 'inline'
}

export interface CheckboxArrangementProps
    extends __CheckboxArrangementProps,
        Partial<Screen<__CheckboxArrangementProps>>,
        Partial<PseudoState<__CheckboxArrangementProps>> {}

export interface CheckboxProps
    extends Omit<
            React.ComponentPropsWithRef<'input'>,
            'className' | 'style' | 'children'
        >,
        Partial<ElementConstraintsProps>,
        CheckboxArrangementProps {
    label?: string
    description?: string
    indeterminate?: boolean
    children?: never
}

export default forwardRef<InputRef, CheckboxProps>((props, forwardedRef) => {
    const { pickup, ...rest } = pickupProps(props, '$a__display', '$a__reverse')

    const { attrsTree: contentAttrs } = beStyleAttrTree(
        Object.assign({ $a__display: 'block', $a__reverse: false }, pickup),
    )
    const theme = useContext(ThemeContext)
    const contentsStyle = beStyle(contentAttrs, theme)

    const { attrsTree, ...restProps } = beStyleAttrTree(rest)
    const style = beStyle(attrsTree, theme)
    const {
        id,
        name,
        value,
        label,
        description,
        indeterminate,
        ...checkboxProps
    } = restProps
    const rId = id || `${name}_${value}`
    const captionTypo = theme.typography[theme['ui'].caption]
    const descriptionTypo = theme.typography[theme['ui'].description]
    const inputRef = useRef<HTMLInputElement>(null)

    const itemRef = useSyncRefs(forwardedRef, inputRef)

    useEffect(() => {
        if (!inputRef.current) return
        if (indeterminate === undefined || indeterminate === null) return
        inputRef.current.indeterminate = indeterminate
    }, [indeterminate, inputRef.current])

    const checkboxHeight = useMemo(() => {
        const typo = captionTypo
        return predicateHeight(typo.$lineHeight, typo.$fontSize)
    }, [theme, captionTypo])

    const contents = [
        <Box key={`${rId}_input`} $height={checkboxHeight} $alignItems="center">
            <Input
                id={rId}
                type="checkbox"
                $borderRadius="rounded"
                $borderColor="neutral-300"
                $textColor="primary"
                $cursor="pointer"
                name={name}
                value={value}
                {...checkboxProps}
                ref={itemRef}
            ></Input>
        </Box>,
        <Box key={`${rId}_label`} {...contentsStyle} {...captionTypo}>
            {label && (
                <Label htmlFor={rId} $cursor="pointer">
                    {label}
                </Label>
            )}
            {description && <Text {...descriptionTypo}>{description}</Text>}
        </Box>,
    ]

    return (
        <Box
            $direction="row"
            $gap="x-2"
            $justifyItems="start"
            $alignItems="start"
            {...style}
        >
            {contentsStyle.$a__reverse ? contents.reverse() : contents}
        </Box>
    )
})
