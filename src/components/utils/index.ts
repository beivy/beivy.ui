import { CSSProperties } from 'react'
import {
    alignContent as tAlignContent,
    alignItems as tAlignItems,
    backgroundColor,
    classnames,
    container,
    display,
    flexDirection,
    gap as tGap,
    grid as tGrid,
    gridColumn,
    height as tHeight,
    justifyContent as tJustifyContent,
    justifyItems as tJustifyItems,
    margin,
    padding as tPadding,
    position,
    TArg,
    TBackgroundColor,
    width as tWidth,
} from 'tailwindcss-classnames'
import {
    BeTAlignContent,
    BeTAlignItems,
    BeTBackgroundColor,
    BeTGrid,
    BeTHeight,
    BeTJustifyContent,
    BeTJustifyItems,
    BeTWidth,
} from '../core/type'

export const buildContainerStyle = (color?: string, style?: CSSProperties) => {
    const customizedStyle = style ? style : {}
    return {
        ...customizedStyle,
        ...(color && { backgroundColor: color }),
    } as CSSProperties
}

const __gridCols: Record<number, string> = {
    0: 'grid-cols-0',
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
}

const __gridRows: Record<number, string> = {
    0: 'grid-rows-0',
    1: 'grid-rows-1',
    2: 'grid-rows-2',
    3: 'grid-rows-3',
    4: 'grid-rows-4',
    5: 'grid-rows-5',
    6: 'grid-rows-6',
    7: 'grid-rows-7',
    8: 'grid-rows-8',
    9: 'grid-rows-9',
    10: 'grid-rows-10',
    11: 'grid-rows-11',
    12: 'grid-rows-12',
}

const __padding: Record<number, string> = {
    0: 'p-0',
    0.5: 'p-0.5',
    1: 'p-1',
    1.5: 'p-1.5',
    2: 'p-2',
    2.5: 'p-2.5',
    3: 'p-3',
    3.5: 'p-3.5',
    4: 'p-4',
    4.5: 'p-4.5',
    5: 'p-5',
    6: 'p-6',
    7: 'p-7',
    8: 'p-8',
    9: 'p-9',
    11: 'p-11',
    12: 'p-12',
    14: 'p-14',
    16: 'p-16',
    20: 'p-20',
    24: 'p-24',
    28: 'p-28',
    32: 'p-32',
    36: 'p-36',
    40: 'p-40',
    44: 'p-44',
    48: 'p-48',
    52: 'p-52',
    56: 'p-56',
    60: 'p-60',
    64: 'p-64',
    68: 'p-68',
    72: 'p-72',
    80: 'p-80',
    96: 'p-96',
}

const __paddingX: Record<number, string> = {
    0: 'px-0',
    0.5: 'px-0.5',
    1: 'px-1',
    1.5: 'px-1.5',
    2: 'px-2',
    2.5: 'px-2.5',
    3: 'px-3',
    3.5: 'px-3.5',
    4: 'px-4',
    4.5: 'px-4.5',
    5: 'px-5',
    6: 'px-6',
    7: 'px-7',
    8: 'px-8',
    9: 'px-9',
    11: 'px-11',
    12: 'px-12',
    14: 'px-14',
    16: 'px-16',
    20: 'px-20',
    24: 'px-24',
    28: 'px-28',
    32: 'px-32',
    36: 'px-36',
    40: 'px-40',
    44: 'px-44',
    48: 'px-48',
    52: 'px-52',
    56: 'px-56',
    60: 'px-60',
    64: 'px-64',
    68: 'px-68',
    72: 'px-72',
    80: 'px-80',
    96: 'px-96',
}

const __paddingY: Record<number, string> = {
    0: 'py-0',
    0.5: 'py-0.5',
    1: 'py-1',
    1.5: 'py-1.5',
    2: 'py-2',
    2.5: 'py-2.5',
    3: 'py-3',
    3.5: 'py-3.5',
    4: 'py-4',
    4.5: 'py-4.5',
    5: 'py-5',
    6: 'py-6',
    7: 'py-7',
    8: 'py-8',
    9: 'py-9',
    11: 'py-11',
    12: 'py-12',
    14: 'py-14',
    16: 'py-16',
    20: 'py-20',
    24: 'py-24',
    28: 'py-28',
    32: 'py-32',
    36: 'py-36',
    40: 'py-40',
    44: 'py-44',
    48: 'py-48',
    52: 'py-52',
    56: 'py-56',
    60: 'py-60',
    64: 'py-64',
    68: 'py-68',
    72: 'py-72',
    80: 'py-80',
    96: 'py-96',
}

