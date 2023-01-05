import { forwardRef, useMemo, useState } from 'react'
import { Input as HTMLInput, Label } from '../be.html'
import { Box } from '../core'
import { BoxProps, CommonElementProps } from '../core/be.core-types'
import { useTheme } from '../hooks/useTheme'

interface __InputArrangementProps {
    $a__vertical?: boolean
}
export interface InputProps extends __InputArrangementProps {
    name: string
    label: string
    value?: string
    placeholder?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props: InputProps, ref) => {
        const {
            name,
            label,
            placeholder = '',
            value,
            $a__vertical = false,
        } = props

        const [err, setErr] = useState<string | undefined | null>()

        const hasErr = useMemo(() => err, [err])

        const theme = useTheme()
        const captionStyle = theme.typography[theme.ui.caption]

        const errStyle: Partial<CommonElementProps> = useMemo(
            () =>
                hasErr
                    ? {
                          $borderColor: 'error-300',
                          $textColor: 'error-900',
                          $placeholderColor: 'error-300',
                          focus$borderColor: 'error-500',
                          focus$ringColor: 'error-500',
                      }
                    : {},
            [hasErr],
        )

        const errAriaAttrs = useMemo(
            () =>
                hasErr
                    ? {
                          ['aria-invalid']: true,
                          ['aria-describedby']: `${name}-error`,
                      }
                    : {},
            [hasErr],
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
                <HTMLInput
                    type="text"
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    {...inputStyle}
                    {...errStyle}
                    {...errAriaAttrs}
                    ref={ref}
                />
            </Box>
        )
    },
)
