import { forwardRef, useMemo } from 'react'
import { twBox } from '../utils'
import { BoxProps } from './be.core-types'

const Box = forwardRef<HTMLDivElement, BoxProps & { inline?: boolean }>(
    ({ children, inline = false, ...props }, ref) => {
        const { classNames, ...restProps } = useMemo(
            () => twBox(props, inline),
            [props],
        )
        return (
            <div className={classNames} {...restProps} ref={ref}>
                {children}
            </div>
        )
    },
)

export { Box }
