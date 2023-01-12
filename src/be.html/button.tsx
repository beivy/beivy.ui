import { forwardRef } from 'react'
import {
    CommonElementProps,
    PseudoState,
    Screen,
    TextProps,
} from '../core/be.core-types'
import { twClass } from '../utils'

export interface ButtonProps
    extends React.ComponentPropsWithoutRef<'button'>,
        CommonElementProps,
        // Partial<ElementDisplayProps>,
        // Partial<Screen<ElementDisplayProps>>,
        // Partial<PseudoState<ElementDisplayProps>>,
        Partial<TextProps>,
        Partial<Screen<TextProps>>,
        Partial<PseudoState<TextProps>> {}

export type ButtonRef = HTMLButtonElement

export const Button = forwardRef<ButtonRef, ButtonProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return (
            <button className={classNames} {...restProps} ref={ref}>
                {children}
            </button>
        )
    },
)
