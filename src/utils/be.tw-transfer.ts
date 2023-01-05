import * as tc from 'tailwindcss-classnames'
import { TTailwindString } from 'tailwindcss-classnames'
import { StackItemProps, StackProps } from '..'
import type {
    BoxProps,
    ColumnProps,
    GridItemProps,
    GridProps,
    SVGIconProps,
} from '../core/be.core-types'
import { BeTPseudoPrefix } from '../core/be.tailwind-types'
import { AxisType, BeTWClassNames, BeTWPrefixes } from '../core/be.tw-prefix'

export const twPrefix = (value?: string, prefix?: string): TTailwindString => {
    const prefixStr = !!prefix ? `${prefix}-` : ''
    if (value?.startsWith('-')) {
        return `-${prefixStr}${value.slice(1)}` as TTailwindString
    }
    return `${prefixStr}${value}` as TTailwindString
}

// export const twMargin = (margin: BeTMargin, prefix = 'm') => {
//     switch (typeof margin) {
//         case 'object':
//             const rst = (Object.keys(margin) as BeTAxisMarginKey[]).map(
//                 (k: BeTAxisMarginKey) => {
//                     if (
//                         isUndefined(margin[k]) ||
//                         typeof margin[k] != 'string'
//                     ) {
//                         //TODO: Log the warning
//                         return undefined
//                     }
//                     return twPrefix(
//                         (margin as BeTAxisMargin)[k],
//                         marginPrefixMap[k],
//                     )
//                 },
//             )
//             return rst.filter((v) => v) as string[]
//         case 'string':
//             return twPrefix(margin, prefix)
//         default:
//             throw new Error(
//                 'illegal state error encountered in the marginCN method',
//             )
//     }
// }

// export const twPadding = (padding: BeTPadding, prefix = 'p') => {
//     switch (typeof padding) {
//         case 'object':
//             const rst = (Object.keys(padding) as BeTAxisPaddingKey[]).map(
//                 (k: BeTAxisPaddingKey) => {
//                     if (
//                         isUndefined(padding[k]) ||
//                         typeof padding[k] != 'string'
//                     ) {
//                         //TODO: log warning
//                         return undefined
//                     }
//                     return twPrefix(
//                         (padding as BeTAxisPadding)[k],
//                         paddingPrefixMap[k],
//                     )
//                 },
//             )
//             return rst.filter((v) => v) as string[]
//         case 'string':
//             return twPrefix(padding, prefix)
//         default:
//             throw new Error(
//                 'illegal state error encountered in the marginCN method',
//             )
//     }
// }

// export const twRound = (round: BeTBorderRadius, prefix: string = 'rounded') => {
//     switch (typeof round) {
//         case 'object':
//             const rst = (Object.keys(round) as BeTBoxCorner[]).map(
//                 (k: BeTBoxCorner) => {
//                     if (isUndefined(round[k]) || typeof round[k] != 'string') {
//                         //TODO: log warning
//                         return undefined
//                     }
//                     return twPrefix(
//                         (round as BeTBoxCornerRadius)[k],
//                         roundPrefixMap[k],
//                     )
//                 },
//             )
//             return rst.filter((v) => !!v) as string[]
//         case 'string':
//             return twPrefix(round, prefix)
//         default:
//             throw new Error(
//                 'illegal state error encountered in the twRound method',
//             )
//     }
// }

// export const twBorderWidth = (
//     width: BeTBorderWidth,
//     prefix: string = 'border',
// ) => {
//     switch (typeof width) {
//         case 'object':
//             const rst = (Object.keys(width) as BeTBoxEdge[]).map(
//                 (k: BeTBoxEdge) => {
//                     if (isUndefined(width[k]) || typeof width[k] != 'string') {
//                         //TODO: log warning
//                         return undefined
//                     }
//                     return twPrefix(
//                         (width as BeTBoxEdgeWidth)[k],
//                         borderWidthPrefixMap[k],
//                     )
//                 },
//             )
//             return rst.filter((v) => !!v) as string[]
//         case 'string':
//             return width
//         default:
//             throw new Error(
//                 'illegal state error encountered in the twRound method',
//             )
//     }
// }

