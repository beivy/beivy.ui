import { useMemo } from 'react'
import {
    CommonElementProps,
    PseudoState,
    Screen,
    TextProps,
} from '../core/be.core-types'
import { twClass } from '../utils'

export interface SpanProps
    extends Omit<React.ComponentPropsWithoutRef<'span'>, 'className'>,
        CommonElementProps,
        Partial<TextProps>,
        Partial<Screen<TextProps>>,
        Partial<PseudoState<TextProps>> {}

export const Span = ({ children, ...props }: SpanProps) => {
    const { classNames, ...restProps } = useMemo(
        () => twClass<SpanProps>(props),
        [props],
    )
    return (
        <span className={classNames} {...restProps}>
            {children}
        </span>
    )
}

export interface DivProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>,
        CommonElementProps,
        Partial<TextProps>,
        Partial<Screen<TextProps>>,
        Partial<PseudoState<TextProps>> {}

export const Div = ({ children, ...props }: DivProps) => {
    const { classNames, ...restProps } = useMemo(
        () => twClass<DivProps>(props),
        [props],
    )
    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    )
}
