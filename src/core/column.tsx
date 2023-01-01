import { FC, forwardRef } from 'react'
import { twColumn } from '../utils'
import { BoxProps, ColumnProps } from './be.core-types'

const Column: FC<ColumnProps> = forwardRef<HTMLDivElement>(
    ({ children, ...props }: BoxProps, ref) => {
        const { classNames, ...restProps } = twColumn(props)
        return (
            <div className={classNames} {...restProps} ref={ref}>
                {children}
            </div>
        )
    },
)

export { Column }
