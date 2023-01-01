import { mergeAll } from 'ramda'
import { ComponentPropsWithoutRef, forwardRef, useMemo } from 'react'
import { Button as HTMLButton } from '../be.html'
import { Box } from '../core'
import { CommonElementProps } from '../core/be.core-types'
import { ThemeType } from '../core/themeProvider'
import { useTheme } from '../hooks/useTheme'
import { Icon, IconType } from '../icon'
import { predicateHeight } from '../utils/be.tw-helper'

export interface ButtonProps
    extends Omit<ComponentPropsWithoutRef<'button'>, 'type'>,
        CommonElementProps {
    type?: 'primary' | 'secondary'
    size?: 'large' | 'medium' | 'small'
    outline?: boolean
    leftIcon?: IconType
    rightIcon?: IconType
}

export type ButtonRef = HTMLButtonElement

const buildButtonStyle = (
    type: ButtonProps['type'],
    size: ButtonProps['size'],
    outline: boolean,
    theme: ThemeType,
) => {
    const sizeStyle = (() => {
        switch (size) {
            case 'large':
                return {
                    ...theme.typography['content-500'],
                    $padding: {
                        x: '4',
                        y: '3',
                    },
                    $gap: 'x-1',
                    $borderRadius: 'md',
                }
            case 'medium':
                return {
                    ...theme.typography['content-400'],
                    $padding: {
                        x: '3',
                        y: '2',
                    },
                    $gap: 'x-1',
                    $borderRadius: 'md',
                }
            case 'small':
                return {
                    ...theme.typography['content-300'],
                    $padding: {
                        x: '2',
                        y: '2',
                    },
                    $gap: 'x-0.5',
                    $borderRadius: 'rounded',
                }
            default:
                throw new Error(
                    `Illegal parameter error, expected the button type to be large, medium or small, but got ${size}`,
                )
        }
    })()

    const typeStyle = (() => {
        switch (type) {
            case 'primary':
                return !outline
                    ? {
                          $bgColor: 'primary',
                          hover$bgColor: 'primary-600',
                          $textColor: 'neutral-100',
                          $borderWidth: '2',
                          $borderColor: 'primary',
                      }
                    : {
                          $bgColor: 'primary-100',
                          hover$bgColor: 'primary-200',
                          $textColor: 'primary-600',
                          $borderWidth: '2',
                          $borderColor: 'primary-600',
                      }
            case 'secondary':
                return !outline
                    ? {
                          $bgColor: 'neutral-600',
                          hover$bgColor: 'neutral-700',
                          $textColor: 'neutral-100',
                      }
                    : {
                          $bgColor: 'neutral-100',
                          hover$bgColor: 'neutral-200',
                          $textColor: 'neutral-600',
                          $borderWidth: '2',
                          $borderColor: 'neutral-600',
                      }
            default:
                throw new Error(
                    'Illegal parameter error, expected the button type to be primary, secondary, but got ' +
                        type,
                )
        }
    })()
    return mergeAll([sizeStyle, typeStyle]) as Partial<CommonElementProps>
}

const buildIconStyle = (
    type: ButtonProps['type'],
    size: ButtonProps['size'],
    outline: boolean,
    theme: ThemeType,
) => {
    const lineHeight = (() => {
        switch (size) {
            case 'large':
                return theme.typography['content-500'].$lineHeight
            case 'medium':
                return theme.typography['content-400'].$lineHeight
            case 'small':
                return theme.typography['content-300'].$lineHeight
            default:
                throw new Error(
                    `Illegal parameter error, expected the button type to be large, medium or small, but got ${size}`,
                )
        }
    })()
    const iconHeight = predicateHeight(lineHeight)
    const iconStyle = (() => {
        switch (type) {
            case 'primary':
                return outline
                    ? {
                          $fill: 'primary-600',
                      }
                    : {
                          $fill: 'neutral-100',
                      }
            case 'secondary':
                return outline
                    ? {
                          $fill: 'neutral-600',
                      }
                    : {
                          $fill: 'neutral-100',
                      }
            default:
                throw new Error(
                    'Illegal parameter error, expected the button type to be primary, secondary, but got ' +
                        type,
                )
        }
    })()
    return mergeAll([
        iconStyle,
        { $height: iconHeight },
    ]) as Partial<CommonElementProps>
}

const Button = forwardRef<ButtonRef, ButtonProps>(
    (
        {
            children,
            type = 'primary',
            size = 'medium',
            outline = false,
            leftIcon,
            rightIcon,
            ...restProps
        },
        ref,
    ) => {
        const theme = useTheme()
        const buttonStyle = useMemo(() => {
            return buildButtonStyle(type, size, outline, theme)
        }, [theme, type, size, outline])
        const iconStyle = useMemo(
            () => buildIconStyle(type, size, outline, theme),
            [theme, type, size, outline],
        )
        const leftIconContent = leftIcon && (
            <Icon type={leftIcon} {...iconStyle} />
        )
        const rightIconContent = rightIcon && (
            <Icon type={rightIcon} {...iconStyle} />
        )
        /**
         * hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
         */
        return (
            <HTMLButton
                {...buttonStyle}
                {...restProps}
                focus$outlineWidth="none"
                focus$ringWidth="2"
                focus$ringOffsetWidth="2"
                focus$ringColor="primary"
                $width="fit"
                ref={ref}
            >
                <Box $flex="initial" inline>
                    {leftIconContent}
                    {children}
                    {rightIconContent}
                </Box>
            </HTMLButton>
        )
    },
)

export { Button }
