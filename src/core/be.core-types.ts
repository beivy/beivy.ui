import type {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    ElementType,
} from 'react'
import { RegisterOptions } from 'react-hook-form'
import type {
    BeTAlignment,
    BeTAxisPadding,
    BeTBackground,
    BeTBorderColor,
    BeTBorderRadius,
    BeTBorderStyle,
    BeTBorderWidth,
    BeTBoxShadow,
    BeTBoxShadowColor,
    BeTColumnInterval,
    BeTCursor,
    BeTDisplay,
    BeTDivideColor,
    BeTDivideStyle,
    BeTDivideWidth,
    BeTExtTypography,
    BeTExtTypographyColor,
    BeTFlex,
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
    BeTObjectPosition,
    BeTOpacity,
    BeTOutlineColor,
    BeTOutlineStyle,
    BeTOutlineWidth,
    BeTOverflow,
    BeTOverscroll,
    BeTPadding,
    BeTPosition,
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
    BeTRingColor,
    BeTRingOffsetColor,
    BeTRingOffsetWidth,
    BeTRingWidth,
    BeTScreen,
    BeTSpace,
    BeTSvgFill,
    BeTSvgStroke,
    BeTSvgStrokeWidth,
    BeTTransformOrigin,
    BeTTypography,
    BeTUserSelect,
    BeTViewportOrientation,
    BeTVisibility,
    BeTVisibilityDisplay,
    BeTWidth,
    BeTZIndex,
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
    $padding: BeTPadding | BeTAxisPadding
    $space: BeTSpace
    $overflow: BeTOverflow
    $overscroll: BeTOverscroll
}

export interface ElementDisplayProps {
    $display?: BeTDisplay
}

export interface ElementVisibilityProps {
    $visible?: BeTVisibility
    $display?: BeTVisibilityDisplay
}

export type Responsible<T> = T | Partial<Screen<T> & PseudoState<T>>

export interface ElementPositionProps {
    $position?: BeTPosition
    $objPosition?: BeTObjectPosition
}

export interface ELementFlexProps {
    $flex?: BeTFlex
}

export interface ShadowProps {
    $shadow?: BeTBoxShadow
    $shadowColor?: BeTBoxShadowColor
}

export interface TransformProps {
    $transformOrigin?: BeTTransformOrigin
}

export interface TextProps {
    $fontSize: BeTTypography['size']
    $fontWeight: BeTTypography['weight']
    $lineHeight: BeTTypography['lineHeight']
    $textColor: BeTTypography['color']
    $textAlign: BeTTypography['textAlign']
    $textDecoration: BeTTypography['textDecoration']
    $textDecorationColor: BeTTypography['textDecorationColor']
    $textDecorationStyle: BeTTypography['textDecorationStyle']
    $textDecorationThickness: BeTTypography['textDecorationThickness']
    $verticalAlign: BeTTypography['verticalAlign']
    $userSelect: BeTUserSelect
}

export interface BorderProps {
    $borderRadius: BeTBorderRadius
    $borderWidth: BeTBorderWidth
    $borderColor: BeTBorderColor
    $borderOpacity: BeTOpacity
    $borderStyle: BeTBorderStyle
}

export interface DivideProps {
    $divideColor: BeTDivideColor
    $divideWidth: BeTDivideWidth
    $divideStyle: BeTDivideStyle
}

export interface OutlineProps {
    $outlineColor: BeTOutlineColor
    $outlineStyle: BeTOutlineStyle
    $outlineWidth: BeTOutlineWidth
}

