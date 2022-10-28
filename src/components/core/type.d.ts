export type BeTBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
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
    | '0' //0px
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
    | '80' //20rem
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
export type BeTBoxSizing = 'border' | 'content'
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

export type BeTPositiveInsetInterval =
    | BeTSizingInterval
    | '1/2'
    | '1/3'
    | '2/3'
    | '1/4'
    | '2/4'
    | '3/4'
    | 'full'
export type BeTNegativeInsetInterval = `-${BeTPositiveInsetInterval}`
export type BeTInsetInterval =
    | BeTPositiveInsetInterval
    | BeTNegativeInsetInterval
export type BeTInset =
    | BeTInsetInterval
    | {
          x?: BeTInsetInterval
          y?: BeTInsetInterval
          top?: BeTInsetInterval
          right?: BeTInsetInterval
          bottom?: BeTInsetInterval
          left?: BeTInsetInterval
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

export type BeTSpacingInterval = BeTSizingInterval

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

export type BeTMarginInterval =
    | BeTSpacingInterval
    | `-${BeTSpacingInterval}`
    | 'auto'

export interface BeTAxisPadding {
    x?: BeTSpacingInterval | undefined
    y?: BeTSpacingInterval | undefined
}

export interface BeTAxisMargin {
    x?: BeTMarginInterval | undefined
    y?: BeTMarginInterval | undefined
}

export interface BeTAxisSpaceBetween {
    x?: BeTSpacingInterval | `-${BeTSpacingInterval}` | undefined
    y?: BeTSpacingInterval | `-${BeTSpacingInterval}` | undefined
}

export type BeTPadding = BeTSpacingInterval | BeTAxisPadding

export type BeTMargin = BeTMarginInterval | BeTAxisMargin

export type BeTSpace = BeTAxisSpaceBetween

// export type BeTBackgroundColors =
//     | `bg-${BeTInheritColor}`
//     | `bg-${BeTColorSystem}-${BeTColorSaturation}`
//     | `bg-${BeTColorHue}-${BeTColorSaturation}`
//     | `bg-ext-${BeTColorHue}-${BeTColorSaturation}`
//     | `bg-[#${number}]`

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
// export type BeTBackgroundColors =
//     | `bg-${BeTColors}`
//     | `bg-ext-${BeTColorHue}-${BeTColorSaturation}`
//     | `bg-[#${number}]`

// export type BeTBackgroundColorOpacity = `bg-opacity-${BeTColorOpacity}`

export type BeTBackgroundColor = BeTColor | `${BeTColor} ${BeTOpacityInterval}`

export type BeTGradientTo = 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl'
export type BeTGradientFromColor = BeTColor
export type BeTGradientViaColor = BeTColor
export type BeTGradientToColor = BeTColor
export interface BeTGradient {
    from: BeTGradientFromColor
    via: BeTGradientViaColor
    to: BeTGradientToColor
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
    | 'repeat'
    | 'no-repeat'
    | 'x'
    | 'y'
    | 'round'
    | 'space'
export type BeTBackgroundSize = 'auto' | 'cover' | 'contain'
export type BeTBackgroundImageUrl = `[url(${string})]`
export type BeTBackgroundGradient = `to-${BeTGradientTo}` | 'none'

export interface BeTBackground {
    color?: BeTColor | undefined
    opacity?: BeTColorOpacity | undefined
    origin?: BeTBackgroundOrigin | undefined
    position?: BeTBackgroundPosition | undefined
    repeat?: BeTBackgroundRepeat | undefined
    size?: BeTBackgroundSize | undefined
    image?: BeTBackgroundImageUrl | BeTBackgroundGradient | undefined
    gradient?: BeTGradient | undefined
    blendMode?: BeTBlendMode | undefined
}

export type BeTBackgroundColor = BeTColor

export type BeTBoxShadow =
    | 'sm'
    | 'default'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'inner'
    | 'none'

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
    flexWrap: 'default' | 'nowrap' | 'wrap-reverse'
    flex: '1' | 'auto' | 'initial' | 'none'
    flexGrow: boolean
    flexShrink: boolean
    flexOrder: BeTFlexOrder
}

export type BeTFlexDisplay = BeTFlexBox['flexDisplay']
export type BeTFlexDirection = BeTFlexBoxDirection['flexDirection']
export type BeTFlexWrap = BeTFlexBox['flexWrap']
export type BeTFlex = BeTFlexBox['flex']
export type BeTFlexGrow = BeTFlexBox['flexGrow']
export type BeTFlexShrink = BeTFlexBox['flexShrink']
export type BeTFlexOrder = BeTFlexBox['flexOrder']

export interface BeTSizing {
    width: BeTWidthInterval
    minWidth: '0' | 'full' | 'min' | 'max'
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
        | `screen-${BeTBreakpoint}` //sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
    height: BeTHeightInterval
    minHeight: '0' | 'full' | 'screen'
    mxHeight: `${BeTSizingInterval}` | 'full' | 'screen'
}

export type BeTWidth = BeTSizing['width']
export type BeTMinWidth = BeTSizing['minWidth']
export type BeTMaxWidth = BeTSizing['maxWidth']
export type BeTHeight = BeTSizing['height']
export type BeTMinHeight = BeTSizing['minHeight']
export type BeTMaxHeight = BeTSizing['maxHeight']

export type BeTBorderRadiusInterval =
    | 'default'
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | 'full'
export type BeTBorderSizeInterval = 'default' | '0' | '2' | '4' | '8'

export type BeTBorderRadius =
    | BeTBorderRadiusInterval
    | {
          top?: BeTBorderRadiusInterval | undefined
          right?: BeTBorderRadiusInterval | undefined
          bottom?: BeTBorderRadiusInterval | undefined
          left?: BeTBorderRadiusInterval | undefined
          topLeft?: BeTBorderRadiusInterval | undefined
          topRight?: BeTBorderRadiusInterval | undefined
          bottomLeft?: BeTBorderRadiusInterval | undefined
          bottomRight?: BeTBorderRadiusInterval | undefined
      }

export type BeTBorderWidth =
    | BeTBorderSizeInterval
    | {
          top?: BeTBorderSizeInterval | undefined
          right?: BeTBorderSizeInterval | undefined
          bottom?: BeTBorderSizeInterval | undefined
          left?: BeTBorderSizeInterval | undefined
          topLeft?: BeTBorderSizeInterval | undefined
          bottomLeft?: BeTBorderSizeInterval | undefined
          bottomRight?: BeTBorderSizeInterval | undefined
      }

export type BeTBorderColor = BeTColor
export type BeTBorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'none'

export interface BeTBorder {
    radius: BeTBorderRadius
    width: BeTBorderWidth
    color: BeTBorderColor
    opacity: BeTOpacity
    style: BeTBorderStyle
}

export type BeTDivideSizeInterval = BeTBorderSizeInterval

export type BeTDivideColor = BeTColor
export type BeTDivideOpacity = BeTOpacity
export type BeTDivideStyle = BeTBorderStyle

export interface BeTDivide {
    width: BeTDivideSizeInterval
    color?: BeTDivideColor | undefined
    opacity?: BeTDivideOpacity | undefined
    style?: BeTDivideStyle | undefined
    reverse?: boolean | undefined
}

export type BeTRingWidthInterval =
    | 'default'
    | '0'
    | '1'
    | '2'
    | '4'
    | '8'
    | 'inset'
export type BeTRingColor = BeTColor
export type BeTRingOpacity = BeTOpacity
export type BeTRingOffsetWidth = '0' | '1' | '2' | '4' | '8'
export type BeTRingOffsetColor = BeTColor

export interface BeTRing {
    width: BeTRingWidthInterval
    color?: BeTRingColor | undefined
    opacity?: BeTRingOpacity | undefined
    offsetWidth?: BeTRingOffsetWidth | undefined
    offsetColor?: BeTRingOffsetColor | undefined
}

export type BeTDividerX = BeTDivide
export type BeTDividerY = BeTDivide

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

export interface BeTBasicGrid {
    gap?: BeTSizingInterval | undefined
    gapX?: BeTSizingInterval | undefined
    gapY?: BeTSizingInterval | undefined
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
}

export interface BeTColumnGrid extends BeTBasicGrid {
    cols: BeTGridInterval
    autoCols: 'auto' | 'min' | 'max' | 'fr'
}

export interface BeTRowGrid extends BeTBasicGrid {
    rows: BeTGridInterval
    autoRows: 'auto' | 'min' | 'max' | 'fr'
}

export type BeTGenericGrid<T extends 'column' | 'row' | 'grid'> = {
    type: T
} & (T extends 'column'
    ? BeTColumnGrid
    : T extends 'row'
    ? BeTRowGrid
    : BeTColumnGrid & BeTRowGrid)

export type BeTGrid =
    | BeTGenericGrid<'column'>
    | BeTGenericGrid<'row'>
    | BeTGenericGrid<'grid'>
export interface BeTGridItem {
    span?: BeTGridSpanInterval
    start?: BeTGridBasicInterval
    end?: BeTGridBasicInterval
    justifySelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch'
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline'
    placeSelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch'
}

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

export interface BeTTypography {
    color: BeTColor
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
    textAlign: 'left' | 'center' | 'right' | 'justify'
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

export const BeTClassNames = {
    boxSizing: {
        prefix: 'box',
    },
    display: {
        prefix: '',
    },
    float: {
        prefix: 'float',
    },
    clear: {
        prefix: 'clear',
    },
    isolation: {
        prefix: '',
    },
    objectFit: {
        prefix: 'object',
    },
    objectPosition: {
        prefix: 'object',
    },
    overflow: {
        prefix: 'overflow',
    },
    overscroll: {
        prefix: 'overscroll',
    },
    position: {
        prefix: '',
    },
    inset: {
        prefix: 'inset',
        allowNegative: true,
    },
    insetX: {
        prefix: 'inset-x',
        allowNegative: true,
    },
    insetY: {
        prefix: 'inset-y',
        allowNegative: true,
    },
    insetTop: {
        prefix: 'top',
        allowNegative: true,
    },
    insetRight: {
        prefix: 'right',
        allowNegative: true,
    },
    insetBottom: {
        prefix: 'bottom',
        allowNegative: true,
    },
    insetLeft: {
        prefix: 'left',
        allowNegative: true,
    },
    visibility: {
        prefix: '',
    },
    zIndex: {
        prefix: 'z',
    },
    flexDisplay: {
        prefix: '',
    },
    flexDirection: {
        prefix: 'flex',
    },
    flexWrap: {
        prefix: 'flex',
    },
    flex: {
        prefix: 'flex',
    },
    flexGrow: {
        prefix: 'flex',
    },
    flexShrink: {
        prefix: 'flex',
    },
    flexOrder: {
        prefix: 'order',
    },
    gridCols: {
        prefix: 'grid-cols',
    },
    gridColSpan: {
        prefix: 'col-span',
        auto: 'col',
    },
    gridColStart: {
        prefix: 'col-start',
    },
    gridColEnd: {
        prefix: 'col-end',
    },
    gridRows: {
        prefix: 'grid-rows',
    },
    gridRowSpan: {
        prefix: 'row-span',
        auto: 'row',
    },
    gridRowStart: {
        prefix: 'row-start',
    },
    gridRowEnd: {
        prefix: 'row-end',
    },
    gridAutoFlow: {
        prefix: 'grid-flow',
    },
    gridAutoColumns: {
        prefix: 'auto-cols',
    },
    gridAutoRows: {
        prefix: 'auto-rows',
    },
    gridGap: {
        prefix: 'gap',
    },
    justifyContent: {
        prefix: 'justify',
    },
    justifyItems: {
        prefix: 'justify-items',
    },
    justifySelf: {
        prefix: 'justify-self',
    },
    alignContent: {
        prefix: 'content',
    },
    alignItems: {
        prefix: 'items',
    },
    alignSelf: {
        prefix: 'self',
    },
    placeContent: {
        prefix: 'place-content',
    },
    placeItems: {
        prefix: 'place-items',
    },
    placeSelf: {
        prefix: 'place-self',
    },
    padding: {
        prefix: 'p',
    },
    paddingX: {
        prefix: 'px',
    },
    paddingY: {
        prefix: 'py',
    },
    paddingTop: {
        prefix: 'pt',
    },
    paddingRight: {
        prefix: 'pr',
    },
    paddingBottom: {
        prefix: 'pb',
    },
    paddingLeft: {
        prefix: 'pl',
    },
    margin: {
        prefix: 'm',
    },
    marginX: {
        prefix: 'mx',
    },
    marginY: {
        prefix: 'my',
    },
    marginTop: {
        prefix: 'mt',
    },
    marginRight: {
        prefix: 'mr',
    },
    marginBottom: {
        prefix: 'mb',
    },
    marginLeft: {
        prefix: 'ml',
    },
    spaceBetweenX: {
        prefix: 'space-x',
        allowNegative: true,
    },
    spaceBetweenY: {
        prefix: 'space-y',
        allowNull: true,
    },
    width: {
        prefix: 'w',
    },
    minWidth: {
        prefix: 'min-x',
    },
    maxWidth: {
        prefix: 'max-w',
    },
    height: {
        prefix: 'h',
    },
    maxHeight: {
        prefix: 'max-h',
    },
    minHeight: {
        prefix: 'min-h',
    },
    textColor: {
        prefix: 'text',
    },
    textOpacity: {
        prefix: 'text-opacity',
    },
    fontFamily: {
        prefix: 'font',
    },
    fontSize: {
        prefix: 'text',
    },
    fontSmoothing: {
        prefix: '',
    },
    fontStyle: {
        prefix: '',
    },
    fontWeight: {
        prefix: 'font',
    },
    fontVariantNumeric: {
        prefix: '',
    },
    letterSpacing: {
        prefix: 'tracking',
    },
    lineHeight: {
        prefix: 'leading',
    },
    listStyleType: {
        prefix: 'list',
    },
    listStylePosition: {
        prefix: 'list',
    },
    placeholderColor: {
        prefix: 'placeholder-color',
    },
    placeholderOpacity: {
        prefix: 'placeholder-opacity',
    },
    textAlign: {
        prefix: 'text',
    },
    textDecoration: {
        prefix: '',
    },
    textTransform: {
        prefix: '',
    },
    textOverflow: {
        prefix: 'overflow',
        truncate: '',
    },
    verticalAlign: {
        prefix: 'align',
    },
    whiteSpace: {
        prefix: 'whitespace',
    },
    wordBreak: {
        prefix: 'break',
        truncate: '',
    },
    backgroundAttachment: {
        prefix: 'bg',
    },
    backgroundClip: {
        prefix: 'bg-clip',
    },
    backgroundColor: {
        prefix: 'bg-color',
    },
    backgroundOpacity: {
        prefix: 'bg-opacity',
    },
    backgroundOrigin: {
        prefix: 'bg-origin',
    },
    backgroundPosition: {
        prefix: 'bg',
    },
    backgroundRepeat: {
        prefix: 'bg-repeat',
        repeat: '',
        'no-repeat': '',
    },
    backgroundSize: {
        prefix: 'bg',
    },
    backgroundImage: {
        prefix: 'bg-gradient',
        none: 'bg',
    },
    gradientColorFrom: {
        prefix: 'from',
    },
    gradientColorVia: {
        prefix: 'via',
    },
    gradientColorTo: {
        prefix: 'to',
    },
    borderRadius: {
        prefix: 'rounded',
        default: 'rounded',
    },
    borderWidth: {
        prefix: 'border',
        default: 'border',
    },
    borderTop: {
        prefix: 'border-t',
        default: 'border-t',
    },
    borderRight: {
        prefix: 'border-r',
        default: 'border-r',
    },
    borderBottom: {
        prefix: 'border-b',
        default: 'border-b',
    },
    borderLeft: {
        prefix: 'border-l',
        default: 'border-l',
    },
    borderColor: {
        prefix: 'border',
    },
    borderOpacity: {
        prefix: 'border-opacity',
    },
    borderStyle: {
        prefix: 'border',
    },
    divideWidthX: {
        prefix: 'divide-x',
        default: 'divide-x',
    },
    divideWidthY: {
        prefix: 'divide-y',
        default: 'divide-y',
    },
    divideColor: {
        prefix: 'divide',
    },
    divideOpacity: {
        prefix: 'divide-opacity',
    },
    divideStyle: {
        prefix: 'divide',
    },
    ringWidth: {
        prefix: 'ring',
        default: 'ring',
    },
    ringColor: {
        prefix: 'ring',
    },
    ringOpacity: {
        prefix: 'ring-opacity',
    },
    ringOffsetWidth: {
        prefix: 'ring-offset',
    },
    ringOffsetColor: {
        prefix: 'ring-offset',
    },
    tableBorder: {
        prefix: 'border',
    },
    tableLayout: {
        prefix: 'table',
    },
} as const

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
