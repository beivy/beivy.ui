/**
 * pseudo class
 */
export const BeTScreenPrefix = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xl2: '2xl',
} as const
export type BeTScreen = keyof typeof BeTScreenPrefix

export const BeTPseudoStatePrefix = {
    hover: 'hover',
    focus: 'focus',
    focusWithIn: 'focus-within',
    focusVisible: 'focus-visible',
    active: 'active',
    visited: 'visited',
    target: 'target',
} as const
export type BeTPseudoState = keyof typeof BeTPseudoStatePrefix

export const BeTPseudoSelectorPrefix = {
    first: 'first',
    last: 'last',
    only: 'only',
    odd: 'odd',
    even: 'even',
    firstOfType: 'first-of-type',
    lastOfType: 'last-of-type',
    onlyOfType: 'only-of-type',
} as const

export type BeTPseudoSelector = keyof typeof BeTPseudoSelectorPrefix

export const BeTPseudoFormStatePrefix = {
    empty: 'empty',
    disabled: 'disabled',
    enabled: 'enabled',
    checked: 'checked',
    indeterminate: 'indeterminate',
    default: 'default',
    required: 'required',
    valid: 'valid',
    invalid: 'invalid',
    inRange: 'in-range',
    outOfRange: 'out-of-range',
    placeholderShown: 'placeholder-shown',
    autoFill: 'autofill',
    readOnly: 'read-only',
} as const

export type BeTPseudoFormState = keyof typeof BeTPseudoFormStatePrefix

export const BeTPseudoContentsPrefix = {
    before: 'before',
    after: 'after',
} as const

export type BeTPseudoContents = keyof typeof BeTPseudoContentsPrefix

export const BeTPseudoFormElementsPrefix = {
    placeholder: 'placeholder',
} as const

export type BeTPseudoFormElements = keyof typeof BeTPseudoFormElementsPrefix

export const BeTPseudoFileElementsPrefix = {
    file: 'file',
} as const

export type BeTPseudoFileElements = keyof typeof BeTPseudoFileElementsPrefix

export const BeTPseudoListElementsPrefix = {
    list: 'list',
} as const

export type BeTPseudoListElements = keyof typeof BeTPseudoListElementsPrefix

export const BeTPseudoTextElementsPrefix = {
    selection: 'selection',
    firstLine: 'first-line',
    firstLetter: 'first-letter',
} as const

export type BeTPseudoTextElements = keyof typeof BeTPseudoTextElementsPrefix

export const BeTPseudoDialogElementsPrefix = {
    backdrop: 'backdrop',
} as const

export type BeTPseudoDialogElements = keyof typeof BeTPseudoDialogElementsPrefix

export const BeTPreferColorSchemaPrefix = {
    dark: 'dark',
} as const

export type BeTPreferColorSchema = keyof typeof BeTPreferColorSchemaPrefix

export const BeTPreferReduceMotionsPrefix = {
    motionReduce: 'motion-reduce',
    motionSafe: 'motion-safe',
} as const
export type BeTPreferReduceMotions = keyof typeof BeTPreferReduceMotionsPrefix

export const BeTPreferContrastPrefix = {
    contrastMore: 'contrast-more',
} as const
export type BeTPreferContrast = keyof typeof BeTPreferContrastPrefix

export const BeTViewportOrientationPrefix = {
    landscape: 'landscape',
    portrait: 'portrait',
} as const

export type BeTViewportOrientation = keyof typeof BeTViewportOrientationPrefix

export const BeTPrintStylePrefix = {
    print: 'print',
} as const

export type BeTPrintStyle = keyof typeof BeTPrintStylePrefix

export const BeTPseudoPrefix: { [key: string]: string } = {
    ...BeTScreenPrefix,
    ...BeTPseudoStatePrefix,
    ...BeTPseudoSelectorPrefix,
    ...BeTPseudoSelectorPrefix,
    ...BeTPseudoContentsPrefix,
    ...BeTPseudoFormElementsPrefix,
    ...BeTPseudoFileElementsPrefix,
    ...BeTPseudoListElementsPrefix,
    ...BeTPseudoTextElementsPrefix,
    ...BeTPseudoDialogElementsPrefix,
    ...BeTPreferColorSchemaPrefix,
    ...BeTPreferReduceMotionsPrefix,
    ...BeTPreferContrastPrefix,
    ...BeTViewportOrientationPrefix,
    ...BeTPrintStylePrefix,
}
/**
 * Base unit definition
 */
