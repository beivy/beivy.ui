import {
    CommonProps,
    PseudoState,
    Screen,
    TextProps,
} from '../core/be.core-types'
import { twClass } from '../utils'

export interface LabelProps
    extends Omit<
            React.ComponentPropsWithoutRef<'label'>,
            'className' | 'style'
        >,
        CommonProps,
        Partial<TextProps>,
        Partial<Screen<TextProps>>,
        Partial<PseudoState<TextProps>> {}

export const Label = ({ children, ...props }: LabelProps) => {
    const { classNames, ...restProps } = twClass<LabelProps>(props)
    return (
        <label className={classNames} {...restProps}>
            {children}
        </label>
    )
}
