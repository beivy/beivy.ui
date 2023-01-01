import { forwardRef } from 'react'
import {
    CommonFormElementProps,
    PseudoState,
    Screen,
    TextProps,
} from '../core/be.core-types'
import { twClass } from '../utils'

export interface LinkProps
    extends React.ComponentPropsWithoutRef<'a'>,
        CommonFormElementProps,
        Partial<TextProps>,
        Partial<Screen<TextProps>>,
        Partial<PseudoState<TextProps>> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return (
            <a className={classNames} {...restProps} ref={ref}>
                {children}
            </a>
        )
    },
)