export interface RingProps {
    $ringColor: BeTRingColor
    $ringWidth: BeTRingWidth
    $ringOffsetWidth: BeTRingOffsetWidth
    $ringOffsetColor: BeTRingOffsetColor
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
    $flex: BeTFlex
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

export interface CommonElementProps
    extends Partial<ElementVisibilityProps>,
        Partial<Screen<ElementVisibilityProps>>,
        Partial<PseudoState<ElementVisibilityProps>>,
        Partial<FrameProps>,
        Partial<Screen<FrameProps>>,
        Partial<PseudoState<FrameProps>>,
        Partial<BorderProps>,
        Partial<Screen<BorderProps>>,
        Partial<PseudoState<BorderProps>>,
        Partial<DivideProps>,
        Partial<Screen<DivideProps>>,
        Partial<PseudoState<DivideProps>>,
        Partial<OutlineProps>,
        Partial<Screen<OutlineProps>>,
        Partial<PseudoState<OutlineProps>>,
        Partial<RingProps>,
        Partial<Screen<RingProps>>,
        Partial<PseudoState<RingProps>>,
        Partial<RingProps>,
        Partial<Screen<RingProps>>,
        Partial<PseudoState<RingProps>>,
        Partial<ShadowProps>,
        Partial<Screen<ShadowProps>>,
        Partial<PseudoState<ShadowProps>>,
        Partial<TransformProps>,
        Partial<Screen<TransformProps>>,
        Partial<PseudoState<TransformProps>>,
        Partial<BackgroundProps>,
        Partial<Screen<BackgroundProps>>,
        Partial<PseudoState<BackgroundProps>>,
        Partial<PreferColorSchema<BackgroundProps>>,
        Partial<BoxAlignmentProps>,
        Partial<Screen<BoxAlignmentProps>>,
        Partial<PseudoState<BoxAlignmentProps>>,
        Partial<TextProps>,
        Partial<Screen<TextProps>>,
        Partial<PseudoState<TextProps>> {
    $cursor?: BeTCursor
}

export interface CommonFormElementProps {
    rules?: RegisterOptions
}

export interface BoxPropsWithoutDisplay
    extends CommonElementProps,
        Partial<Typography>,
        Partial<Screen<Typography>>,
        Partial<PseudoState<Typography>>,
        ElementPositionProps,
        Partial<Screen<ElementPositionProps>>,
        Partial<PseudoState<ElementPositionProps>>,
        ComponentPropsWithoutRef<'div'> {}

export interface BoxProps
    extends BoxPropsWithoutDisplay,
        Partial<FlexBoxProps>,
        Partial<Screen<FlexBoxProps>>,
        Partial<PseudoState<FlexBoxProps>> {}

export type LayoutElementProps<T extends ElementType> = CommonElementProps &
    Partial<Typography> &
    Partial<Screen<Typography>> &
    Partial<PseudoState<Typography>> &
    ElementPositionProps &
    Partial<Screen<ElementPositionProps>> &
    Partial<PseudoState<ElementPositionProps>> &
    Partial<FlexBoxProps> &
    Partial<Screen<FlexBoxProps>> &
    Partial<PseudoState<FlexBoxProps>> &
    ComponentPropsWithoutRef<T>

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

export interface InsetProps {
    $inset?: BeTInset | undefined
    $top?: BeTInsetTop | undefined
    $right?: BeTInsetRight | undefined
    $left?: BeTInsetLeft | undefined
    $bottom?: BeTInsetBottom | undefined
    $zIndex?: BeTZIndex | undefined
}

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
        ComponentPropsWithRef<'svg'> {}

export type Resize = 'auto' | 'hugContent' | 'fillContainer'

interface __ElementConstraintsProps extends FrameProps {
    $c__resize?: Resize
}

export interface ElementConstraintsProps
    extends Partial<__ElementConstraintsProps>,
        Partial<Screen<__ElementConstraintsProps>>,
        Partial<PseudoState<__ElementConstraintsProps>> {}

export interface DevControlStyleProps
    extends Partial<BorderProps>,
        Partial<FrameProps>,
        Partial<Screen<FrameProps>>,
        Partial<PseudoState<FrameProps>>,
        Partial<Screen<BorderProps>>,
        Partial<PseudoState<BorderProps>>,
        Partial<BackgroundProps>,
        Partial<Screen<BackgroundProps>>,
        Partial<PseudoState<BackgroundProps>> {}