export type BeTDisplay =
    | 'hidden'
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'flex'
    | 'inline-flex'
    | 'table'
    | 'inline-table'
    | 'table-caption'
    | 'table-cell'
    | 'table-column'
    | 'table-column-group'
    | 'table-footer-group'
    | 'table-header-group'
    | 'table-row-group'
    | 'table-row'
    | 'flow-root'
    | 'grid'
    | 'inline-grid'
    | 'contents'
    | 'list-item'
export type BeTSizingInterval =
    | '0' /*0px */
    | '1' //0.25rem
    | '2' //0.5rem
    | '3' //0.75rem
    | '4' //1rem
    | '5' //1.25rem
    | '6' //1.5rem
    | '7' //1.75rem
    | '8' //2rem
    | '9' //2.25rem
    | '10' //2.5rem
    | '11' //2.75rem
    | '12' //3rem
    | '14' //3.5rem
    | '16' //4rem
    | '20' //5rem
    | '24' //6rem
    | '28' //7rem
    | '32' //8rem
    | '36' //9rem
    | '40' //10rem
    | '44' //11rem
    | '48' //12rem
    | '52' //13rem
    | '56' //14rem
    | '60' //15rem
    | '64' //16rem
    | '72' //18rem
    | '80' /*20rem */
    | '96' //24rem
    | 'px' //1px
    | '0.5' //0.125rem
    | '1.5' //0.375rem
    | '2.5' //0.625rem
    | '3.5' //0.875rem
export type BeTPosition =
    | 'static'
    | 'fixed'
    | 'absolute'
    | 'relative'
    | 'sticky'
export type BeTBoxSizing = 'box-border' | 'box-content'
export type BeTFloat = 'right' | 'left' | 'none'
export type BeTClear = 'right' | 'left' | 'both' | 'none'
export type BeTIsolation = 'isolate' | 'isolation-auto'
export type BeTObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
export type BeTObjectPosition =
    | 'bottom'
    | 'center'
    | 'left'
    | 'left-bottom'
    | 'left-top'
    | 'right'
    | 'right-bottom'
    | 'right-top'
    | 'top'
export type BeTOverflow =
    | 'auto'
    | 'hidden'
    | 'visible'
    | 'scroll'
    | 'x-auto'
    | 'y-auto'
    | 'x-hidden'
    | 'y-hidden'
    | 'x-visible'
    | 'y-visible'
    | 'x-scroll'
    | 'y-scroll'
export type BeTOverscroll =
    | 'auto'
    | 'contain'
    | 'none'
    | 'y-auto'
    | 'y-contain'
    | 'y-none'
    | 'x-auto'
    | 'x-contain'
    | 'x-none'

export type Prefix<T extends string, U extends string> = T extends any
    ? `${U}-${T}`
    : never

export type BeTPositiveInsetInterval =
    | BeTSizingInterval
    | '1/2'
    | '1/3'
    | '2/3'
    | '1/4'
    | '2/4'
    | '3/4'
    | 'full'
export type BeTInsetInterval = BeTPositiveInsetInterval
export type BeTInsetX = `x-${BeTPositiveInsetInterval}`
export type BeTInsetY = `y-${BeTPositiveInsetInterval}`
export type BeTInsetTop = BeTPositiveInsetInterval
export type BeTInsetRight = BeTPositiveInsetInterval
export type BeTInsetBottom = BeTPositiveInsetInterval
export type BeTInsetLeft = BeTPositiveInsetInterval
export type BeTInset =
    | BeTInsetInterval
    | BeTInsetX
    | BeTInsetY
    | {
          x?: BeTPositiveInsetInterval
          y?: BeTPositiveInsetInterval
          top?: BeTInsetTop
          right?: BeTInsetRight
          bottom?: BeTInsetBottom
          left?: BeTInsetLeft
      }
export type BeTVisibility = 'visible' | 'invisible'
export type BeTZIndex = '0' | '10' | '20' | '30' | '40' | '50' | 'auto'

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
    | 'gray'
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

export type BeTOpacityInterval =
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

