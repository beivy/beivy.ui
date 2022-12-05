import { FC } from 'react'
import { twStack, twStackItem } from '../utils'
import { StackItemProps, StackProps } from './be.core-types'

export interface IStack extends FC<StackProps> {
    Item: FC<StackItemProps>
}

const Stack: IStack = ({ children, ...props }: StackProps) => {
    const { classNames, ...restProps } = twStack(props)
    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    )
}
const StackItem: FC<StackItemProps> = ({
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

Stack.Item = StackItem
export { Stack }
