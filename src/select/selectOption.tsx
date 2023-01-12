import { Span } from '@/be.html'
import { Box, ThemeType } from '@/core'
import { DevControlStyleProps } from '@/core/be.core-types'
import { useTheme } from '@/hooks'
import { Icon } from '@/icon'
import { twClass } from '@/utils'
import { Listbox } from '@headlessui/react'
import { useCallback, useMemo } from 'react'

export interface Option extends DevControlStyleProps {
    name: string
    label?: string
}

export interface SelectOptionProps extends Option {}

export const SelectOption = ({ name, label, ...props }: SelectOptionProps) => {
    const theme = useTheme()
    const { caption } = theme.ui
    const captionStyle = theme.typography[theme.ui.caption]

    const { classNames, ...restProps } = useMemo(() => twClass(props), [props])

    const optionStyle = useCallback(
        (active: boolean) => {
            return active ? classNames + ' bg-primary-100' : classNames
        },
        [classNames],
    )

    const optionContentStyle = useCallback(
        (active: boolean, uiTheme: ThemeType) => {
            return active ? uiTheme.ui.text.active : uiTheme.ui.text.inactive
        },
        [],
    )

    const optionContent = useCallback(
        (active: boolean, selected: boolean, theme: ThemeType) => {
            return (
                <Box $direction="row" $justifyContent="between">
                    <Span
                        $display="block"
                        {...optionContentStyle(active, theme)}
                    >
                        {label}
                    </Span>
                    {selected && (
                        <Icon
                            $width="5"
                            $height="5"
                            $fill={captionStyle.$textColor}
                            type="Check"
                        />
                    )}
                </Box>
            )
        },
        [label],
    )

    return (
        <Listbox.Option
            key={name}
            className={({ active }) => optionStyle(active)}
            {...restProps}
            value={{ name, label }}
        >
            {({ active, selected }) => optionContent(active, selected, theme)}
        </Listbox.Option>
    )
}