// export const twBGImage = (bg: BeTBackgroundImage, prefix: string = 'bg') => {
//     switch (typeof bg) {
//         case 'object':
//             const rst = (Object.keys(bg) as BeTBackgroundGradientKey[]).map(
//                 (k: BeTBackgroundGradientKey) => {
//                     if (isUndefined(bg[k]) || typeof bg[k] != 'string') {
//                         //TODO: log warning
//                         return undefined
//                     }
//                     return twPrefix(
//                         (bg as BeTBackgroundGradient)[k],
//                         backgroundGradientPrefixMap[k],
//                     )
//                 },
//             )
//             return rst.filter((v) => !!v) as string[]
//         case 'string':
//             return twPrefix(bg, prefix)
//         default:
//             throw new Error(
//                 'illegal state error encountered in the twBGImage method',
//             )
//     }
// }

export type BeTAttrs = { [key: string]: any; parent?: BeTAttrs }

export const twTransfer: {
    [key: string]: (attrs: BeTAttrs) => TTailwindString | undefined
} = {
    $display: twIntervalTransferFactory({
        name: '$display',
        tcFunc: tc.display,
    }),
    $visible: twIntervalTransferFactory({
        name: '$visible',
        tcFunc: tc.visibility,
    }),
    $position: twIntervalTransferFactory({
        name: '$position',
        tcFunc: tc.position,
    }),
    $transformOrigin: twIntervalTransferFactory({
        name: '$transformOrigin',
        tcFunc: tc.transformOrigin,
    }),
    $shadow: twIntervalTransferFactory({
        name: '$shadow',
        tcFunc: tc.boxShadow,
    }),
    $shadowColor: twIntervalTransferFactory({
        name: '$shadowColor',
        tcFunc: tc.boxShadowColor,
    }),
    $columns: twIntervalTransferFactory({
        name: '$columns',
        tcFunc: tc.columns,
    }),
    $inset: twIntervalTransferFactory({
        name: '$inset',
        tcFunc: tc.inset,
    }),
    $top: twIntervalTransferFactory({
        name: '$top',
        tcFunc: tc.inset,
    }),
    $right: twIntervalTransferFactory({
        name: '$right',
        tcFunc: tc.inset,
    }),
    $bottom: twIntervalTransferFactory({
        name: '$bottom',
        tcFunc: tc.inset,
    }),
    $left: twIntervalTransferFactory({
        name: '$left',
        tcFunc: tc.inset,
    }),
    $margin: twIntervalTransferFactory({
        name: '$margin',
        tcFunc: tc.margin,
    }),
    $direction: twIntervalTransferFactory({
        name: '$direction',
        tcFunc: tc.flex,
    }),
    $flexBasis: twIntervalTransferFactory({
        name: '$flexBasis',
        tcFunc: tc.flexBasis,
    }),
    $flexWrap: twIntervalTransferFactory({
        name: '$flexWrap',
        tcFunc: tc.flex,
    }),
    $flexGrow: twIntervalTransferFactory({
        name: '$flexGrow',
        tcFunc: tc.flexGrow,
    }),
    $flexShrink: twIntervalTransferFactory({
        name: '$flexShrink',
        tcFunc: tc.flexShrink,
    }),
    $flexOrder: twIntervalTransferFactory({
        name: '$flexOrder',
        tcFunc: tc.order,
    }),
    $space: (attrs: BeTAttrs) => {
        const { $space } = attrs
        if (isUndefined($space)) return undefined
        switch (typeof $space) {
            case 'string':
                const $direction = getAttrBackwards(attrs, '$direction')
                switch ($direction) {
                    case 'row':
                    case 'row-reverse':
                        return tc.space(twPrefix($space, 'space'))
                    case 'col':
                    case 'col-reverse':
                        return tc.space(twPrefix($space, 'space'))
                    default:
                        return tc.space(twPrefix($space, 'space'))
                }
            case 'object':
                transferObject(
                    {
                        name: '$space',
                        tcFunc: tc.space,
                    },
                    attrs,
                )
            default:
        }
    },
    // $padding: (attrs: BeTAttrs) => {
    //     const { $padding } = attrs
    //     if (isUndefined($padding)) return undefined
    //     return tc.padding(twPadding($padding) as TTailwindString)
    // },
    $padding: twIntervalTransferFactory({
        name: '$padding',
        tcFunc: tc.padding,
    }),
    $textAlign: twIntervalTransferFactory({
        name: '$textAlign',
        tcFunc: tc.textAlign,
    }),
    $verticalAlign: twIntervalTransferFactory({
        name: 'verticalAlign',
        tcFunc: tc.verticalAlign,
    }),
    $textColor: twIntervalTransferFactory({
        name: '$textColor',
        tcFunc: tc.textColor,
    }),
    $width: twIntervalTransferFactory({
        name: '$width',
        tcFunc: tc.width,
    }),
    $minWidth: twIntervalTransferFactory({
        name: '$minWidth',
        tcFunc: tc.minWidth,
    }),
    $maxWidth: twIntervalTransferFactory({
        name: '$maxWidth',
        tcFunc: tc.maxWidth,
    }),
    $height: twIntervalTransferFactory({
        name: '$height',
        tcFunc: tc.height,
    }),
    $minHeight: twIntervalTransferFactory({
        name: '$minHeight',
        tcFunc: tc.minHeight,
    }),
    $maxHeight: twIntervalTransferFactory({
        name: '$maxHeight',
        tcFunc: tc.maxHeight,
    }),
    // $borderRadius: (attrs: BeTAttrs) => {
    //     const { $borderRadius } = attrs
    //     if (isUndefined($borderRadius)) return undefined
    //     return tc.borderRadius(twRound($borderRadius) as TTailwindString)
    // },
    $borderRadius: twIntervalTransferFactory({
        name: '$borderRadius',
        tcFunc: tc.borderRadius,
    }),
    $borderWidth: twIntervalTransferFactory({
        name: '$borderWidth',
        tcFunc: tc.borderWidth,
    }),
    $borderColor: twIntervalTransferFactory({
        name: '$borderColor',
        tcFunc: tc.borderColor,
    }),
    $borderOpacity: twIntervalTransferFactory({
        name: '$borderOpacity',
        tcFunc: tc.borderOpacity,
    }),
    $borderStyle: twIntervalTransferFactory({
        name: '$borderStyle',
        tcFunc: tc.borderStyle,
    }),
    $divideWidth: twIntervalTransferFactory({
        name: '$divideWidth',
        tcFunc: tc.divideWidth,
    }),
    $divideColor: twIntervalTransferFactory({
        name: '$divideColor',
        tcFunc: tc.divideColor,
    }),
    $divideStyle: twIntervalTransferFactory({
        name: '$divideStyle',
        tcFunc: tc.divideStyle,
    }),
    $outlineWidth: twIntervalTransferFactory({
        name: '$outlineWidth',
        tcFunc: tc.outlineWidth,
    }),
    $outlineColor: twIntervalTransferFactory({
        name: '$outlineColor',
        tcFunc: tc.outlineColor,
    }),
    $outlineStyle: twIntervalTransferFactory({
        name: '$outlineStyle',
        tcFunc: tc.outlineStyle,
    }),
    $bgColor: twIntervalTransferFactory({
        name: '$bgColor',
        tcFunc: tc.backgroundColor,
    }),
    $bgOpacity: twIntervalTransferFactory({
        name: '$bgOpacity',
        tcFunc: tc.backgroundOpacity,
    }),
    $bgOrigin: twIntervalTransferFactory({
        name: '$bgOrigin',
        tcFunc: tc.backgroundOrigin,
    }),
    $bgPosition: twIntervalTransferFactory({
        name: '$bgPosition',
        tcFunc: tc.backgroundPosition,
    }),
    $bgRepeat: twIntervalTransferFactory({
        name: '$bgRepeat',
        tcFunc: tc.backgroundRepeat,
    }),
    $bgSize: twIntervalTransferFactory({
        name: '$bgSize',
        tcFunc: tc.backgroundSize,
    }),
    // $bgImage: (attrs: BeTAttrs) => {
    //     const { $bgImage } = attrs
    //     if (isUndefined($bgImage)) return
    //     const twClass = twBGImage($bgImage)
    //     //TODO: check tc.gradientColorStops
    //     return tc.backgroundImage(twClass as TTailwindString)
    // },
    $bgImage: twIntervalTransferFactory({
        name: '$bgImage',
        tcFunc: tc.backgroundImage,
    }),
    $bgBlend: twIntervalTransferFactory({
        name: '$bgBlend',
        tcFunc: tc.backgroundBlendMode,
    }),
    $justifyContent: twIntervalTransferFactory({
        name: '$justifyContent',
        tcFunc: tc.justifyContent,
    }),
    $justifyItems: twIntervalTransferFactory({
        name: '$justifyItems',
        tcFunc: tc.justifyItems,
    }),
    $alignContent: twIntervalTransferFactory({
        name: '$alignContent',
        tcFunc: tc.alignContent,
    }),
    $alignItems: twIntervalTransferFactory({
        name: '$alignItems',
        tcFunc: tc.alignItems,
    }),
    $placeContent: twIntervalTransferFactory({
        name: '$placeContent',
        tcFunc: tc.placeContent,
    }),
    $placeItems: twIntervalTransferFactory({
        name: '$placeItems',
        tcFunc: tc.placeItems,
    }),
    $justifySelf: twIntervalTransferFactory({
        name: '$justifySelf',
        tcFunc: tc.justifySelf,
    }),
    $alignSelf: twIntervalTransferFactory({
        name: '$alignSelf',
        tcFunc: tc.alignSelf,
    }),
    $gap: twIntervalTransferFactory({
        name: '$gap',
        tcFunc: tc.gap,
    }),
    $rows: twIntervalTransferFactory({
        name: '$rows',
        tcFunc: tc.grid,
    }),
    $rowSpan: twIntervalTransferFactory({
        name: '$rowSpan',
        tcFunc: tc.grid,
    }),
    $rowStart: twIntervalTransferFactory({
        name: '$rowStart',
        tcFunc: tc.grid,
    }),
    $rowEnd: twIntervalTransferFactory({
        name: '$rowEnd',
        tcFunc: tc.grid,
    }),
    $cols: twIntervalTransferFactory({
        name: '$cols',
        tcFunc: tc.grid,
    }),
    $colSpan: twIntervalTransferFactory({
        name: '$colSpan',
        tcFunc: tc.grid,
    }),
    $colStart: twIntervalTransferFactory({
        name: '$colStart',
        tcFunc: tc.grid,
    }),
    $colEnd: twIntervalTransferFactory({
        name: '$colEnd',
        tcFunc: tc.grid,
    }),
    $fill: twIntervalTransferFactory({
        name: '$fill',
        tcFunc: tc.svg,
    }),
    $stroke: twIntervalTransferFactory({
        name: '$stroke',
        tcFunc: tc.svg,
    }),
    $strokeWidth: twIntervalTransferFactory({
        name: '$strokeWidth',
        tcFunc: tc.svg,
    }),
    $typography: twIntervalTransferFactory({
        name: '$typography',
        tcFunc: tc.typography,
    }),
    $typographyColor: twIntervalTransferFactory({
        name: '$typographyColor',
        tcFunc: tc.typography,
    }),
    $fontSize: twIntervalTransferFactory({
        name: '$fontSize',
        tcFunc: tc.fontSize,
    }),
    $fontWeight: twIntervalTransferFactory({
        name: '$fontWeight',
        tcFunc: tc.fontWeight,
    }),
    $lineHeight: twIntervalTransferFactory({
        name: '$lineHeight',
        tcFunc: tc.lineHeight,
    }),
    $ringWidth: twIntervalTransferFactory({
        name: '$ringWidth',
        tcFunc: tc.ringWidth,
    }),
    $ringOffsetWidth: twIntervalTransferFactory({
        name: '$ringOffsetWidth',
        tcFunc: tc.ringOffsetWidth,
    }),
    $ringOffsetColor: twIntervalTransferFactory({
        name: '$ringOffsetColor',
        tcFunc: tc.ringOffsetColor,
    }),
    $ringColor: twIntervalTransferFactory({
        name: '$ringColor',
        tcFunc: tc.ringColor,
    }),
    $ringOpacity: twIntervalTransferFactory({
        name: '$ringOpacity',
        tcFunc: tc.ringOpacity,
    }),
}

