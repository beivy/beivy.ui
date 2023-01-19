import {
    ComponentPropsWithoutRef,
    forwardRef,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { Input as HTMLInput, Label, Text } from '../be.html'
import { Box } from '../core'
import { BoxProps, CommonElementProps } from '../core/be.core-types'
import { useTheme } from '../hooks/useTheme'

interface __InputArrangementProps {
    $a__vertical?: boolean
}

export interface ValidationError {
    type: string
    message: string
}
export interface InputProps
    extends __InputArrangementProps,
        CommonElementProps,
        ComponentPropsWithoutRef<'input'> {
    name: string
    label: string
    value?: string
    placeholder?: string
    errors?: ValidationError
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props: InputProps, ref) => {
        const {
            type = 'text',
            name,
            label,
            placeholder = '',
            $a__vertical = false,
            errors,
            ...restProps
        } = props

        const [err, setErr] =
            useState<ValidationError | undefined | null>(errors)

        useEffect(() => {
            setErr(errors)
        }, [errors])

        const theme = useTheme()
        const captionStyle = theme.typography[theme.ui.caption]

        const errStyle: Partial<CommonElementProps> = useMemo(
            () =>
                err
                    ? {
                          $borderColor: 'error-300',
                          $textColor: 'error-900',
                          $placeholderColor: 'error-300',
                          focus$borderColor: 'error-500',
                          focus$ringColor: 'error-500',
                      }
                    : {},
            [err],
        )

        const errMsgStyle: Partial<CommonElementProps> = {
            ...captionStyle,
            $textColor: 'error-900',
        }

        const errAriaAttrs = useMemo(
            () =>
                err
                    ? {
                          ['aria-invalid']: true,
                          ['aria-describedby']: `${name}-error`,
                      }
                    : {},
            [err],
        )

        const inputStyle: Partial<CommonElementProps> = useMemo(
            () => ({
                $display: 'block',
                // $width: 'full',
                $borderRadius: 'md',
                $borderColor: 'neutral-300',
                $padding: {
                    right: '10',
                },
                focus$outline: 'none',
                focus$borderColor: 'primary-500',
                focus$ringColor: 'primary-500',
            }),
            [],
        )

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

        return (
            <Box
                {...arrangement}
                $width="full"
                $flex="initial"
                $justifyItems="stretch"
            >
                <Label htmlFor={name} $width="fit" {...captionStyle}>
                    {label}
                </Label>
                <Box $direction="col" $gap="0.5">
                    <HTMLInput
                        type={type}
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        {...inputStyle}
                        {...errStyle}
                        {...errAriaAttrs}
                        {...restProps}
                        ref={ref}
                    />
                    {err && err.message && (
                        <Text {...errMsgStyle}>{err.message}</Text>
                    )}
                </Box>
            </Box>
        )
    },
)
