import { FC, forwardRef } from 'react'
import { twStack, twStackItem } from '../utils'
import {
    BoxPropsWithoutDisplay,
    InsetProps,
    PseudoState,
    Screen,
} from './be.core-types'
export interface StackProps
    extends React.ComponentPropsWithoutRef<'div'>,
        BoxPropsWithoutDisplay {
    children?: React.ReactNode | React.ReactNode[]
}

export interface StackItemProps
    extends BoxPropsWithoutDisplay,
        Partial<InsetProps>,
        Partial<Screen<InsetProps>>,
        Partial<PseudoState<InsetProps>> {}

const __Stack = forwardRef<HTMLDivElement, StackProps>(
    ({ children, ...props }: StackProps, ref) => {
        const { classNames, ...restProps } = twStack(props)
        return (
            <div className={classNames} {...restProps} ref={ref}>
                {children}
            </div>
        )
    },
)
const __StackItem: FC<StackItemProps> = ({
    children,
    ...props
}: StackItemProps) => {
    const { classNames, ...restProps } = twStackItem(props)
    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    )
}

export const Stack = Object.assign(__Stack, { Item: __StackItem })
