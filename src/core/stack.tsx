import { FC, forwardRef } from 'react'
import { twStack, twStackItem } from '../utils'
import { StackItemProps, StackProps } from './be.core-types'

export interface IStack extends FC<StackProps> {
    Item?: FC<StackItemProps>
}

const __Stack: IStack = forwardRef<HTMLDivElement>(
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
