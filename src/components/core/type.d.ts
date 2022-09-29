import type {
    TAlignContent,
    TAlignItems,
    TAlignSelf,
    THeight,
    TJustifyContent,
    TJustifyItems,
    TJustifySelf,
    TMaxWidth,
    TMinWidth,
    TWidth,
} from 'tailwindcss-classnames'

export type BeTInheritColor = 'transparent' | 'current'
export type BeTColorSystem =
    | 'primary'
    | 'second'
    | 'neutral'
    | 'semantic-success'
    | 'semantic-warning'
    | 'semantic-error'
    | 'semantic-info'
export type BeTColorHue =
    | 'slate'
    | 'Gray'
    | 'zinc'
    | 'stone'
    | 'red'
    | 'orange'
    | 'amber'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
export type BeTColorSaturation =
    | '50'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'

export type BeTColorOpacity =
    | '0'
    | '5'
    | '10'
    | '20'
    | '30'
    | '40'
    | '50'
    | '60'
    | '70'
    | '75'
    | '80'
    | '90'
    | '95'
    | '100'

// export type BeTBackgroundColors =
//     | `bg-${BeTInheritColor}`
//     | `bg-${BeTColorSystem}-${BeTColorSaturation}`
//     | `bg-${BeTColorHue}-${BeTColorSaturation}`
//     | `bg-ext-${BeTColorHue}-${BeTColorSaturation}`
//     | `bg-[#${number}]`

export type BeTColors =
    | `${BeTInheritColor}`
    | `${BeTColorSystem}-${BeTColorSaturation}`
    | `${BeTColorHue}-${BeTColorSaturation}`

export type BeTBackgroundColors =
    | `bg-${BeTColors}`
    | `bg-ext-${BeTColorHue}-${BeTColorSaturation}`
    | `bg-[#${number}]`

export type BeTBackgroundColorOpacity = `bg-opacity-${BeTColorOpacity}`

export type BeTBackgroundColor =
    | BeTBackgroundColors
    | `${BeTBackgroundColors} ${BeTBackgroundColorOpacity}`

export type BeTWidth = TWidth | `w-[${number}px]` | `w-[${number}rem]`
export type BeTMinWidth =
    | TMinWidth
    | `min-w-[${number}px]`
    | `min-w-[${number}rem]`
export type BeTMaxWidth =
    | TMaxWidth
    | `max-w-[${number}px]`
    | `max-w-[${number}rem]`
export type BeTHeight = THeight | `h-[${number}px]` | `h-[${number}rem]`
export type BeTJustifySelf = TJustifySelf
export type BeTAlignSelf = TAlignSelf
export type BeTJustifyContent = TJustifyContent
export type BeTJustifyItems = TJustifyItems
export type BeTAlignContent = TAlignContent
export type BeTAlignItems = TAlignItems
export type BeTAlign = TAlign
export type BeTBasicGrid = {
    margin?: number | undefined
    gutter?: number | undefined
}
export type BeTColumnsGrid = BeTBasicGrid & {
    columns?: number | undefined
}
export type BeTRowsGrid = BeTBasicGrid & {
    rows?: number | undefined
}
export type BeTGenericGrid<T extends 'column' | 'row' | 'grid'> = {
    type: T
} & (T extends 'column'
    ? BeTColumnsGrid
    : T extends 'row'
    ? BeTRowsGrid
    : BeTColumnsGrid & BeTRowsGrid)

export type BeTGrid =
    | BeTGenericGrid<'column'>
    | BeTGenericGrid<'row'>
    | BeTGenericGrid<'grid'>

export interface DecoratedProps {
    bgColor?: BeTBackgroundColor | undefined
}

export interface GeometryLayoutableProps {
    width?: BeTWidth | undefined
    minWidth?: BeT
    height?: BeTHeight | undefined
}

export interface GridLayoutableProps {
    rowSpan?: number | undefined
    colSpan?: number | undefined
}

export interface FlexLayoutableProps {
    autoGrow?: boolean | undefined
    autoShrink?: boolean | undefined
}

export interface LayoutableProps {
    justifySelf?: BeTJustifySelf | undefined
    alignSelf?: BeAlignSelf | undefined
}

export interface GridAndFlexContainerProps {
    margin?: number | undefined
    gutter?: number | undefined
    reverse?: boolean | undefined
    justifyContent?: BeTJustifyContent | undefined
    justifyItems?: BeTJustifyItems | undefined
    alignContent?: BeTAlignContent | undefined
    alignItems?: BeTAlignItems | undefined
}

export interface Background {
    bgColor?: BeTBackgroundColor | undefined
    bgOrigin?: any
    bgPosition?: any
    bgReport?: any
    bgSize?: any
    bgImage?: any
}

export type ScreenBarometer =
    | 'none'
    | 'normal'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | 'full'
export type SizeInterval = 'normal' | '0' | '1' | '2' | '4' | '8'

export interface Border {
    radius: ScreenBarometer
    width: SizeInterval
    color: BeTColor
}

export interface Decorator {}
