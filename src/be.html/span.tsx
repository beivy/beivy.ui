import {
    CommonElementProps,
    PseudoState,
    Screen,
    TextProps,
} from '../core/be.core-types'
import { twClass } from '../utils'

export interface SpanProps
    extends Omit<React.ComponentPropsWithoutRef<'span'>, 'className' | 'style'>,
        CommonElementProps,
        Partial<TextProps>,
        Partial<Screen<TextProps>>,
        Partial<PseudoState<TextProps>> {}

export const Span = ({ children, ...props }: SpanProps) => {
    const { classNames, ...restProps } = twClass<SpanProps>(props)
    return (
        <span className={classNames} {...restProps}>
            {children}
        </span>
    )
}
