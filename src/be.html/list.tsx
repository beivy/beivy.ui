import { useMemo } from 'react'
import {
    CommonElementProps,
    PseudoState,
    Screen,
    TextProps as HTMLTextProps,
} from '../core/be.core-types'
import { twClass } from '../utils'

export interface ULProps
    extends Omit<React.ComponentPropsWithoutRef<'ul'>, 'className' | 'style'>,
        CommonElementProps,
        Partial<HTMLTextProps>,
        Partial<Screen<HTMLTextProps>>,
        Partial<PseudoState<HTMLTextProps>> {}

export const UL = ({ children, ...props }: ULProps) => {
    const { classNames, ...restProps } = useMemo(
        () => twClass<ULProps>(props),
        [props],
    )
    return (
        <ul className={classNames} {...restProps}>
            {children}
        </ul>
    )
}

export interface ListProps
    extends Omit<React.ComponentPropsWithoutRef<'li'>, 'className' | 'style'>,
        CommonElementProps,
        Partial<HTMLTextProps>,
        Partial<Screen<HTMLTextProps>>,
        Partial<PseudoState<HTMLTextProps>> {}
export const LI = ({ children, ...props }: ListProps) => {
    const { classNames, ...restProps } = useMemo(
        () => twClass<ListProps>(props),
        [props],
    )
    return (
        <li className={classNames} {...restProps}>
            {children}
        </li>
    )
}
