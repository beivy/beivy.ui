import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react'
import type {
    BeTAlignment,
    BeTBackground,
    BeTBorderColor,
    BeTBorderRadius,
    BeTBorderStyle,
    BeTBorderWidth,
    BeTColumnInterval,
    BeTDisplay,
    BeTFlexDirection,
    BeTGap,
    BeTGridBasicInterval,
    BeTGridInterval,
    BeTGridSpanInterval,
    BeTHeight,
    BeTInset,
    BeTInsetBottom,
    BeTInsetLeft,
    BeTInsetRight,
    BeTInsetTop,
    BeTMargin,
    BeTMaxHeight,
    BeTMaxWidth,
    BeTMinHeight,
    BeTMinWidth,
    BeTOpacity,
    BeTPadding,
    BeTPreferColorSchema,
    BeTPreferContrast,
    BeTPreferReduceMotions,
    BeTPrintStyle,
    BeTPseudoContents,
    BeTPseudoDialogElements,
    BeTPseudoFileElements,
    BeTPseudoFormElements,
    BeTPseudoFormState,
    BeTPseudoListElements,
    BeTPseudoSelector,
    BeTPseudoState,
    BeTPseudoTextElements,
    BeTScreen,
    BeTSpace,
    BeTSvgFill,
    BeTSvgStroke,
    BeTSvgStrokeWidth,
    BeTTextColor,
    BeTViewportOrientation,
    BeTWidth,
} from './be.tailwind-types'

type Permutations<T extends string, U extends string = T> = T extends any
    ? T | `${T} ${BeTScreen}:${U}}` | `${T} ${BeTScreen}:${U} ${BeTScreen}:${U}`
    : never

type MixIn<T, P extends string, U = keyof T> = {
    //@ts-ignore
    [K in U as K extends string ? `${P}${K}` : never]: T[K]
}

type Screen<T> = MixIn<T, BeTScreen>

type PseudoState<T> = MixIn<T, BeTPseudoState>
type PseudoSelector<T> = MixIn<T, BeTPseudoSelector>
type PseudoFormState<T> = MixIn<T, BeTPseudoFormState>
type PseudoContents<T> = MixIn<T, BeTPseudoContents>
type PseudoFormElements<T> = MixIn<T, BeTPseudoFormElements>
type PseudoFileElements<T> = MixIn<T, BeTPseudoFileElements>
type PseudoListElements<T> = MixIn<T, BeTPseudoListElements>
type PseudoTextElements<T> = MixIn<T, BeTPseudoTextElements>
type PseudoDialogElements<T> = MixIn<T, BeTPseudoDialogElements>
type PreferColorSchema<T> = MixIn<T, BeTPreferColorSchema>
type PreferReduceMotions<T> = MixIn<T, BeTPreferReduceMotions>
type PreferContrast<T> = MixIn<T, BeTPreferContrast>
type ViewportOrientation<T> = MixIn<T, BeTViewportOrientation>
type PrintStyle<T> = MixIn<T, BeTPrintStyle>

export interface FrameProps {
    $display: BeTDisplay
    $width: BeTWidth
    $minWidth: BeTMinWidth
    $maxWidth: BeTMaxWidth
    $height: BeTHeight
    $minHeight: BeTMinHeight
    $maxHeight: BeTMaxHeight
    $margin: BeTMargin
    $padding: BeTPadding
    $space: BeTSpace
    $textColor: BeTTextColor
}
export interface FlexBoxProps {
    $direction: BeTFlexDirection
    $gap: BeTGap
}

export type FramePropsWithoutProps = Omit<FrameProps, 'display'>

export interface BorderProps {
    $borderRadius: BeTBorderRadius
    $borderWidth: BeTBorderWidth
    $borderColor: BeTBorderColor
    $borderOpacity: BeTOpacity
    $borderStyle: BeTBorderStyle
}

export interface BackgroundProps {
    $bgColor: BeTBackground['color']
    $bgOpacity: BeTOpacity
    $bgOrigin: BeTBackground['origin']
    $bgPosition: BeTBackground['position']
    $bgRepeat: BeTBackground['repeat']
    $bgSize: BeTBackground['size']
    $bgImage: BeTBackground['image']
    $bgBlend: BeTBackground['blendMode']
}

export interface BoxAlignmentProps {
    $justifyContent: BeTAlignment['justifyContent']
    $justifyItems: BeTAlignment['justifyItems']
    $alignContent: BeTAlignment['alignContent']
    $alignItems: BeTAlignment['alignItems']
    $placeContent: BeTAlignment['placeContent']
    $placeItems: BeTAlignment['placeItems']
}

