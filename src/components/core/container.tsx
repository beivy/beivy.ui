import { buildContainerClassNames } from '@/components/utils'
import { PropsWithChildren } from 'react'
import {
    buildColumnInFlexClassNames,
    buildColumnInGridClassNames,
    buildRowInFlexClassNames,
    buildRowInGridClassNames,
} from '../utils'
import {
    BeTBackgroundColor,
    BeTGrid,
    BeTHeight,
    BeTWidth,
    DecoratedProps,
    FlexLayoutableProps,
    GeometryLayoutableProps,
    GridAndFlexContainerProps,
    GridLayoutableProps,
    LayoutableProps,
} from './type'

/**
 * @Component Container
 */
export interface ContainerProps extends PropsWithChildren {
    bgColor?: BeTBackgroundColor
    width?: BeTWidth
    height?: BeTHeight
    center?: boolean | undefined
    grid?: BeTGrid | undefined
}

const Container = ({
    children,
    bgColor,
    width,
    height,
    center,
    grid,
    ...props
}: ContainerProps) => {
    const classNames = buildContainerClassNames(
        bgColor,
        width,
        height,
        center,
        grid,
    )
    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    )
}

/**
 * @Component Column
 */
export interface ColumnProps
    extends PropsWithChildren,
        DecoratedProps,
        GeometryLayoutableProps,
        LayoutableProps,
        GridAndFlexContainerProps,
        GridLayoutableProps,
        FlexLayoutableProps {}
const Column = ({
    reverse,
    width,
    height,
    colSpan,
    rowSpan,
    bgColor,
    autoGrow,
    autoShrink,
    justifySelf,
    alignSelf,
    margin,
    gutter,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    children,
}: ColumnProps) => {
    const classNames = (() => {
        if (width || width === 0 || height || height === 0) {
            return buildColumnInFlexClassNames(
                width,
                height,
                margin,
                gutter,
                bgColor,
                justifyContent,
                justifyItems,
                alignContent,
                alignItems,
                reverse,
            )
        }

        return buildColumnInGridClassNames(
            colSpan,
            rowSpan,
            margin,
            gutter,
            bgColor,
            justifyContent,
            justifyItems,
            alignContent,
            alignItems,
            reverse,
        )
    })()
    return <div className={classNames}>{children}</div>
}

/**
 * @Component Row
 */
export interface RowProps
    extends PropsWithChildren,
        GeometryLayoutableProps,
        LayoutableProps,
        DecoratedProps,
        GridAndFlexContainerProps,
        GridLayoutableProps,
        FlexLayoutableProps {}

const Row = ({
    reverse,
    width,
    height,
    colSpan,
    rowSpan,
    bgColor,
    autoGrow,
    autoShrink,
    justifySelf,
    alignSelf,
    margin,
    gutter,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    children,
}: RowProps) => {
    const classNames = (() => {
        if (width || width === 0 || height || height === 0) {
            return buildRowInFlexClassNames(
                width,
                height,
                margin,
                gutter,
                bgColor,
                justifyContent,
                justifyItems,
                alignContent,
                alignItems,
                reverse,
            )
        }

        return buildRowInGridClassNames(
            colSpan,
            rowSpan,
            margin,
            gutter,
            bgColor,
            justifyContent,
            justifyItems,
            alignContent,
            alignItems,
            reverse,
        )
    })()
    return <div className={classNames}>{children}</div>
}

export { Container, Column, Row }
