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
    BeTExtTypography,
    BeTExtTypographyColor,
    BeTFlexDirection,
    BeTFlexGrow,
    BeTFlexShrink,
    BeTFlexWrap,
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
    BeTTypography,
    BeTViewportOrientation,
    BeTWidth,
} from './be.tailwind-types'

export type Permutations<T extends string, U extends string = T> = T extends any
    ? T | `${T} ${BeTScreen}:${U}}` | `${T} ${BeTScreen}:${U} ${BeTScreen}:${U}`
    : never

export type MixIn<T, P extends string, U = keyof T> = {
    //@ts-ignore
    [K in U as K extends string ? `${P}${K}` : never]: T[K]
}

export type Screen<T> = MixIn<T, BeTScreen>

export type PseudoState<T> = MixIn<T, BeTPseudoState>
export type PseudoSelector<T> = MixIn<T, BeTPseudoSelector>
export type PseudoFormState<T> = MixIn<T, BeTPseudoFormState>
export type PseudoContents<T> = MixIn<T, BeTPseudoContents>
export type PseudoFormElements<T> = MixIn<T, BeTPseudoFormElements>
export type PseudoFileElements<T> = MixIn<T, BeTPseudoFileElements>
export type PseudoListElements<T> = MixIn<T, BeTPseudoListElements>
export type PseudoTextElements<T> = MixIn<T, BeTPseudoTextElements>
export type PseudoDialogElements<T> = MixIn<T, BeTPseudoDialogElements>
export type PreferColorSchema<T> = MixIn<T, BeTPreferColorSchema>
export type PreferReduceMotions<T> = MixIn<T, BeTPreferReduceMotions>
export type PreferContrast<T> = MixIn<T, BeTPreferContrast>
export type ViewportOrientation<T> = MixIn<T, BeTViewportOrientation>
export type PrintStyle<T> = MixIn<T, BeTPrintStyle>

export interface FrameProps {
    $width: BeTWidth
    $minWidth: BeTMinWidth
    $maxWidth: BeTMaxWidth
    $height: BeTHeight
    $minHeight: BeTMinHeight
    $maxHeight: BeTMaxHeight
    $margin: BeTMargin
    $padding: BeTPadding
    $space: BeTSpace
}

export interface ElementProps {
    $display: BeTDisplay
}

export interface TextProps {
    $textColor: BeTTypography['color']
    $textAlign: BeTTypography['textAlign']
    $textDecoration: BeTTypography['textDecoration']
    $textDecorationColor: BeTTypography['textDecorationColor']
    $textDecorationStyle: BeTTypography['textDecorationStyle']
    $TextDecorationThickness: BeTTypography['textDecorationThickness']
}

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

export interface FlexBoxProps {
    $direction: BeTFlexDirection
    $flexGrow: BeTFlexGrow
    $flexWrap: BeTFlexWrap
    $flexShrink: BeTFlexShrink
    $gap: BeTGap
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

export interface CommonProps
    extends Partial<FrameProps>,
        Partial<Screen<FrameProps>>,
        Partial<PseudoState<FrameProps>>,
        Partial<BorderProps>,
        Partial<Screen<BorderProps>>,
        Partial<PseudoState<BorderProps>>,
        Partial<BackgroundProps>,
        Partial<Screen<BackgroundProps>>,
        Partial<PseudoState<BackgroundProps>>,
        Partial<PreferColorSchema<BackgroundProps>>,
        Partial<BoxAlignmentProps>,
        Partial<Screen<BoxAlignmentProps>>,
        Partial<PseudoState<BoxAlignmentProps>> {}

export interface BoxPropsWithoutDisplay
    extends CommonProps,
        Partial<Typography>,
        Partial<Screen<Typography>>,
        Partial<PseudoState<Typography>>,
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
export interface ColumnGridProps extends BasicGridProps {
    $cols: BeTGridInterval
    $autoCols: 'auto' | 'min' | 'max' | 'fr'
}

export interface RowGridProps extends BasicGridProps {
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

export interface Typography {
    $typography: BeTExtTypography
    $typographyColor: BeTExtTypographyColor
}

export interface SVGIconProps
    extends Partial<SVGProps>,
        Partial<Screen<SVGProps>>,
        Partial<PseudoState<SVGProps>>,
        Partial<FrameProps>,
        Partial<Screen<FrameProps>>,
        Partial<PseudoState<FrameProps>>,
        ComponentPropsWithRef<'span'> {}

export type Resize = 'auto' | 'hugContent' | 'fillContainer'
export interface ElementConstraintsProps extends FrameProps {
    c__resize?: Resize
}