export const attrsClassNameVisitor = (attrName: string, attrs: BeTAttrs) => {
    const transfer = twTransfer[attrName]
    //TODO: Log warning
    if (!transfer) return undefined
    return transfer(attrs)
}

export const twAttrsTree = <T extends object, U = keyof T>(props: T) => {
    const restProps: Partial<T> = {}
    const parent = {
        set: function (target: any, prop: any, value: any) {
            if (typeof value === 'object') {
                var p = new Proxy({ parent: target }, parent)
                for (const key in value) {
                    p[key] = value[key]
                }
                target[prop] = p
            } else {
                target[prop] = value
            }
            return true
        },
    }

    var root = new Proxy({}, parent)
    const attrsTree = Object.keys(props).reduce(
        (prev: { [key: string]: any }, curr: string) => {
            const pseudoAttrName = curr.split('$')
            const attrName = pseudoAttrName.pop()
            if (!attrName || pseudoAttrName.length == 0) {
                if (attrName) {
                    ;(restProps as any)[attrName] = (props as any)[attrName]
                }
                return prev
            }
            const tAttrName = `$${attrName}`
            let node = prev
            while (pseudoAttrName.length > 0) {
                const pseudo = pseudoAttrName.shift()
                if (pseudo) {
                    if (!node[pseudo]) {
                        node[pseudo] = {}
                    }
                    node = node[pseudo]
                }
            }
            node[tAttrName] = (props as any)[curr]
            return prev
        },
        root,
    )
    return { attrsTree, ...(restProps as Partial<T>) }
}