const __gap: Record<number, string> = {
    0: 'gap-0',
    0.5: 'gap-0.5',
    1: 'gap-1',
    1.5: 'gap-1.5',
    2: 'gap-2',
    2.5: 'gap-2.5',
    3: 'gap-3',
    3.5: 'gap-3.5',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    7: 'gap-7',
    8: 'gap-8',
    9: 'gap-9',
    10: 'gap-10',
    11: 'gap-11',
    12: 'gap-12',
    14: 'gap-14',
    16: 'gap-16',
    18: 'gap-18',
    20: 'gap-20',
    24: 'gap-24',
    28: 'gap-28',
    32: 'gap-32',
    36: 'gap-36',
    40: 'gap-40',
    44: 'gap-44',
    48: 'gap-48',
    52: 'gap-52',
    56: 'gap-56',
    60: 'gap-60',
    64: 'gap-64',
    68: 'gap-68',
    72: 'gap-72',
    80: 'gap-80',
    96: 'gap-96',
}

const __colSpan: Record<number, string> = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12',
}

const __rowSpan: Record<number, string> = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3',
    4: 'row-span-4',
    5: 'row-span-5',
    6: 'row-span-6',
    7: 'row-span-7',
    8: 'row-span-8',
    9: 'row-span-9',
    10: 'row-span-10',
    11: 'row-span-11',
    12: 'row-span-12',
}

const gridClasz = (grid?: BeTGrid) => {
    if (!grid) return tGrid()
    switch (grid.type) {
        case 'column':
            return tGrid({
                [`${
                    grid.columns ? __gridCols[grid.columns] : 'grid-cols-none'
                }`]: !!grid.columns,
            })
        case 'row':
            return tGrid({
                [`${grid.rows ? __gridRows[grid.rows] : 'grid-rows-none'}`]:
                    !!grid.rows,
            })
        case 'grid':
            return tGrid({
                [`${
                    grid.columns ? __gridCols[grid.columns] : 'grid-cols-none'
                }`]: !!grid.columns,
                [`${grid.rows ? __gridRows[grid.rows] : 'grid-rows-none'}`]:
                    !!grid.rows,
            })
    }
}

const gapClasz = (gutter?: number) => {
    if (!gutter) return tGap()
    return tGap({
        [`${gutter ? __gap[gutter] : 'gap-0'}`]: !!gutter,
    })
}

const padClasz = (type?: 'column' | 'row' | 'grid', margin?: number) => {
    if (!type || !margin) return tPadding()
    switch (type) {
        case 'column':
            return tPadding({
                [`${margin ? __paddingX[margin] : 'px-0'}`]: !!margin,
            })
        case 'row':
            return tPadding({
                [`${margin ? __paddingY[margin] : 'py-0'}`]: !!margin,
            })
        case 'grid':
            return tPadding({
                [`${margin ? __padding[margin] : 'p-0'}`]: !!margin,
            })
    }
}

export const buildContainerClassNames = (
    color?: BeTBackgroundColor,
    width?: BeTWidth,
    height?: BeTHeight,
    center?: boolean,
    grid?: BeTGrid,
    className?: TArg,
) => {
    return classnames(
        className,
        backgroundColor(color as TBackgroundColor),
        tWidth(width),
        tHeight(height),
        container({ ['container']: !width && center }),
        margin({ ['mx-auto']: center }),
        display({ ['grid']: !!grid }),
        position('relative'),
        gridClasz(grid),
        gapClasz(grid?.gutter),
        padClasz(grid?.type, grid?.margin),
    )
}

