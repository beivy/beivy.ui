export type PrefixExtraType = {
    [key: string]: string
}

export type GradientAxis = 'gradient' | 'from' | 'via' | 'to'
export type AxisType =
    | GradientAxis
    | 'x'
    | 'y'
    | 'top'
    | 'left'
    | 'bottom'
    | 'right'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'

export type AxisObjType = {
    [key in AxisType]: PrefixType
}

export type PrefixType = {
    prefix: string
    extra: PrefixExtraType
    axis?: Partial<AxisObjType>
}

export type PrefixTypes = {
    [key: string]: PrefixType
}
export const BeTWPrefixes: PrefixTypes = {
    $display: {
        prefix: '',
        extra: {},
    },
    $visible: {
        prefix: '',
        extra: {},
    },
    $position: {
        prefix: '',
        extra: {},
    },
    $shadow: {
        prefix: 'shadow',
        extra: {
            shadow: 'shadow',
        },
    },
    $shadowColor: {
        prefix: 'shadow',
        extra: {},
    },
    $transformOrigin: {
        prefix: 'origin',
        extra: {},
    },
    $columns: {
        prefix: 'columns',
        extra: {},
    },
    $inset: {
        prefix: 'inset',
        extra: {},
    },
    $top: {
        prefix: 'top',
        extra: {},
    },
    $right: {
        prefix: 'right',
        extra: {},
    },
    $bottom: {
        prefix: 'bottom',
        extra: {},
    },
    $left: {
        prefix: 'left',
        extra: {},
    },
    $flexBasis: {
        prefix: 'basis',
        extra: {},
    },
    $direction: {
        prefix: 'flex',
        extra: {},
    },
    $flexWrap: {
        prefix: 'flex',
        extra: {},
    },
    $flex: {
        prefix: 'flex',
        extra: {},
    },
    $flexGrow: {
        prefix: 'grow',
        extra: {
            '1': 'grow',
        },
    },
    $flexShrink: {
        prefix: 'shrink',
        extra: {
            '1': 'shrink',
        },
    },
    $flexOrder: {
        prefix: 'order',
        extra: {},
    },
    $cols: {
        prefix: 'grid-cols',
        extra: {},
    },
    $colSpan: {
        prefix: 'col-span',
        extra: {
            auto: 'col-auto',
        },
    },
    $colStart: {
        prefix: 'col-start',
        extra: {},
    },
    $colEnd: {
        prefix: 'col-end',
        extra: {},
    },
    $rows: {
        prefix: 'grid-rows',
        extra: {},
    },
    $rowSpan: {
        prefix: 'row-span',
        extra: {
            auto: 'row-auto',
        },
    },
    $rowStart: {
        prefix: 'row-start',
        extra: {},
    },
    $rowEnd: {
        prefix: 'row-end',
        extra: {},
    },
    $autoFlow: {
        prefix: 'grid-flow',
        extra: {},
    },
    $autoCols: {
        prefix: 'auto-cols',
        extra: {},
    },
    $autoRows: {
        prefix: 'auto-rows',
        extra: {},
    },
    $gap: {
        prefix: 'gap',
        axis: {
            x: {
                prefix: 'gap-x',
                extra: {},
            },
            y: {
                prefix: 'gap-y',
                extra: {},
            },
        },
        extra: {},
    },
    $justifyContent: {
        prefix: 'justify',
        extra: {},
    },
    $alignContent: {
        prefix: 'content',
        extra: {},
    },
    $placeContent: {
        prefix: 'place-content',
        extra: {},
    },
    $justifyItems: {
        prefix: 'justify-items',
        extra: {},
    },
    $alignItems: {
        prefix: 'items',
        extra: {},
    },
    $placeItems: {
        prefix: 'place-items',
        extra: {},
    },
    $justifySelf: {
        prefix: 'justify-self',
        extra: {},
    },
    $alignSelf: {
        prefix: 'self',
        extra: {},
    },
    $placeSelf: {
        prefix: 'place-slef',
        extra: {},
    },
    $padding: {
        prefix: 'p',
        extra: {},
        axis: {
            x: {
                prefix: 'px',
                extra: {},
            },
            y: {
                prefix: 'py',
                extra: {},
            },
            top: {
                prefix: 'pt',
                extra: {},
            },
            right: {
                prefix: 'pr',
                extra: {},
            },
            bottom: {
                prefix: 'pb',
                extra: {},
            },
            left: {
                prefix: 'pl',
                extra: {},
            },
        },
    },
    $margin: {
        prefix: 'm',
        extra: {},
        axis: {
            x: {
                prefix: 'mx',
                extra: {},
            },
            y: {
                prefix: 'my',
                extra: {},
            },
            top: {
                prefix: 'mt',
                extra: {},
            },
            bottom: {
                prefix: 'mb',
                extra: {},
            },
            left: {
                prefix: 'ml',
                extra: {},
            },
            right: {
                prefix: 'mr',
                extra: {},
            },
        },
    },
    $space: {
        prefix: 'space',
        extra: {},
        axis: {
            x: {
                prefix: 'space-x',
                extra: {},
            },
            y: {
                prefix: 'space-y',
                extra: {},
            },
        },
    },
    $width: {
        prefix: 'w',
        extra: {},
    },
    $maxWidth: {
        prefix: 'max-w',
        extra: {},
    },
    $minWidth: {
        prefix: 'min-w',
        extra: {},
    },
    $height: {
        prefix: 'h',
        extra: {},
    },
    $minHeight: {
        prefix: 'min-h',
        extra: {},
    },
    $maxHeight: {
        prefix: 'max-h',
        extra: {},
    },
    $fontFamily: {
        prefix: 'font',
        extra: {},
    },
    $fontSize: {
        prefix: 'text',
        extra: {},
    },
    $fontWeight: {
        prefix: 'font',
        extra: {},
    },
    $fontVariantNumeric: {
        prefix: '',
        extra: {
            nums: 'normal-nums',
            ordinal: 'ordinal',
            'slashed-zero': 'slashed-zero',
            lining: 'lining-nums',
            oldstyle: 'oldstyle-nums',
            proportional: 'proportional-nums',
            tabular: 'tabular-nums',
            'diagonal-fractions': 'diagonal-fractions',
            'stacked-fractions': 'stacked-fractions',
        },
    },
    $letterSpacing: {
        prefix: 'tracking',
        extra: {},
    },
    $lineHeight: {
        prefix: 'leading',
        extra: {},
    },
    $listStyleType: {
        prefix: 'list',
        extra: {},
    },
    $listStylePosition: {
        prefix: 'list',
        extra: {},
    },
    $textAlign: {
        prefix: 'text',
        extra: {},
    },
    $textColor: {
        prefix: 'text',
        extra: {},
    },
    $textDecoration: {
        prefix: '',
        extra: {
            underline: 'underline',
            overline: 'overline',
            'line-through': 'line-through',
            'no-underline': 'no-underline',
        },
    },
    $textDecorationColor: {
        prefix: 'decoration',
        extra: {},
    },
    $textDecorationStyle: {
        prefix: 'decoration',
        extra: {},
    },
    $textDecorationThickness: {
        prefix: 'decoration',
        extra: {},
    },
    $textUnderlineOffset: {
        prefix: 'underline-offset',
        extra: {},
    },
    $textTransform: {
        prefix: '',
        extra: {
            uppercase: 'uppercase',
            lowercase: 'lowercase',
            capitalize: 'capitalize',
            'normal-case': 'normal-case',
        },
    },
    $textOverflow: {
        prefix: 'text',
        extra: {
            truncate: 'truncate',
        },
    },
    $textIndent: {
        prefix: 'indent',
        extra: {},
    },
    $verticalAlign: {
        prefix: 'align',
        extra: {},
    },
    $whitespace: {
        prefix: 'whitespace',
        extra: {},
    },
    $wordBreak: {
        prefix: 'break',
        extra: {},
    },
    $content: {
        prefix: 'content',
        extra: {},
    },
    $bgAttachment: {
        prefix: 'bg',
        extra: {},
    },
    $bgClip: {
        prefix: 'bg-clip',
        extra: {},
    },
    $bgColor: {
        prefix: 'bg',
        extra: {},
    },
    $bgOrigin: {
        prefix: 'bg-origin',
        extra: {},
    },
    $bgPosition: {
        prefix: 'bg',
        extra: {},
    },
    $bgRepeat: {
        prefix: 'bg-repeat',
        extra: {
            repeat: 'bg-repeat',
            'no-repeat': 'bg-no-repeat',
        },
    },
    $bgSize: {
        prefix: 'bg',
        extra: {},
    },
    $bgImage: {
        prefix: 'bg',
        extra: {},
        axis: {
            gradient: {
                prefix: 'bg-gradient-to',
                extra: {},
            },
            from: {
                prefix: 'from',
                extra: {},
            },
            via: {
                prefix: 'via',
                extra: {},
            },
            to: {
                prefix: 'to',
                extra: {},
            },
        },
    },
    $bgGradient: {
        prefix: 'bg-gradient-to',
        extra: {},
    },
    $gradientFrom: {
        prefix: 'from',
        extra: {},
    },
    $gradientVia: {
        prefix: 'via',
        extra: {},
    },
    $gradientTo: {
        prefix: 'to',
        extra: {},
    },
    $borderRadius: {
        prefix: 'rounded',
        extra: {
            rounded: 'rounded',
        },
        axis: {
            top: {
                prefix: 'rounded-t',
                extra: {
                    'rounded-t': 'rounded-t',
                },
            },
            right: {
                prefix: 'rounded-r',
                extra: {
                    'rounded-r': 'rounded-r',
                },
            },
            bottom: {
                prefix: 'rounded-b',
                extra: {
                    'rounded-b': 'rounded-b',
                },
            },
            left: {
                prefix: 'rounded-l',
                extra: {
                    'rounded-l': 'rounded-l',
                },
            },
            topLeft: {
                prefix: 'rounded-tl',
                extra: {
                    'rounded-tl': 'rounded-tl',
                },
            },
            topRight: {
                prefix: 'rounded-tr',
                extra: {
                    'rounded-tr': 'rounded-tr',
                },
            },
            bottomLeft: {
                prefix: 'rounded-bl',
                extra: {
                    'rounded-bl': 'rounded-bl',
                },
            },
            bottomRight: {
                prefix: 'rounded-br',
                extra: {
                    'rounded-br': 'rounded-br',
                },
            },
        },
    },
    $borderWidth: {
        prefix: 'border',
        extra: {
            border: 'border',
        },
        axis: {
            top: {
                prefix: 'border-t',
                extra: {
                    'border-t': 'border-t',
                },
            },
            bottom: {
                prefix: 'border-b',
                extra: {
                    'border-b': 'border-b',
                },
            },
            right: {
                prefix: 'border-r',
                extra: {
                    'border-r': 'border-r',
                },
            },
            left: {
                prefix: 'border-l',
                extra: {
                    'border-l': 'border-l',
                },
            },
        },
    },
    $borderColor: {
        prefix: 'border',
        extra: {},
    },
    $borderStyle: {
        prefix: 'border',
        extra: {},
    },
    $divideWidth: {
        prefix: 'divide',
        extra: {},
        axis: {
            x: {
                prefix: 'divide-x',
                extra: {
                    'divide-x': 'divide-x',
                },
            },
            y: {
                prefix: 'divide-y',
                extra: {
                    'divide-y': 'divide-y',
                },
            },
        },
    },
    $divideColor: {
        prefix: 'divide',
        extra: {},
    },
    $divideStyle: {
        prefix: 'divide',
        extra: {},
    },
    $outlineWidth: {
        prefix: 'outline',
        extra: {},
    },
    $outlineColor: {
        prefix: 'outline',
        extra: {},
    },
    $outlineStyle: {
        prefix: 'outline',
        extra: {
            outline: 'outline',
        },
    },
    $outlineOffset: {
        prefix: 'outline-offset',
        extra: {},
    },
    $ringWidth: {
        prefix: 'ring',
        extra: {},
    },
    $ringColor: {
        prefix: 'ring',
        extra: {},
    },
    $ringOffsetWidth: {
        prefix: 'ring-offset',
        extra: {},
    },
    $ringOffsetColor: {
        prefix: 'ring-offset',
        extra: {},
    },
    $borderCollapse: {
        prefix: 'border',
        extra: {},
    },
    $borderSpacing: {
        prefix: 'border-spacing',
        extra: {},
        axis: {
            x: {
                prefix: 'border-spacing-x',
                extra: {},
            },
            y: {
                prefix: 'border-spacing-y',
                extra: {},
            },
        },
    },
    $tableLayout: {
        prefix: 'table',
        extra: {},
    },
    $fill: {
        prefix: 'fill',
        extra: {},
    },
    $stroke: {
        prefix: 'stroke',
        extra: {},
    },
    $strokeWidth: {
        prefix: 'stroke',
        extra: {},
    },
    $typography: {
        prefix: 'prose',
        extra: {
            prose: 'prose',
        },
    },
    $typographyColor: {
        prefix: 'prose',
        extra: {},
    },
} as const

export type BeTWClassNames = keyof typeof BeTWPrefixes
