import { FC, forwardRef, useMemo } from 'react'
import { twGrid, twGridItem } from '../utils'
import { GridItemProps, GridProps } from './be.core-types'

export interface IGrid extends FC<GridProps> {}

const __Grid: IGrid = forwardRef<HTMLDivElement>(
    ({ children, ...props }: GridProps, ref) => {
        const { classNames, ...restProps } = useMemo(
            () => twGrid(props),
            [props],
        )
        return (
            <div className={classNames} {...restProps} ref={ref}>
                {children}
            </div>
        )
    },
)
const __GridItem: FC<GridItemProps> = ({
    children,
    ...props
}: GridItemProps) => {
    const { classNames, ...restProps } = useMemo(
        () => twGridItem(props),
        [props],
    )
    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    )
}

export const Grid = Object.assign(__Grid, { Item: __GridItem })