export const buildRowInGridClassNames = (
    colSpan?: number,
    rowSpan?: number,
    margin?: number,
    gutter?: number,
    bgColor?: BeTBackgroundColor,
    justifyContent?: BeTJustifyContent,
    justifyItems?: BeTJustifyItems,
    alignContent?: BeTAlignContent,
    alignItems?: BeTAlignItems,
    reverse = false,
) => {
    return classnames(
        display('flex'),
        flexDirection({
            ['flex-row']: true,
            ['flex-row-reverse']: reverse,
        }),
        padClasz('column', margin),
        tGap({ [`${gutter ? __gap[gutter] : 'gap-0'}`]: !!gutter }),
        backgroundColor(bgColor as TBackgroundColor),
        tJustifyContent(justifyContent),
        tJustifyItems(justifyItems),
        tAlignContent(alignContent),
        tAlignItems(alignItems),
        gridColumn({
            [`${
                colSpan
                    ? __colSpan[colSpan] || 'col-span-auto'
                    : 'col-span-auto'
            }`]: colSpan,
            [`${
                rowSpan
                    ? __rowSpan[rowSpan] || 'row-span-auto'
                    : 'row-span-auto'
            }`]: rowSpan,
        }),
    )
}

export const buildRowInFlexClassNames = (
    width?: BeTWidth,
    height?: BeTHeight,
    margin?: number,
    gutter?: number,
    bgColor?: BeTBackgroundColor,
    justifyContent?: BeTJustifyContent,
    justifyItems?: BeTJustifyItems,
    alignContent?: BeTAlignContent,
    alignItems?: BeTAlignItems,
    reverse = false,
) => {
    const classNames = classnames(
        display('flex'),
        flexDirection({
            ['flex-row']: true,
            ['flex-row-reverse']: reverse,
        }),
        tWidth(width),
        tHeight(height),
        backgroundColor(bgColor as TBackgroundColor),
        padClasz('column', margin),
        tGap({ [`${gutter ? __gap[gutter] : 'gap-0'}`]: !!gutter }),
        tJustifyContent(justifyContent),
        tJustifyItems(justifyItems),
        tAlignContent(alignContent),
        tAlignItems(alignItems),
    )
    return classNames
}

export const buildColumnInGridClassNames = (
    colSpan?: number,
    rowSpan?: number,
    margin?: number,
    gutter?: number,
    bgColor?: BeTBackgroundColor,
    justifyContent?: BeTJustifyContent,
    justifyItems?: BeTJustifyItems,
    alignContent?: BeTAlignContent,
    alignItems?: BeTAlignItems,
    reverse = false,
) => {
    return classnames(
        display('flex'),
        flexDirection({
            ['flex-col']: true,
            ['flex-col-reverse']: reverse,
        }),
        backgroundColor(bgColor as TBackgroundColor),
        tJustifyContent(justifyContent),
        tJustifyItems(justifyItems),
        tAlignContent(alignContent),
        tAlignItems(alignItems),
        padClasz('row', margin),
        tGap({ [`${gutter ? __gap[gutter] : 'gap-0'}`]: !!gutter }),
        gridColumn({
            [`${
                colSpan
                    ? __colSpan[colSpan] || 'col-span-auto'
                    : 'col-span-auto'
            }`]: colSpan,
            [`${
                rowSpan
                    ? __rowSpan[rowSpan] || 'row-span-auto'
                    : 'row-span-auto'
            }`]: rowSpan,
        }),
    )
}

export const buildColumnInFlexClassNames = (
    width?: BeTWidth,
    height?: BeTHeight,
    margin?: number,
    gutter?: number,
    bgColor?: BeTBackgroundColor,
    justifyContent?: BeTJustifyContent,
    justifyItems?: BeTJustifyItems,
    alignContent?: BeTAlignContent,
    alignItems?: BeTAlignItems,
    reverse = false,
) => {
    const classNames = classnames(
        display('flex'),
        flexDirection({
            ['flex-col']: true,
            ['flex-col-reverse']: reverse,
        }),
        tWidth(width),
        tHeight(height),
        padClasz('row', margin),
        tGap({ [`${gutter ? __gap[gutter] : 'gap-0'}`]: !!gutter }),
        backgroundColor(bgColor as TBackgroundColor),
        tJustifyContent(justifyContent),
        tJustifyItems(justifyItems),
        tAlignContent(alignContent),
        tAlignItems(alignItems),
    )
    return classNames
}
