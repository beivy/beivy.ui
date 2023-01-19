import { Button, Label, TextArea } from '@/be.html'
import { Box, Stack } from '@/core'
import {
    BoxProps,
    CommonFormElementProps,
    DevControlStyleProps,
} from '@/core/be.core-types'
import { useTheme } from '@/hooks'
import { Icon, IconType } from '@/icon'
import { twClass } from '@/utils'
import React, { forwardRef, useEffect, useMemo, useState } from 'react'

interface __InputArrangementProps {
    $a__vertical?: boolean
}
export interface TextAreaProps
    extends Omit<React.ComponentPropsWithoutRef<'textarea'>, 'rows'>,
        CommonFormElementProps,
        DevControlStyleProps,
        __InputArrangementProps {
    name: string
    label?: string
    icon?: IconType
    rows?: number
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        {
            id,
            name,
            defaultValue,
            label,
            icon,
            rows = 5,
            rules = {},
            $a__vertical = false,
            onChange,
            ...props
        }: TextAreaProps,
        ref,
    ) => {
        const [savedValue, setSavedValue] = useState<any>()

        const { classNames, ...restProps } = twClass(props)

        const dataKey = `${id}_textarea`
        const theme = useTheme()
        const captionStyle = theme.typography[theme.ui.caption]
        const inputStyle = theme.typography['content-600']
        const textAreaLabel = useMemo(
            () => (
                <Label htmlFor={name} $width="max" {...captionStyle}>
                    {label}
                </Label>
            ),
            [label],
        )

        const onChangeHandlerFactory =
            (handler?: React.ChangeEventHandler) =>
            (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                localStorage.setItem(dataKey, evt.target.value)
                handler && handler(evt)
            }

        useEffect(() => {
            const initialValue: string | null = localStorage.getItem(dataKey)
            setSavedValue(initialValue ?? defaultValue)
        }, [])

        const arrangement: Partial<BoxProps> = useMemo(
            () =>
                $a__vertical
                    ? {
                          $direction: 'col',
                          $gap: 'y-2',
                      }
                    : {
                          $direction: 'row',
                          $gap: 'x-2',
                      },

            [],
        )

        const [err, setErr] = useState<string | undefined | null>()
        return (
            <Box className={classNames} {...arrangement}>
                {label && textAreaLabel}
                <Stack $width="full">
                    <TextArea
                        id={id}
                        name={name}
                        cols={32}
                        rows={rows}
                        $borderRadius="md"
                        $borderColor="neutral-300"
                        {...inputStyle}
                        $width="full"
                        defaultValue={savedValue}
                        {...restProps}
                        onChange={onChangeHandlerFactory(onChange)}
                        ref={ref}
                    />
                    {icon && (
                        <Stack.Item $bottom="2" $right="2">
                            <Button>
                                <Icon
                                    type={icon}
                                    $height="8"
                                    $fill="primary-400"
                                />
                            </Button>
                        </Stack.Item>
                    )}
                </Stack>
            </Box>
        )
    },
)