export function walkThroughAttrsTree(
    attrs: BeTAttrs,
    visiter: (attrName: string, attrs: BeTAttrs) => TTailwindString | undefined,
) {
    const pseudoAttrName: string[] = []
    function walkThrough(attrs: BeTAttrs) {
        const rst: (TTailwindString | TTailwindString[] | undefined)[] =
            Object.keys(attrs)
                .map<TTailwindString | TTailwindString[] | undefined>(
                    (attr: string) => {
                        if (attr === 'parent') return undefined
                        if (attr.startsWith('$')) return visiter(attr, attrs)
                        if (typeof attrs[attr] === 'object') {
                            pseudoAttrName.push(attr)
                            const next = walkThrough(
                                attrs[attr] as BeTAttrs,
                            ).map<TTailwindString>(
                                (v?: TTailwindString | TTailwindString[]) =>
                                    pseudoClass(pseudoAttrName, v),
                            )
                            pseudoAttrName.pop()
                            return next
                        }
                        return undefined
                    },
                )
                .filter((v) => !!v)
        return rst
    }
    return walkThrough(attrs).map((v?: TTailwindString | TTailwindString[]) =>
        pseudoClass(pseudoAttrName, v),
    )
}

export const twBox = (boxProps: Partial<BoxProps>, inline: boolean = false) => {
    return walkThrough(
        boxProps,
        inline ? tc.display('inline-flex') : tc.display('flex'),
    )
}

