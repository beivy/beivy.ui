import { forwardRef } from 'react'
import {
    CommonFormElementProps,
    PseudoState,
    Screen,
    TextProps,
} from '../core/be.core-types'
import { twClass } from '../utils'

export interface InputProps
    extends React.ComponentPropsWithoutRef<'input'>,
        CommonFormElementProps,
        Partial<TextProps>,
        Partial<Screen<TextProps>>,
        Partial<PseudoState<TextProps>> {}

export type InputRef = HTMLInputElement

export const Input = forwardRef<InputRef, InputProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return <input className={classNames} {...restProps} ref={ref} />
    },
)
