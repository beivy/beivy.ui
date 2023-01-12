import { Button, Label, TextArea } from '@/be.html'
import { Box, Stack } from '@/core'
import {
    CommonFormElementProps,
    DevControlStyleProps,
} from '@/core/be.core-types'
import { useTheme } from '@/hooks'
import { Icon, IconType } from '@/icon'
import { twClass } from '@/utils'
import React, { forwardRef, useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'

export interface TextAreaProps
    extends Omit<
            React.ComponentPropsWithoutRef<'textarea'>,
            'rows' | 'onChange' | 'onBlur' | 'disabled'
        >,
        CommonFormElementProps,
        DevControlStyleProps {
    name: string
    label?: string
    icon?: IconType
    rows?: number
}

export const Textarea = forwardRef<HTMLInputElement, TextAreaProps>(
    (
        {
            name,
            defaultValue,
            label,
            icon,
            rows = 5,
            rules = {},
            ...props
        }: TextAreaProps,
        ref,
    ) => {
        const [savedValue, setSavedValue] = useState<any>()
        const formContext = useFormContext() ?? {}
        const {
            register = (name: string, options) =>
                ({
                    onChange: options?.onChange,
                    onBlur: options?.onBlur,
                } as any),
            setValue = (name: string, value: string) => {
                setSavedValue(value)
            },
        } = formContext
        const { classNames, ...restProps } = twClass(props)

        const dataKey = `${name}_textarea`
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
            setValue(name, initialValue ?? defaultValue)
        }, [])

        const [err, setErr] = useState<string | undefined | null>()
        return (
            <Box className={classNames}>
                {label && textAreaLabel}
                <Stack $width="full">
                    <TextArea
                        id={name}
                        cols={32}
                        rows={rows}
                        $borderRadius="md"
                        $borderColor="neutral-300"
                        {...restProps}
                        {...inputStyle}
                        $width="full"
                        defaultValue={savedValue}
                        {...register(name, {
                            ...rules,
                            onChange: onChangeHandlerFactory(rules.onChange),
                        })}
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