export const twGrid = (gridProps: Partial<GridProps>) => {
    return walkThrough(gridProps, tc.display('grid'))
}

export const twGridItem = (gridItemProps: Partial<GridItemProps>) => {
    return walkThrough(gridItemProps)
}

export const twStack = (stackProps: Partial<StackProps>) => {
    return walkThrough(stackProps, tc.position('relative'))
}

export const twStackItem = (stackItemProps: Partial<StackItemProps>) => {
    return walkThrough(stackItemProps, tc.position('absolute'))
}

export const twColumn = (columnProps: Partial<ColumnProps>) => {
    return walkThrough(columnProps)
}

export const twSvg = (svgProps: Partial<SVGIconProps>) => {
    return walkThrough(svgProps)
}

export const twClass = <T>(props: Partial<T>) => {
    return walkThrough(props)
}

/*----------------------------------------------------------------
 * private  methods
 */

function walkThrough<T extends { className?: string } & object>(
    props: T,
    ...preset: TTailwindString[]
) {
    const { className, ...otherProps } = props
    const { attrsTree, ...restProps } = twAttrsTree(otherProps)
    const rst = walkThroughAttrsTree(attrsTree, attrsClassNameVisitor)
    const classNames = tc.classnames(
        className as TTailwindString,
        ...preset,
        ...rst,
    )
    return {
        classNames,
        ...(restProps as Partial<Omit<Omit<T, 'className'>, 'attrsTree'>>),
    }
}

