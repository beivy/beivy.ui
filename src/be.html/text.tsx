import {
    CommonElementProps,
    PseudoState,
    Screen,
    TextProps as HTMLTextProps,
} from '../core/be.core-types'
import { twClass } from '../utils'

export interface TextProps
    extends Omit<React.ComponentPropsWithoutRef<'p'>, 'className' | 'style'>,
        CommonElementProps,
        Partial<HTMLTextProps>,
        Partial<Screen<HTMLTextProps>>,
        Partial<PseudoState<HTMLTextProps>> {}

export const H1 = ({ children, ...props }: TextProps) => {
    const { classNames, ...restProps } = twClass<TextProps>(props)
    return (
        <h1 className={classNames} {...restProps}>
            {children}
        </h1>
    )
}

export const H2 = ({ children, ...props }: TextProps) => {
    const { classNames, ...restProps } = twClass<TextProps>(props)
    return (
        <h2 className={classNames} {...restProps}>
            {children}
        </h2>
    )
}

export const H3 = ({ children, ...props }: TextProps) => {
    const { classNames, ...restProps } = twClass<TextProps>(props)
    return (
        <h3 className={classNames} {...restProps}>
            {children}
        </h3>
    )
}

export const H4 = ({ children, ...props }: TextProps) => {
    const { classNames, ...restProps } = twClass<TextProps>(props)
    return (
        <h4 className={classNames} {...restProps}>
            {children}
        </h4>
    )
}

export const H5 = ({ children, ...props }: TextProps) => {
    const { classNames, ...restProps } = twClass<TextProps>(props)
    return (
        <h5 className={classNames} {...restProps}>
            {children}
        </h5>
    )
}

export const Text = ({ children, ...props }: TextProps) => {
    const { classNames, ...restProps } = twClass<TextProps>(props)
    return (
        <p className={classNames} {...restProps}>
            {children}
        </p>
    )
}