export type BeTWidthInterval =
    | BeTSizingInterval
    | 'auto'
    | '1/2'
    | '1/3'
    | '1/4'
    | '2/4'
    | '3/4'
    | '1/5'
    | '2/5'
    | '3/5'
    | '4/5'
    | '1/6'
    | '2/6'
    | '3/6'
    | '4/6'
    | '5/6'
    | '1/12'
    | '2/12'
    | '3/12'
    | '4/12'
    | '5/12'
    | '6/12'
    | '7/12'
    | '8/12'
    | '9/12'
    | '10/12'
    | '11/12'
    | 'full'
    | 'screen'
    | 'min'
    | 'max'
    | `[${number}rem]`

export type BeTHeightInterval =
    | BeTSizingInterval
    | 'auto'
    | '1/2'
    | '1/3'
    | '1/4'
    | '2/4'
    | '3/4'
    | '1/5'
    | '2/5'
    | '3/5'
    | '4/5'
    | '1/6'
    | '2/6'
    | '3/6'
    | '4/6'
    | '5/6'
    | 'full'
    | 'screen'
    | `[${number}rem]`

export type BeTFlexBasisInterval =
    | BeTSizingInterval
    | 'auto'
    | 'px'
    | 'full'
    | '0.5'
    | '1.5'
    | '2.5'
    | '3.5'
    | '1/2'
    | '1/3'
    | '2/3'
    | '1/4'
    | '2/4'
    | '3/4'
    | '1/5'
    | '2/5'
    | '3/5'
    | '4/5'
    | '1/6'
    | '2/6'
    | '3/6'
    | '4/6'
    | '5/6'
    | '1/12'
    | '2/12'
    | '3/12'
    | '4/12'
    | '5/12'
    | '6/12'
    | '7/12'
    | '8/12'
    | '9/12'
    | '10/12'
    | '11/12'

export type BeTFlexBasis = BeTFlexBasisInterval

export type BeTColumnInterval =
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'auto'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'

/**
 * Color schema
 */
export type BeTColorMode = 'dark' | 'light'
export type BeTCustomizedColor = string
export type BeTRawColor = `[#${number}]`

export type BeTColor =
    | BeTInheritColor
    | BeTColorSystem
    | `${BeTColorSystem}-${BeTColorSaturation}`
    | `${BeTColorSystem}-${BeTColorMode}`
    | BeTColorHue
    | `${BeTColorHue}-${BeTColorSaturation}`
    | `${BeTColorHue}-${BeTColorMode}`
    | `ext-${BeTCustomizedColor}`
    | `ext-${BeTCustomizedColor}-${BeTColorSaturation}`
    | `ext-${BeTCustomizedColor}-${BeTColorMode}`
    | BeTRawColor

/**
 * padding
 */
export type BeTPaddingX = BeTSizingInterval
export type BeTPaddingY = BeTSizingInterval
export type BeTPaddingTop = BeTSizingInterval
export type BeTPaddingRight = BeTSizingInterval
export type BeTPaddingBottom = BeTSizingInterval
export type BeTPaddingLeft = BeTSizingInterval

export type BeTPaddingInterval = BeTSizingInterval
export interface BeTAxisPadding {
    x?: BeTPaddingX | undefined
    y?: BeTPaddingY | undefined
    top?: BeTPaddingTop | undefined
    right?: BeTPaddingRight | undefined
    bottom?: BeTPaddingBottom | undefined
    left?: BeTPaddingLeft | undefined
}
export type BeTAxisPaddingKey = keyof BeTAxisPadding
export type BeTPadding = BeTPaddingInterval | BeTAxisPadding
/**
 * margin
 */

export type BeTMarginInterval = BeTSizingInterval

export type BeTMarginX = BeTSizingInterval
export type BeTMarginY = BeTSizingInterval
export type BeTMarginTop = BeTSizingInterval
export type BeTMarginRight = BeTSizingInterval
export type BeTMarginBottom = BeTSizingInterval
export type BeTMarginLeft = BeTSizingInterval

export interface BeTAxisMargin {
    x?: BeTMarginX | undefined
    y?: BeTMarginY | undefined
    top?: BeTMarginTop | undefined
    right?: BeTMarginRight | undefined
    bottom?: BeTMarginBottom | undefined
    left?: BeTMarginLeft | undefined
}