// function walkThrough1(
//     attrsTree: BeTAttrs,
//     className: TTailwindString,
//     preset: TTailwindString,
// ) {
//     const rst = walkThroughAttrsTree(attrsTree, attrsClassNameVisitor)
//     return tc.classnames(className, preset, ...rst)
// }

function prefixFromPseudo(value: string, pseudo?: string | string[]) {
    const prefix = (() =>
        typeof pseudo === 'string' ? pseudo?.split(':') : pseudo)()
        ?.map((v) => BeTPseudoPrefix[v])
        .join(':')
    return value
        .split(' ')
        .map((v) => `${prefix ? prefix + ':' : ''}${v}`)
        .join(' ')
}

function pseudoClass(
    pseudoAttrName: string[],
    v?: TTailwindString | TTailwindString[],
) {
    if (typeof v === 'string') {
        return `${prefixFromPseudo(v, pseudoAttrName)}` as TTailwindString
    }
    if (Array.isArray(v)) {
        return v
            .map((sv) => `${prefixFromPseudo(sv, pseudoAttrName)}`)
            .join(' ') as TTailwindString
    }
    throw new Error(
        'Illegal state error in the walkThroughAttrsTree method: expected a string or string array, bot got' +
            v,
    )
}

function getAttrBackwards(attrs: BeTAttrs, name: string) {
    let parent: BeTAttrs | undefined = attrs
    let attr
    while (parent) {
        attr = parent[name]
        if (attr) return attr
        parent = parent.parent
    }
    return attr
}

function twIntervalTransferFactory(def: {
    name: string
    tcFunc: (...args: any) => TTailwindString
}) {
    const func = (attrs: BeTAttrs) => {
        const $v = attrs[def.name]
        if (isUndefined($v)) return undefined
        switch (typeof $v) {
            case 'object':
                return transferObject(def, attrs)
            case 'string':
                const prefixDef = BeTWPrefixes[def.name as BeTWClassNames]
                if (!prefixDef) {
                    throw new Error(
                        `illegal state error: expected ${def.name} is defined in the prefix def object.`,
                    )
                }
                const $vExtra = prefixDef.extra[$v]
                if ($vExtra) {
                    return def.tcFunc($vExtra)
                }
                return def.tcFunc(twPrefix($v, prefixDef.prefix))
            default:
                throw new Error(
                    'illegal state error encountered in the marginCN method',
                )
        }
    }
    return func
}

function transferObject(
    def: { name: string; tcFunc: (...args: any) => TTailwindString },
    attrs: BeTAttrs,
) {
    const $v = attrs[def.name]
    const axis = BeTWPrefixes[def.name].axis
    if (!axis) {
        throw new Error(
            `illegal state error: expected a axis object in the prefix definition(${def.name}). `,
        )
    }
    const rst = Object.keys(axis).map((key: string) => {
        const k = key as AxisType
        if (isUndefined($v[k]) || typeof $v[k] != 'string') {
            //TODO: log warning
            return undefined
        }
        const prefix = axis[k]
        if (!prefix) {
            throw new Error(
                `illegal state error: expected ${k} is defined in the prefix def object.`,
            )
        }
        const extra = prefix.extra[$v[k]]
        if (extra) {
            return def.tcFunc(extra)
        }
        return def.tcFunc(twPrefix($v[k], prefix.prefix))
    })
    return (rst.filter((v) => v) as TTailwindString[]).join(
        ' ',
    ) as TTailwindString
}

function isUndefined(val?: Object) {
    return !val && val !== ''
}
