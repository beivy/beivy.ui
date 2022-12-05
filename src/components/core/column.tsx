import { FC } from 'react'
import { twColumn } from '../utils'
import { BoxProps, ColumnProps } from './be.core-types'

const Column: FC<ColumnProps> = ({ children, ...props }: BoxProps) => {
    const { classNames, ...restProps } = twColumn(props)
    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    )
}

export { Column }