export interface SelfAlignmentProps {
    $justifySelf: BeTAlignment['justifySelf']
    $alignSelf: BeTAlignment['alignSelf']
    $placeSelf: BeTAlignment['placeSelf']
}

export interface BoxPropsWithoutDisplay
    extends Partial<FramePropsWithoutProps>,
        Partial<Screen<FramePropsWithoutProps>>,
        Partial<PseudoState<FramePropsWithoutProps>>,
        Partial<BorderProps>,
        Partial<Screen<BorderProps>>,
        Partial<PseudoState<BorderProps>>,
        Partial<BackgroundProps>,
        Partial<Screen<BackgroundProps>>,
        Partial<PseudoState<BackgroundProps>>,
        Partial<PreferColorSchema<BackgroundProps>>,
        Partial<BoxAlignmentProps>,
        Partial<Screen<BoxAlignmentProps>>,
        Partial<PseudoState<BoxAlignmentProps>>,
        ComponentPropsWithoutRef<'div'> {}

export interface BoxProps
    extends BoxPropsWithoutDisplay,
        Partial<FlexBoxProps>,
        Partial<Screen<FlexBoxProps>>,
        Partial<PseudoState<FlexBoxProps>> {}

export interface BasicGridProps {
    $autoFlow: 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense'
    $gap: BeTGap
}
export interface ColumnGridProps {
    $cols: BeTGridInterval
    $autoCols: 'auto' | 'min' | 'max' | 'fr'
}

export interface RowGridProps {
    $rows: BeTGridInterval
    $autoRows: 'auto' | 'min' | 'max' | 'fr'
}

export type GenericGridProps<T extends 'column' | 'row' | 'grid'> =
    T extends 'column'
        ? ColumnGridProps
        : T extends 'row'
        ? RowGridProps
        : ColumnGridProps & RowGridProps

export interface ColumnGridItemProps {
    $colSpan: BeTGridSpanInterval
    $colStart: BeTGridBasicInterval
    $colEnd: BeTGridBasicInterval
}

export interface RowGridItemProps {
    $rowSpan: BeTGridBasicInterval
    $rowStart: BeTGridBasicInterval
    $rowEnd: BeTGridBasicInterval
}

export type GenericGridItemProps<T extends 'column' | 'row' | 'grid'> =
    T extends 'column'
        ? ColumnGridItemProps
        : T extends 'row'
        ? RowGridItemProps
        : ColumnGridItemProps & RowGridItemProps

// export interface BeTGridProps =
//     | BeTGenericGrid<'column'>
//     | BeTGenericGrid<'row'>
//     | BeTGenericGrid<'grid'>

export interface GridItemProps
    extends Partial<GenericGridItemProps<'grid'>>,
        Partial<SelfAlignmentProps>,
        Partial<Screen<SelfAlignmentProps>>,
        Partial<PseudoState<SelfAlignmentProps>>,
        BoxPropsWithoutDisplay {}

export interface GridProps
    extends Partial<GenericGridProps<'grid'>>,
        Partial<Screen<GenericGridProps<'grid'>>>,
        Partial<PseudoState<GenericGridProps<'grid'>>>,
        BoxPropsWithoutDisplay {}

export interface StackProps extends BoxPropsWithoutDisplay {}

export interface InsetProps {
    $inset: BeTInset
    $top: BeTInsetTop
    $right: BeTInsetRight
    $left: BeTInsetLeft
    $bottom: BeTInsetBottom
}
export interface StackItemProps
    extends BoxPropsWithoutDisplay,
        Partial<InsetProps>,
        Partial<Screen<InsetProps>>,
        Partial<PseudoState<InsetProps>> {}

export interface ColumnNumProps {
    $columns: BeTColumnInterval
}

export interface ColumnProps
    extends ColumnNumProps,
        Partial<Screen<ColumnNumProps>>,
        Partial<PseudoState<ColumnNumProps>>,
        BoxPropsWithoutDisplay {}

export interface SVGProps {
    $fill: BeTSvgFill
    $stroke: BeTSvgStroke
    $strokeWidth: BeTSvgStrokeWidth
}

export interface SVGIconProps
    extends Partial<SVGProps>,
        Partial<Screen<SVGProps>>,
        Partial<PseudoState<SVGProps>>,
        Partial<FramePropsWithoutProps>,
        Partial<Screen<FramePropsWithoutProps>>,
        Partial<PseudoState<FramePropsWithoutProps>>,
        ComponentPropsWithRef<'span'> {}
