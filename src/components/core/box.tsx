import { FC } from 'react'
import { twBox } from '../utils'
import { BoxProps } from './be.core-types'

const Box: FC<BoxProps> = ({ children, ...props }: BoxProps) => {
    const { classNames, ...restProps } = twBox(props)
    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    )
}

export { Box }