export type BeTMargin = BeTMarginInterval | BeTAxisMargin

/**
 * space
 */

export type BeTSpaceInterval = BeTSizingInterval | 'reverse'

export type BeTAxisMarginKey = keyof BeTAxisMargin
export type BeTSpaceX = `x-${BeTSpaceInterval}`
export type BeTSpaceY = `y-${BeTSpaceInterval}`
export type BeTSpaceBetween = BeTSpaceX | BeTSpaceY
export interface BeTAxisSpaceBetween {
    x?: BeTSpaceX | undefined
    y?: BeTSpaceY | undefined
}

export type BeTSpace = BeTAxisSpaceBetween | BeTSpaceBetween

export interface BeTLayout {
    display?: BeTDisplay
    position?: BeTPosition
    inset?: BeTInset
    boxSizing?: BeTBoxSizing
    float?: BeTFloat
    clear?: BeTClear
    isolation?: BeTIsolation
    objectFit?: BeTObjectFit
    objectPosition?: BeTObjectPosition
    overflow?: BeTOverflow
    overscroll?: BeTOverscroll
    visibility?: BeTVisibility
    zIndex?: BeTZIndex
}

/**
 * Background
 */

export type BeTGradientFromColor = BeTColor
export type BeTGradientViaColor = BeTColor
export type BeTGradientToColor = BeTColor
export type BeTGradientTo = 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl'
export interface BeTGradient {
    from?: BeTGradientFromColor
    via?: BeTGradientViaColor
    to?: BeTGradientToColor
}

export type BeTBlendMode =
    | 'normal'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'color-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity'

export type BeTBackgroundOrigin = 'border' | 'padding' | 'content'
export type BeTBackgroundPosition =
    | 'bottom'
    | 'center'
    | 'left'
    | 'left-bottom'
    | 'left-top'
    | 'right'
    | 'right-bottom'
    | 'right-top'
    | 'top'
export type BeTBackgroundRepeat =
    | 'bg-no-repeat'
    | 'bg-repeat'
    | 'x'
    | 'y'
    | 'round'
    | 'space'
export type BeTBackgroundSize = 'auto' | 'cover' | 'contain'
export type BeTBackgroundImageUrl = 'none' | `[url(${string})]`

export type BeTBackgroundGradient = BeTGradient & {
    gradient: BeTGradientTo
}

export type BeTBackgroundGradientKey = keyof BeTBackgroundGradient

export interface BeTBackground {
    color?: BeTColor | undefined
    opacity?: BeTOpacity | undefined
    origin?: BeTBackgroundOrigin | undefined
    position?: BeTBackgroundPosition | undefined
    repeat?: BeTBackgroundRepeat | undefined
    size?: BeTBackgroundSize | undefined
    image?: BeTBackgroundImageUrl | BeTBackgroundGradient | undefined
    gradient?: BeTGradient | undefined
    blendMode?: BeTBlendMode | undefined
}

export type BeTBackgroundImage = BeTBackground['image']

export type BeTBackgroundColor = BeTBackground['color']

export type BeTBoxShadow =
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'inner'
    | 'none'
    | 'shadow'

export type BeTOpacity = BeTOpacityInterval
export type BeTFlexOrder =
    | 'first'
    | 'last'
    | 'none'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'

export interface BeTFlexBox {
    flexDisplay: 'flex' | 'inline-flex'
    flexDirection: 'row' | 'row-reverse' | 'col' | 'col-reverse'
    flexWrap: 'flex-wrap' | 'flex-nowrap' | 'flex-wrap-reverse'
    flex: '1' | 'auto' | 'initial' | 'none'
    flexGrow: 'flex-grow' | 'flex-grow-0'
    flexShrink: 'flex-shrink' | 'flex-shrink-0'
    flexOrder: BeTFlexOrder
}

export type BeTFlexDisplay = BeTFlexBox['flexDisplay']
export type BeTFlexDirection = BeTFlexBox['flexDirection']
export type BeTFlexWrap = BeTFlexBox['flexWrap']
export type BeTFlex = BeTFlexBox['flex']
export type BeTFlexGrow = BeTFlexBox['flexGrow']
export type BeTFlexShrink = BeTFlexBox['flexShrink']

