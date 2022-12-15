import {
    CommonProps,
    PseudoState,
    Screen,
    TextProps as HTMLTextProps,
} from '../core/be.core-types'
import { twClass } from '../utils'

export interface TextProps
    extends Omit<React.ComponentPropsWithoutRef<'p'>, 'className' | 'style'>,
        CommonProps,
        Partial<HTMLTextProps>,
        Partial<Screen<HTMLTextProps>>,
        Partial<PseudoState<HTMLTextProps>> {}

export const Text = ({ children, ...props }: TextProps) => {
    const { classNames, ...restProps } = twClass<TextProps>(props)
    return (
        <p className={classNames} {...restProps}>
            {children}
        </p>
    )
}
