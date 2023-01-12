import { useMemo } from 'react'
import {
    CommonElementProps,
    PseudoState,
    Screen,
    TextProps as HTMLTextProps,
} from '../core/be.core-types'
import { twClass } from '../utils'

export interface ListProps
    extends Omit<React.ComponentPropsWithoutRef<'ul'>, 'className' | 'style'>,
        CommonElementProps,
        Partial<HTMLTextProps>,
        Partial<Screen<HTMLTextProps>>,
        Partial<PseudoState<HTMLTextProps>> {}

export const UL = ({ children, ...props }: TextProps) => {
    const { classNames, ...restProps } = useMemo(
        () => twClass<TextProps>(props),
        [props],
    )
    return (
        <ul className={classNames} {...restProps}>
            {children}
        </ul>
    )
}

export const LI = ({ children, ...props }: TextProps) => {
    const { classNames, ...restProps } = useMemo(
        () => twClass<TextProps>(props),
        [props],
    )
    return (
        <li className={classNames} {...restProps}>
            {children}
        </li>
    )
}