export interface BeTSizing {
    width: BeTWidthInterval
    minWidth: '0' | 'full' | 'min' | 'max' | 'fit' | BeTWidthInterval
    maxWidth:
        | '0'
        | 'none'
        | 'xs' //20rem
        | 'sm' //24rem
        | 'md' //28rem
        | 'lg' //32rem
        | 'xl' //36rem
        | '2xl' //42rem
        | '3xl' //48rem
        | '4xl' //56rem
        | '5xl' //64rem
        | '6xl' //72rem
        | '7xl' //80rem
        | 'full' //100%
        | 'min' // min-content
        | 'max' // max-content
        | 'prose' //65ch
        | `screen-${BeTScreen}` //sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
        | BeTWidthInterval
    height: BeTHeightInterval
    minHeight: '0' | 'full' | 'screen'
    maxHeight: BeTSizingInterval | 'full' | 'screen'
}

export type BeTWidth = BeTSizing['width']
export type BeTMinWidth = BeTSizing['minWidth']
export type BeTMaxWidth = BeTSizing['maxWidth']
export type BeTHeight = BeTSizing['height']
export type BeTMinHeight = BeTSizing['minHeight']
export type BeTMaxHeight = BeTSizing['maxHeight']

export type BeTBorderRadiusInterval =
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | 'full'
export type BeTBorderSizeInterval = '0' | '2' | '4' | '8'

export type BeTBoxCornerRadius = {
    top?: 'rounded-t' | BeTBorderRadiusInterval | undefined
    bottom?: 'rounded-b' | BeTBorderRadiusInterval | undefined
    left?: 'rounded-l' | BeTBorderRadiusInterval | undefined
    right?: 'rounded-r' | BeTBorderRadiusInterval | undefined
    topLeft?: 'rounded-tl' | BeTBorderRadiusInterval | undefined
    topRight?: 'rounded-tr' | BeTBorderRadiusInterval | undefined
    bottomLeft?: 'rounded-bl' | BeTBorderRadiusInterval | undefined
    bottomRight?: 'rounded-br' | BeTBorderRadiusInterval | undefined
}

export type BeTBoxCorner = keyof BeTBoxCornerRadius
export type BeTBorderRadius =
    | 'rounded'
    | BeTBorderRadiusInterval
    | BeTBoxCornerRadius

export type BeTBoxEdgeWidth = {
    top?: 'border-t' | BeTBorderSizeInterval | undefined
    bottom?: 'border-b' | BeTBorderSizeInterval | undefined
    left?: 'border-l' | BeTBorderSizeInterval | undefined
    right?: 'border-r' | BeTBorderSizeInterval | undefined
}
export type BeTBoxEdge = keyof BeTBoxEdgeWidth
export type BeTBorderWidth = 'border' | BeTBorderSizeInterval | BeTBoxEdgeWidth

export type BeTBorderColor = BeTColor
export type BeTLineStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'none'
export type BeTBorderStyle = BeTLineStyle

export interface BeTBorder {
    radius: BeTBorderRadius
    width: BeTBorderWidth
    color: BeTBorderColor
    opacity: BeTOpacity
    style: BeTBorderStyle
}

export type BeTDivideSizeInterval = BeTBorderSizeInterval

export type BeTAxisDivide = {
    x?: 'divide-x' | 'divide-x-reverse' | BeTDivideSizeInterval | undefined
    y?: 'divide-y' | 'divide-y-reverse' | BeTDivideSizeInterval | undefined
}

export type BeTDivideColor = BeTColor
export type BeTDivideOpacity = BeTOpacity
export type BeTDivideStyle = BeTLineStyle
export type BeTDivideWidth = BeTDivideSizeInterval | BeTAxisDivide

export interface BeTDivide {
    width?: BeTDivideWidth | undefined
    color?: BeTDivideColor | undefined
    opacity?: BeTDivideOpacity | undefined
    style?: BeTDivideStyle | undefined
}

export type BeTRingWidthInterval = '0' | '1' | '2' | '4' | '8' | 'inset'
export type BeTRingWidth = 'ring' | BeTRingWidthInterval
export type BeTRingColor = BeTColor
export type BeTRingOpacity = BeTOpacity
export type BeTRingOffsetWidth = '0' | '1' | '2' | '4' | '8'
export type BeTRingOffsetColor = BeTColor

