import { FC } from 'react'
import { twGrid, twGridItem } from '../utils'
import { GridItemProps, GridProps } from './be.core-types'

export interface IGrid extends FC<GridProps> {
    Item: FC<GridItemProps>
}

const Grid: IGrid = ({ children, ...props }: GridProps) => {
    const { classNames, ...restProps } = twGrid(props)
    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    )
}
const GridItem: FC<GridItemProps> = ({ children, ...props }: GridItemProps) => {
    const { classNames, ...restProps } = twGridItem(props)
    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    )
}

Grid.Item = GridItem
export { Grid }