export interface BeTRing {
    width: BeTRingWidth
    color?: BeTRingColor | undefined
    opacity?: BeTRingOpacity | undefined
    offsetWidth?: BeTRingOffsetWidth | undefined
    offsetColor?: BeTRingOffsetColor | undefined
}

export type BeTGridBasicInterval =
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
export type BeTGridInterval = BeTGridBasicInterval | 'none'
export type BeTGridSpanInterval = BeTGridBasicInterval | 'auto' | 'full'

// export interface BeTGridItem extends BeTBasicFlexGridItem {
//     span?: BeTGridSpanInterval
//     start?: BeTGridBasicInterval
//     end?: BeTGridBasicInterval
// }

// export interface BeTFlexItem extends BeTBasicFlexGridItem {
//     flexBasis: BeTFlexBasis
// }

export type BeTVariantNumeric =
    | 'normal-nums'
    | 'ordinal'
    | 'slashed-zero'
    | 'lining-nums'
    | 'oldstyle-nums'
    | 'proportional-nums'
    | 'tabular-nums'
    | 'diagonal-fractions'
    | 'stacked-fractions'

export type BeTTextColor = BeTColor
export interface BeTTypography {
    color: BeTTextColor
    opacity: BeTOpacity
    size:
        | 'xs'
        | 'sm'
        | 'base'
        | 'lg'
        | 'xl'
        | '2xl'
        | '4xl'
        | '5xl'
        | '6xl'
        | '7xl'
        | '8xl'
        | '9xl'
    family: 'sans' | 'serif' | 'mono'
    smoothing?: 'antialiased' | 'subpixel-antialiased'
    style: 'italic' | 'not-italic'
    weight:
        | 'thin'
        | 'extralight'
        | 'light'
        | 'normal'
        | 'medium'
        | 'semibold'
        | 'bold'
        | 'extrabold'
        | 'black'
    letterSpacing: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
    lineHeight:
        | 'none'
        | 'tight'
        | 'snug'
        | 'normal'
        | 'relaxed'
        | 'loose'
        | '3'
        | '4'
        | '5'
        | '6'
        | '7'
        | '8'
        | '9'
        | '10'
    textAlign: 'left' | 'center' | 'right' | 'justify'
    textDecoration: 'underline' | 'line-through' | 'no-underline'
    textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
    textOverflow: 'truncate' | 'ellipsis' | 'clip'
    verticalAlign:
        | 'baseline'
        | 'top'
        | 'middle'
        | 'bottom'
        | 'text-top'
        | 'text-bottom'
    whiteSpace: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap'
    wordBreak: 'truncate' | 'normal' | 'words' | 'all'
}

export interface Placeholder {
    style: BeTTypography
    value: string
}

export type BeTList = 'none' | 'disc' | 'decimal'
export type BeTListPosition = 'inside' | 'outside'
export type BeTTableBorder = 'collapse' | 'separate'
export type BeTTableLayout = 'auto' | 'fixed'

export interface BeTAlignment {
    autoFlow: 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense'
    justifyContent: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
    justifyItems: 'start' | 'end' | 'center' | 'stretch'
    alignContent: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
    alignItems: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
    placeContent:
        | 'start'
        | 'end'
        | 'center'
        | 'between'
        | 'around'
        | 'evenly'
        | 'baseline'
    placeItems: 'start' | 'end' | 'center' | 'stretch'
    justifySelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch'
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline'
    placeSelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch'
}

export type BeTGapInterval = BeTSizingInterval
export type BeTGapX = `x-${BeTGapInterval}`
export type BeTGapY = `y-${BeTGapInterval}`
export type BeTGap =
    | BeTGapInterval
    | BeTGapX
    | BeTGapY
    | {
          x: BeTGapInterval
          y: BeTGapInterval
      }

// export interface BeTBasicFlexGridItem {
//     gap?: BeTSizingInterval | undefined
// }

export type BeTSvgFill = 'none' | BeTColor
export type BeTSvgStroke = 'none' | BeTColor
export type BeTSvgStrokeWidth = '0' | '1' | '2'

export interface BeTSvg {
    fill: BeTSvgFill
    stroke: BeTSvgStroke
    strokeWidth: BeTSvgStrokeWidth
}
