import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import React, { forwardRef, useMemo, createContext, useState, useEffect, useContext, useLayoutEffect, useRef, Fragment, isValidElement, cloneElement, createElement, useId, createRef, useReducer, useCallback } from 'react';
import * as tc from 'tailwindcss-classnames';
import * as R from 'ramda';
import { mergeAll } from 'ramda';
import { parse } from 'papaparse';
import { useDropzone } from 'react-dropzone';
import { Menu as Menu$1, Transition, Listbox } from '@headlessui/react';
import { useInRouterContext, Link as Link$1 } from 'react-router-dom';

/**
 * pseudo class
 */
const BeTScreenPrefix = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xl2: '2xl',
};
const BeTPseudoStatePrefix = {
    hover: 'hover',
    focus: 'focus',
    focusWithIn: 'focus-within',
    focusVisible: 'focus-visible',
    active: 'active',
    visited: 'visited',
    target: 'target',
};
const BeTPseudoSelectorPrefix = {
    first: 'first',
    last: 'last',
    only: 'only',
    odd: 'odd',
    even: 'even',
    firstOfType: 'first-of-type',
    lastOfType: 'last-of-type',
    onlyOfType: 'only-of-type',
};
const BeTPseudoContentsPrefix = {
    before: 'before',
    after: 'after',
};
const BeTPseudoFormElementsPrefix = {
    placeholder: 'placeholder',
};
const BeTPseudoFileElementsPrefix = {
    file: 'file',
};
const BeTPseudoListElementsPrefix = {
    list: 'list',
};
const BeTPseudoTextElementsPrefix = {
    selection: 'selection',
    firstLine: 'first-line',
    firstLetter: 'first-letter',
};
const BeTPseudoDialogElementsPrefix = {
    backdrop: 'backdrop',
};
const BeTPreferColorSchemaPrefix = {
    dark: 'dark',
};
const BeTPreferReduceMotionsPrefix = {
    motionReduce: 'motion-reduce',
    motionSafe: 'motion-safe',
};
const BeTPreferContrastPrefix = {
    contrastMore: 'contrast-more',
};
const BeTViewportOrientationPrefix = {
    landscape: 'landscape',
    portrait: 'portrait',
};
const BeTPrintStylePrefix = {
    print: 'print',
};
const BeTPseudoPrefix = {
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
};

const BeTWPrefixes = {
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
    $zIndex: {
        prefix: 'z',
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
    $overflow: {
        prefix: 'overflow',
        extra: {},
    },
    $overscroll: {
        prefix: 'overscroll',
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
    $userSelect: {
        prefix: 'select',
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
    $opacity: {
        prefix: 'opacity',
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
    $cursor: {
        prefix: 'cursor',
        extra: {},
    },
};

const twPrefix = (value, prefix) => {
    const prefixStr = !!prefix ? `${prefix}-` : '';
    if (value?.startsWith('-')) {
        return `-${prefixStr}${value.slice(1)}`;
    }
    return `${prefixStr}${value}`;
};
const twTransfer = {
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
    $zIndex: twIntervalTransferFactory({
        name: '$zIndex',
        tcFunc: tc.zIndex,
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
    $space: (attrs) => {
        const { $space } = attrs;
        if (isUndefined($space))
            return undefined;
        switch (typeof $space) {
            case 'string':
                const $direction = getAttrBackwards(attrs, '$direction');
                switch ($direction) {
                    case 'row':
                    case 'row-reverse':
                        return tc.space(twPrefix($space, 'space'));
                    case 'col':
                    case 'col-reverse':
                        return tc.space(twPrefix($space, 'space'));
                    default:
                        return tc.space(twPrefix($space, 'space'));
                }
            case 'object':
                transferObject({
                    name: '$space',
                    tcFunc: tc.space,
                }, attrs);
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
    $textDecoration: twIntervalTransferFactory({
        name: '$textDecoration',
        tcFunc: tc.textDecoration,
    }),
    $textDecorationColor: twIntervalTransferFactory({
        name: '$textDecorationColor',
        tcFunc: tc.textDecorationColor,
    }),
    $textDecorationStyle: twIntervalTransferFactory({
        name: '$textDecorationStyle',
        tcFunc: tc.textDecorationStyle,
    }),
    $textDecorationThickness: twIntervalTransferFactory({
        name: '$textDecorationThickness',
        tcFunc: tc.textDecorationThickness,
    }),
    $textUnderlineOffset: twIntervalTransferFactory({
        name: '$textUnderlineOffset',
        tcFunc: tc.textUnderlineOffset,
    }),
    $textTransform: twIntervalTransferFactory({
        name: '$textTransform',
        tcFunc: tc.textTransform,
    }),
    $textOverflow: twIntervalTransferFactory({
        name: '$textOverflow',
        tcFunc: tc.textOverflow,
    }),
    $textIndent: twIntervalTransferFactory({
        name: '$textIndent',
        tcFunc: tc.textIndent,
    }),
    $whitespace: twIntervalTransferFactory({
        name: '$whitespace',
        tcFunc: tc.whitespace,
    }),
    $wordBreak: twIntervalTransferFactory({
        name: '$wordBreak',
        tcFunc: tc.wordBreak,
    }),
    $userSelect: twIntervalTransferFactory({
        name: '$userSelect',
        tcFunc: tc.userSelect,
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
    $overflow: twIntervalTransferFactory({
        name: '$overflow',
        tcFunc: tc.overflow,
    }),
    $overscroll: twIntervalTransferFactory({
        name: '$overscroll',
        tcFunc: tc.overscrollBehavior,
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
    $opacity: twIntervalTransferFactory({
        name: '$opacity',
        tcFunc: tc.opacity,
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
    $cursor: twIntervalTransferFactory({
        name: '$cursor',
        tcFunc: tc.cursor,
    }),
};
const attrsClassNameVisitor = (attrName, attrs) => {
    const transfer = twTransfer[attrName];
    //TODO: Log warning
    if (!transfer)
        return undefined;
    return transfer(attrs);
};
const twAttrsTree = (props) => {
    const restProps = {};
    const parent = {
        set: function (target, prop, value) {
            if (typeof value === 'object') {
                var p = new Proxy({ parent: target }, parent);
                for (const key in value) {
                    p[key] = value[key];
                }
                target[prop] = p;
            }
            else {
                target[prop] = value;
            }
            return true;
        },
    };
    var root = new Proxy({}, parent);
    const attrsTree = Object.keys(props).reduce((prev, curr) => {
        const pseudoAttrName = curr.split('$');
        const attrName = pseudoAttrName.pop();
        if (!attrName || pseudoAttrName.length == 0) {
            if (attrName) {
                restProps[attrName] = props[attrName];
            }
            return prev;
        }
        const tAttrName = `$${attrName}`;
        let node = prev;
        while (pseudoAttrName.length > 0) {
            const pseudo = pseudoAttrName.shift();
            if (pseudo) {
                if (!node[pseudo]) {
                    node[pseudo] = {};
                }
                node = node[pseudo];
            }
        }
        node[tAttrName] = props[curr];
        return prev;
    }, root);
    return { attrsTree, ...restProps };
};
function walkThroughAttrsTree(attrs, visiter) {
    const pseudoAttrName = [];
    function walkThrough(attrs) {
        const rst = Object.keys(attrs)
            .map((attr) => {
            if (attr === 'parent')
                return undefined;
            if (attr.startsWith('$'))
                return visiter(attr, attrs);
            if (typeof attrs[attr] === 'object') {
                pseudoAttrName.push(attr);
                const next = walkThrough(attrs[attr]).map((v) => pseudoClass(pseudoAttrName, v));
                pseudoAttrName.pop();
                return next;
            }
            return undefined;
        })
            .filter((v) => !!v);
        return rst;
    }
    return walkThrough(attrs).map((v) => pseudoClass(pseudoAttrName, v));
}
const twBox = (boxProps, inline = false) => {
    return walkThrough(boxProps, inline ? tc.display('inline-flex') : tc.display('flex'));
};
const twGrid = (gridProps) => {
    return walkThrough(gridProps, tc.display('grid'));
};
const twGridItem = (gridItemProps) => {
    return walkThrough(gridItemProps);
};
const twStack = (stackProps) => {
    return walkThrough(stackProps, tc.position('relative'));
};
const twStackItem = (stackItemProps) => {
    return walkThrough(stackItemProps, tc.position('absolute'));
};
const twColumn = (columnProps) => {
    return walkThrough(columnProps);
};
const twSvg = (svgProps) => {
    return walkThrough(svgProps);
};
const twClass = (props) => {
    return walkThrough(props);
};
/*----------------------------------------------------------------
 * private  methods
 */
function walkThrough(props, ...preset) {
    const { className, ...otherProps } = props;
    const { attrsTree, ...restProps } = twAttrsTree(otherProps);
    const rst = walkThroughAttrsTree(attrsTree, attrsClassNameVisitor);
    const classNames = tc.classnames(className, ...preset, ...rst);
    return {
        classNames,
        ...restProps,
    };
}
// function walkThrough1(
//     attrsTree: BeTAttrs,
//     className: TTailwindString,
//     preset: TTailwindString,
// ) {
//     const rst = walkThroughAttrsTree(attrsTree, attrsClassNameVisitor)
//     return tc.classnames(className, preset, ...rst)
// }
function prefixFromPseudo(value, pseudo) {
    const prefix = (() => typeof pseudo === 'string' ? pseudo?.split(':') : pseudo)()
        ?.map((v) => BeTPseudoPrefix[v])
        .join(':');
    return value
        .split(' ')
        .map((v) => `${prefix ? prefix + ':' : ''}${v}`)
        .join(' ');
}
function pseudoClass(pseudoAttrName, v) {
    if (typeof v === 'string') {
        return `${prefixFromPseudo(v, pseudoAttrName)}`;
    }
    if (Array.isArray(v)) {
        return v
            .map((sv) => `${prefixFromPseudo(sv, pseudoAttrName)}`)
            .join(' ');
    }
    throw new Error('Illegal state error in the walkThroughAttrsTree method: expected a string or string array, bot got' +
        v);
}
function getAttrBackwards(attrs, name) {
    let parent = attrs;
    let attr;
    while (parent) {
        attr = parent[name];
        if (attr)
            return attr;
        parent = parent.parent;
    }
    return attr;
}
function twIntervalTransferFactory(def) {
    const func = (attrs) => {
        const $v = attrs[def.name];
        if (isUndefined($v))
            return undefined;
        switch (typeof $v) {
            case 'object':
                return transferObject(def, attrs);
            case 'string':
                const prefixDef = BeTWPrefixes[def.name];
                if (!prefixDef) {
                    throw new Error(`illegal state error: expected ${def.name} is defined in the prefix def object.`);
                }
                const $vExtra = prefixDef.extra[$v];
                if ($vExtra) {
                    return def.tcFunc($vExtra);
                }
                return def.tcFunc(twPrefix($v, prefixDef.prefix));
            default:
                throw new Error('illegal state error encountered in the marginCN method');
        }
    };
    return func;
}
function transferObject(def, attrs) {
    const $v = attrs[def.name];
    const axis = BeTWPrefixes[def.name].axis;
    if (!axis) {
        throw new Error(`illegal state error: expected a axis object in the prefix definition(${def.name}). `);
    }
    const rst = Object.keys(axis).map((key) => {
        const k = key;
        if (isUndefined($v[k]) || typeof $v[k] != 'string') {
            //TODO: log warning
            return undefined;
        }
        const prefix = axis[k];
        if (!prefix) {
            throw new Error(`illegal state error: expected ${k} is defined in the prefix def object.`);
        }
        const extra = prefix.extra[$v[k]];
        if (extra) {
            return def.tcFunc(extra);
        }
        return def.tcFunc(twPrefix($v[k], prefix.prefix));
    });
    return rst.filter((v) => v).join(' ');
}
function isUndefined(val) {
    return !val && val !== '';
}

function isFunction(func) {
    return typeof func === 'function';
}

const Link = forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx("a", { className: classNames, ...restProps, ref: ref, children: children }));
});

const Button$1 = forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx("button", { className: classNames, ...restProps, ref: ref, children: children }));
});

const Image = forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return jsx("img", { className: classNames, ...restProps, ref: ref });
});

const Input$1 = forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return jsx("input", { className: classNames, ...restProps, ref: ref });
});
forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx("input", { className: classNames, ...restProps, ref: ref, type: "date" }));
});
forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx("input", { className: classNames, ...restProps, ref: ref, type: "datetime-local" }));
});
forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx("input", { className: classNames, ...restProps, ref: ref, type: "month" }));
});
forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx("input", { className: classNames, ...restProps, ref: ref, type: "time" }));
});
forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx("input", { className: classNames, ...restProps, ref: ref, type: "password" }));
});
forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx("input", { className: classNames, ...restProps, ref: ref, type: "number" }));
});
forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx("input", { className: classNames, ...restProps, ref: ref, type: "search" }));
});
const TextArea = forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return jsx("textarea", { className: classNames, ...restProps, ref: ref });
});

const Label = ({ children, ...props }) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx("label", { className: classNames, ...restProps, children: children }));
};

const UL = ({ children, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx("ul", { className: classNames, ...restProps, children: children }));
};
const LI = ({ children, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx("li", { className: classNames, ...restProps, children: children }));
};

const Span = ({ children, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx("span", { className: classNames, ...restProps, children: children }));
};
const Div = ({ children, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx("div", { className: classNames, ...restProps, children: children }));
};

const H1 = ({ children, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx("h1", { className: classNames, ...restProps, children: children }));
};
const H2 = ({ children, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx("h2", { className: classNames, ...restProps, children: children }));
};
const H3 = ({ children, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx("h3", { className: classNames, ...restProps, children: children }));
};
const H4 = ({ children, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx("h4", { className: classNames, ...restProps, children: children }));
};
const H5 = ({ children, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx("h5", { className: classNames, ...restProps, children: children }));
};
const Text = ({ children, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx("p", { className: classNames, ...restProps, children: children }));
};

const Box = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("div", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Article = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("article", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Section = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props, inline]);
    return (jsx("section", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Aside = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("aside", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Details = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("details", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Figcaption = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("figcaption", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Figure = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("figure", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Footer = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("footer", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Header = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("header", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Main = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("main", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Mark = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("mark", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Nav = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("nav", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Summary = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("summary", { className: classNames, ...restProps, ref: ref, children: children }));
});
const Time = forwardRef(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twBox(props, inline), [props]);
    return (jsx("time", { className: classNames, ...restProps, ref: ref, children: children }));
});

const Column = forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twColumn(props);
    return (jsx("div", { className: classNames, ...restProps, ref: ref, children: children }));
});

const __Grid = forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twGrid(props), [props]);
    return (jsx("div", { className: classNames, ...restProps, ref: ref, children: children }));
});
const __GridItem = ({ children, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twGridItem(props), [props]);
    return (jsx("div", { className: classNames, ...restProps, children: children }));
};
const Grid = Object.assign(__Grid, { Item: __GridItem });

const __Stack = forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twStack(props);
    return (jsx("div", { className: classNames, ...restProps, ref: ref, children: children }));
});
const __StackItem = ({ children, ...props }) => {
    const { classNames, ...restProps } = twStackItem(props);
    return (jsx("div", { className: classNames, ...restProps, children: children }));
};
const Stack = Object.assign(__Stack, { Item: __StackItem });

const Theme = {
    typography: {
        ['title-100']: {
            $fontSize: 'xs',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '4',
        },
        ['title-200']: {
            $fontSize: 'sm',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '5',
        },
        ['title-300']: {
            $fontSize: 'base',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '6',
        },
        ['title-400']: {
            $fontSize: 'lg',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '7',
        },
        ['title-500']: {
            $fontSize: 'xl',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '7',
        },
        ['title-600']: {
            $fontSize: '2xl',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '8',
        },
        ['title-700']: {
            $fontSize: '3xl',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '9',
        },
        ['title-800']: {
            $fontSize: '4xl',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '10',
        },
        ['title-900']: {
            $fontSize: '5xl',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: 'none',
        },
        ['subtitle-100']: {
            $fontSize: 'xs',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '4',
        },
        ['subtitle-200']: {
            $fontSize: 'sm',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '5',
        },
        ['subtitle-300']: {
            $fontSize: 'base',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '6',
        },
        ['subtitle-400']: {
            $fontSize: 'lg',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '7',
        },
        ['subtitle-500']: {
            $fontSize: 'xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '7',
        },
        ['subtitle-600']: {
            $fontSize: '2xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '8',
        },
        ['subtitle-700']: {
            $fontSize: '3xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '9',
        },
        ['subtitle-800']: {
            $fontSize: '4xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '10',
        },
        ['subtitle-900']: {
            $fontSize: '5xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: 'none',
        },
        ['content-100']: {
            $fontSize: 'xs',
            $fontWeight: 'normal',
            $textColor: 'neutral-500',
            $lineHeight: '4',
        },
        ['content-200']: {
            $fontSize: 'sm',
            $fontWeight: 'normal',
            $textColor: 'neutral-600',
            $lineHeight: '4',
        },
        ['content-300']: {
            $fontSize: 'base',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '4',
        },
        ['content-400']: {
            $fontSize: 'lg',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '6',
        },
        ['content-500']: {
            $fontSize: 'xl',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '6',
        },
        ['content-600']: {
            $fontSize: '2xl',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '8',
        },
        ['content-700']: {
            $fontSize: '3xl',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '9',
        },
        ['content-800']: {
            $fontSize: '4xl',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '10',
        },
        ['content-900']: {
            $fontSize: '5xl',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: 'none',
        },
        ['caption-100']: {
            $fontSize: 'xs',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '4',
        },
        ['caption-200']: {
            $fontSize: 'sm',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '5',
        },
        ['caption-300']: {
            $fontSize: 'base',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '6',
        },
        ['caption-400']: {
            $fontSize: 'lg',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '7',
        },
        ['caption-500']: {
            $fontSize: 'xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '7',
        },
        ['caption-600']: {
            $fontSize: '2xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '8',
        },
        ['caption-700']: {
            $fontSize: '3xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '9',
        },
        ['caption-800']: {
            $fontSize: '4xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '10',
        },
        ['caption-900']: {
            $fontSize: '5xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: 'none',
        },
    },
    grid: {
        ['grid-100']: {},
        ['grid-200']: {},
        ['grid-300']: {},
        ['grid-400']: {},
        ['grid-500']: {},
    },
    ui: {
        caption: 'caption-400',
        description: 'content-300',
        error: {
            title: {
                $fontSize: 'lg',
                $fontWeight: 'semibold',
                $lineHeight: '7',
                $textColor: 'error-400',
            },
            content: {
                $fontSize: 'base',
                $fontWeight: 'normal',
                $textColor: 'error-300',
                $lineHeight: '4',
            },
        },
        icon: {
            normal: {},
            selected: {},
            active: {
                $fill: 'ext-white',
            },
            inactive: {
                $fill: 'neutral-700',
            },
        },
        text: {
            active: {
                $textColor: 'neutral-600',
            },
            inactive: {
                $textColor: 'neutral-500',
            },
            disabled: {
                $textColor: 'neutral-300',
            },
        },
    },
};
const ThemeContext = createContext(Theme);
const ThemeProvider = ({ value, children }) => {
    const theme = { ...Theme, ...value };
    return (jsx(ThemeContext.Provider, { value: theme, children: children }));
};

const Avatar = ({ alt, src, $width, $height }) => {
    const width = $width ?? '8';
    const height = $height ?? '8';
    if (src) {
        return (jsx(Image, { "$display": "inline-block", src: src, alt: alt, "$width": width, "$height": height, "$borderRadius": "full" }));
    }
    return (jsx(Box, { "$display": "inline-flex", "$bgColor": "primary", "$width": width, "$height": height, "$borderRadius": "full", "$textColor": "neutral-100", "$justifyContent": "center", "$alignItems": "center", "$alignContent": "center", children: jsx(Span, { "$display": "block", children: alt?.charAt(0) }) }));
};

class StreamProcessor {
    data;
    option;
    __errors;
    status;
    __idx;
    consumers;
    constructor(opts) {
        this.data = [];
        this.option = Object.assign({
            chinkSize: 1,
        }, opts);
        this.consumers = [];
        this.__errors = [];
        this.status = undefined;
        this.__idx = 0;
    }
    addData(data) {
        const itemToAdd = Array.isArray(data) ? data : [data];
        Array.prototype.push.apply(this.data, itemToAdd);
    }
    registerConsumer(name, consumer) {
        this.consumers.push({
            name,
            func: consumer,
        });
    }
    async process(progress) {
        if (this.status === 'settled') {
            if (progress) {
                return progress(this.remained(), this.errors());
            }
            return;
        }
        let chunk = this.data.splice(0, this.option.chunkSize);
        while (chunk.length > 0) {
            const rsts = await Promise.allSettled(this.consumers.map((consumer) => consumer.func(chunk).catch((err) => {
                const msg = `${this.__idx + 1}件目から${this.option.chunkSize}件データの処理中にエラーが起きました。`;
                console.warn(msg, err);
                return Promise.reject(msg);
            })));
            rsts.forEach((rst) => {
                if (rst.status === 'rejected') {
                    this.__errors.push(rst.reason);
                }
            });
            if (progress) {
                progress(this.remained(), this.errors());
            }
            chunk = this.data.splice(0, this.option.chunkSize);
            this.__idx = this.__idx + chunk.length;
        }
        this.status = 'settled';
    }
    remained() {
        return this.data.length;
    }
    errors() {
        return this.__errors;
    }
}
function useStream(data, options, consumer, consumerName) {
    const [progress, setProgress] = useState({
        processed: null,
        errors: [],
    });
    console.log('====>stream', data);
    useEffect(() => {
        if (!data) {
            return;
        }
        const name = consumerName ?? consumer.name;
        const stream = new StreamProcessor(options);
        stream.addData(data);
        stream.registerConsumer(name, consumer);
        stream.process((remained, errors) => {
            setProgress({
                processed: data.length - remained,
                errors: [...errors],
            });
        });
    }, [data]);
    return progress;
}

const useTheme = () => {
    return useContext(ThemeContext);
};

const FontSizeChart = {
    xs: '4',
    sm: '5',
    base: '6',
    lg: '7',
    xl: '7',
    '2xl': '8',
    '3xl': '9',
    '4xl': '10',
    '5xl': '12',
    '6xl': '16',
    '7xl': '20',
    '8xl': '24',
    '9xl': '32',
};
/**
 * Predicate height of a typography for layout
 * Because the extractor of tailwind only do static check, all possibility are listed
 * {
 * 	$height: "4"
 * 	$height: "5"
 * 	$height: "6"
 * 	$height: "7"
 * 	$height: "8"
 * 	$height: "9"
 * 	$height: "10"
 * 	$height: "12"
 * 	$height: "16"
 * 	$height: "20"
 * 	$height: "24"
 * 	$height: "32"
 * 	$height: "auto"
 * }
 *
 */
function predicateHeight(lh, fs) {
    const tryNumber = Number(lh);
    if (!Number.isNaN(tryNumber))
        return lh;
    if (!fs)
        return 'auto';
    switch (lh) {
        case 'none':
            return FontSizeChart[fs] || 'auto';
        default:
            //TODO: log warning
            return 'auto';
    }
}

/** inline-block rounded-full w-5 min-w-5 h-5 bg-primary-400 text-neutral-200 */
/** w-3 h-3 bg-accent-400 */
const Badge = ({ badgeContent, $bgColor, $textColor, children, }) => {
    const theme = useTheme();
    const typo = theme.typography['caption-200'];
    const bgColor = $bgColor
        ? {
            $bgColor: $bgColor,
        }
        : { $bgColor: 'accent-400' };
    const textColor = $textColor
        ? {
            $textColor: $textColor,
        }
        : { $textColor: 'neutral-200' };
    const [width, height] = useMemo(() => {
        if (!badgeContent && badgeContent !== 0) {
            return ['3', '3'];
        }
        const height = predicateHeight(typo.$lineHeight);
        return [height, height];
    }, [badgeContent, typo]);
    const badge = useMemo(() => (jsx(Span, { "$display": "block", "$borderRadius": "full", "$width": width, "$height": height, ...bgColor, ...textColor, "$textAlign": "center", children: jsxs(Span, { "$display": "inline-block", children: [" ", badgeContent] }) })), [badgeContent, width, height, bgColor, textColor]);
    return (jsxs(Stack, { children: [children, jsx(Stack.Item, { "$right": "0", "$top": "0", children: badge })] }));
};

class Env {
    current = this.detect();
    handoffState = 'pending';
    currentId = 0;
    set(env) {
        if (this.current === env)
            return;
        this.handoffState = 'pending';
        this.currentId = 0;
        this.current = env;
    }
    reset() {
        this.set(this.detect());
    }
    nextId() {
        return ++this.currentId;
    }
    get isServer() {
        return this.current === 'server';
    }
    get isClient() {
        return this.current === 'client';
    }
    detect() {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return 'server';
        }
        return 'client';
    }
    handoff() {
        if (this.handoffState === 'pending') {
            this.handoffState = 'complete';
        }
    }
    get isHandoffComplete() {
        return this.handoffState === 'complete';
    }
}
let env = new Env();

let useIsoMorphicEffect = (effect, deps) => {
    if (env.isServer) {
        useEffect(effect, deps);
    }
    else {
        useLayoutEffect(effect, deps);
    }
};

function useLatestValue(value) {
    let cache = useRef(value);
    useIsoMorphicEffect(() => {
        cache.current = value;
    }, [value]);
    return cache;
}

let useEvent = 
// TODO: Add React.useEvent ?? once the useEvent hook is available
function useEvent(cb) {
    let cache = useLatestValue(cb);
    return React.useCallback((...args) => cache.current(...args), [cache]);
};

let Optional = Symbol();
function useSyncRefs(...refs) {
    let cache = useRef(refs);
    useEffect(() => {
        cache.current = refs;
    }, [refs]);
    let syncRefs = useEvent((value) => {
        for (let ref of cache.current) {
            if (ref == null)
                continue;
            if (typeof ref === 'function')
                ref(value);
            else
                ref.current = value;
        }
    });
    return refs.every((ref) => ref == null ||
        // @ts-expect-error
        ref?.[Optional])
        ? undefined
        : syncRefs;
}

function eventToPosition(evt) {
    return [evt.screenX, evt.screenY];
}
function useTrackedPointer() {
    let lastPos = useRef([-1, -1]);
    return {
        wasMoved(evt) {
            // FIXME: Remove this once we use browser testing in all the relevant places.
            // NOTE: This is replaced with a compile-time define during the build process
            // This hack exists to work around a few failing tests caused by our inability to "move" the virtual pointer in JSDOM pointer events.
            if (process.env.TEST_BYPASS_TRACKED_POINTER) {
                return true;
            }
            let newPos = eventToPosition(evt);
            if (lastPos.current[0] === newPos[0] && lastPos.current[1] === newPos[1]) {
                return false;
            }
            lastPos.current = newPos;
            return true;
        },
        update(evt) {
            lastPos.current = eventToPosition(evt);
        },
    };
}

// TODO: This must already exist somewhere, right? 🤔
// Ref: https://www.w3.org/TR/uievents-key/#named-key-attribute-values
var Keys;
(function (Keys) {
    Keys["Space"] = " ";
    Keys["Enter"] = "Enter";
    Keys["Escape"] = "Escape";
    Keys["Backspace"] = "Backspace";
    Keys["Delete"] = "Delete";
    Keys["ArrowLeft"] = "ArrowLeft";
    Keys["ArrowUp"] = "ArrowUp";
    Keys["ArrowRight"] = "ArrowRight";
    Keys["ArrowDown"] = "ArrowDown";
    Keys["Home"] = "Home";
    Keys["End"] = "End";
    Keys["PageUp"] = "PageUp";
    Keys["PageDown"] = "PageDown";
    Keys["Tab"] = "Tab";
})(Keys || (Keys = {}));

function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}
var Focus$1;
(function (Focus) {
    /** Focus the first non-disabled item. */
    Focus[Focus["First"] = 0] = "First";
    /** Focus the previous non-disabled item. */
    Focus[Focus["Previous"] = 1] = "Previous";
    /** Focus the next non-disabled item. */
    Focus[Focus["Next"] = 2] = "Next";
    /** Focus the last non-disabled item. */
    Focus[Focus["Last"] = 3] = "Last";
    /** Focus a specific item based on the `id` of the item. */
    Focus[Focus["Specific"] = 4] = "Specific";
    /** Focus no items at all. */
    Focus[Focus["Nothing"] = 5] = "Nothing";
})(Focus$1 || (Focus$1 = {}));
function calculateActiveIndex(action, resolvers) {
    let items = resolvers.resolveItems();
    if (items.length <= 0)
        return null;
    let currentActiveIndex = resolvers.resolveActiveIndex();
    let activeIndex = currentActiveIndex ?? -1;
    let nextActiveIndex = (() => {
        switch (action.focus) {
            case Focus$1.First:
                return items.findIndex((item) => !resolvers.resolveDisabled(item));
            case Focus$1.Previous: {
                let idx = items
                    .slice()
                    .reverse()
                    .findIndex((item, idx, all) => {
                    if (activeIndex !== -1 &&
                        all.length - idx - 1 >= activeIndex)
                        return false;
                    return !resolvers.resolveDisabled(item);
                });
                if (idx === -1)
                    return idx;
                return items.length - 1 - idx;
            }
            case Focus$1.Next:
                return items.findIndex((item, idx) => {
                    if (idx <= activeIndex)
                        return false;
                    return !resolvers.resolveDisabled(item);
                });
            case Focus$1.Last: {
                let idx = items
                    .slice()
                    .reverse()
                    .findIndex((item) => !resolvers.resolveDisabled(item));
                if (idx === -1)
                    return idx;
                return items.length - 1 - idx;
            }
            case Focus$1.Specific:
                return items.findIndex((item) => resolvers.resolveId(item) === action.id);
            case Focus$1.Nothing:
                return null;
            default:
                assertNever(action);
        }
    })();
    return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
}

// Polyfill
function microTask(cb) {
    if (typeof queueMicrotask === 'function') {
        queueMicrotask(cb);
    }
    else {
        Promise.resolve()
            .then(cb)
            .catch((e) => setTimeout(() => {
            throw e;
        }));
    }
}

function disposables() {
    let disposables = [];
    let queue = [];
    let api = {
        enqueue(fn) {
            queue.push(fn);
        },
        addEventListener(element, name, listener, options) {
            element.addEventListener(name, listener, options);
            return api.add(() => element.removeEventListener(name, listener, options));
        },
        requestAnimationFrame(...args) {
            let raf = requestAnimationFrame(...args);
            return api.add(() => cancelAnimationFrame(raf));
        },
        nextFrame(...args) {
            return api.requestAnimationFrame(() => {
                return api.requestAnimationFrame(...args);
            });
        },
        setTimeout(...args) {
            let timer = setTimeout(...args);
            return api.add(() => clearTimeout(timer));
        },
        microTask(...args) {
            let task = { current: true };
            microTask(() => {
                if (task.current) {
                    args[0]();
                }
            });
            return api.add(() => {
                task.current = false;
            });
        },
        add(cb) {
            disposables.push(cb);
            return () => {
                let idx = disposables.indexOf(cb);
                if (idx >= 0) {
                    let [dispose] = disposables.splice(idx, 1);
                    dispose();
                }
            };
        },
        dispose() {
            for (let dispose of disposables.splice(0)) {
                dispose();
            }
        },
        async workQueue() {
            for (let handle of queue.splice(0)) {
                await handle();
            }
        },
    };
    return api;
}

function match(value, lookup, ...args) {
    if (value in lookup) {
        let returnValue = lookup[value];
        return typeof returnValue === 'function'
            ? returnValue(...args)
            : returnValue;
    }
    let error = new Error(`Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${Object.keys(lookup)
        .map((key) => `"${key}"`)
        .join(', ')}.`);
    if (Error.captureStackTrace)
        Error.captureStackTrace(error, match);
    throw error;
}

function getOwnerDocument(element) {
    if (env.isServer)
        return null;
    if (element instanceof Node)
        return element.ownerDocument;
    if (element?.hasOwnProperty('current')) {
        if (element.current instanceof Node)
            return element.current.ownerDocument;
    }
    return document;
}

// Credit:
//  - https://stackoverflow.com/a/30753870
let focusableSelector = [
    '[contentEditable=true]',
    '[tabindex]',
    'a[href]',
    'area[href]',
    'button:not([disabled])',
    'iframe',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
]
    .map(process.env.NODE_ENV === 'test'
    ? // TODO: Remove this once JSDOM fixes the issue where an element that is
        // "hidden" can be the document.activeElement, because this is not possible
        // in real browsers.
        (selector) => `${selector}:not([tabindex='-1']):not([style*='display: none'])`
    : (selector) => `${selector}:not([tabindex='-1'])`)
    .join(',');
var Focus;
(function (Focus) {
    /** Focus the first non-disabled element */
    Focus[Focus["First"] = 1] = "First";
    /** Focus the previous non-disabled element */
    Focus[Focus["Previous"] = 2] = "Previous";
    /** Focus the next non-disabled element */
    Focus[Focus["Next"] = 4] = "Next";
    /** Focus the last non-disabled element */
    Focus[Focus["Last"] = 8] = "Last";
    /** Wrap tab around */
    Focus[Focus["WrapAround"] = 16] = "WrapAround";
    /** Prevent scrolling the focusable elements into view */
    Focus[Focus["NoScroll"] = 32] = "NoScroll";
})(Focus || (Focus = {}));
var FocusResult;
(function (FocusResult) {
    /** Something went wrong while trying to focus. */
    FocusResult[FocusResult["Error"] = 0] = "Error";
    /** When `Focus.WrapAround` is enabled, going from position `N` to `N+1` where `N` is the last index in the array, then we overflow. */
    FocusResult[FocusResult["Overflow"] = 1] = "Overflow";
    /** Focus was successful. */
    FocusResult[FocusResult["Success"] = 2] = "Success";
    /** When `Focus.WrapAround` is enabled, going from position `N` to `N-1` where `N` is the first index in the array, then we underflow. */
    FocusResult[FocusResult["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Previous"] = -1] = "Previous";
    Direction[Direction["Next"] = 1] = "Next";
})(Direction || (Direction = {}));
function getFocusableElements(container = document.body) {
    if (container == null)
        return [];
    return Array.from(container.querySelectorAll(focusableSelector)).sort(
    // We want to move `tabIndex={0}` to the end of the list, this is what the browser does as well.
    (a, z) => Math.sign((a.tabIndex || Number.MAX_SAFE_INTEGER) -
        (z.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var FocusableMode;
(function (FocusableMode) {
    /** The element itself must be focusable. */
    FocusableMode[FocusableMode["Strict"] = 0] = "Strict";
    /** The element should be inside of a focusable element. */
    FocusableMode[FocusableMode["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));
function isFocusableElement(element, mode = FocusableMode.Strict) {
    if (element === getOwnerDocument(element)?.body)
        return false;
    return match(mode, {
        [FocusableMode.Strict]() {
            return element.matches(focusableSelector);
        },
        [FocusableMode.Loose]() {
            let next = element;
            while (next !== null) {
                if (next.matches(focusableSelector))
                    return true;
                next = next.parentElement;
            }
            return false;
        },
    });
}
function restoreFocusIfNecessary(element) {
    let ownerDocument = getOwnerDocument(element);
    // console.log(
    //     '====>',
    //     element,
    //     ownerDocument,
    //     ownerDocument &&
    //         isFocusableElement(
    //             ownerDocument.activeElement as HTMLElement,
    //             FocusableMode.Strict,
    //         ),
    // )
    disposables().nextFrame(() => {
        if (ownerDocument &&
            isFocusableElement(ownerDocument.activeElement, FocusableMode.Strict)) {
            focusElement(element);
        }
    });
}
function focusElement(element) {
    element?.focus({ preventScroll: true });
}
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
let selectableSelector = ['textarea', 'input'].join(',');
function isSelectableElement(element) {
    return element?.matches?.(selectableSelector) ?? false;
}
function sortByDomNode(nodes, resolveKey = (i) => i) {
    return nodes.slice().sort((aItem, zItem) => {
        let a = resolveKey(aItem);
        let z = resolveKey(zItem);
        if (a === null || z === null)
            return 0;
        let position = a.compareDocumentPosition(z);
        if (position & Node.DOCUMENT_POSITION_FOLLOWING)
            return -1;
        if (position & Node.DOCUMENT_POSITION_PRECEDING)
            return 1;
        return 0;
    });
}
function focusFrom(current, focus) {
    return focusIn(getFocusableElements(), focus, { relativeTo: current });
}
function focusIn(container, focus, { sorted = true, relativeTo = null, skipElements = [], } = {}) {
    let ownerDocument = Array.isArray(container)
        ? container.length > 0
            ? container[0].ownerDocument
            : document
        : container.ownerDocument;
    let elements = Array.isArray(container)
        ? sorted
            ? sortByDomNode(container)
            : container
        : getFocusableElements(container);
    if (skipElements.length > 0) {
        elements = elements.filter((x) => !skipElements.includes(x));
    }
    relativeTo = relativeTo ?? ownerDocument.activeElement;
    let direction = (() => {
        if (focus & (Focus.First | Focus.Next))
            return Direction.Next;
        if (focus & (Focus.Previous | Focus.Last))
            return Direction.Previous;
        throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
    })();
    let startIndex = (() => {
        if (focus & Focus.First)
            return 0;
        if (focus & Focus.Previous)
            return Math.max(0, elements.indexOf(relativeTo)) - 1;
        if (focus & Focus.Next)
            return Math.max(0, elements.indexOf(relativeTo)) + 1;
        if (focus & Focus.Last)
            return elements.length - 1;
        throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
    })();
    let focusOptions = focus & Focus.NoScroll ? { preventScroll: true } : {};
    let offset = 0;
    let total = elements.length;
    let next = undefined;
    do {
        // Guard against infinite loops
        if (offset >= total || offset + total <= 0)
            return FocusResult.Error;
        let nextIdx = startIndex + offset;
        if (focus & Focus.WrapAround) {
            nextIdx = (nextIdx + total) % total;
        }
        else {
            if (nextIdx < 0)
                return FocusResult.Underflow;
            if (nextIdx >= total)
                return FocusResult.Overflow;
        }
        next = elements[nextIdx];
        // Try the focus the next element, might not work if it is "hidden" to the user.
        next?.focus(focusOptions);
        // Try the next one in line
        offset += direction;
    } while (next !== ownerDocument.activeElement);
    // By default if you <Tab> to a text input or a textarea, the browser will
    // select all the text once the focus is inside these DOM Nodes. However,
    // since we are manually moving focus this behaviour is not happening. This
    // code will make sure that the text gets selected as-if you did it manually.
    // Note: We only do this when going forward / backward. Not for the
    // Focus.First or Focus.Last actions. This is similar to the `autoFocus`
    // behaviour on an input where the input will get focus but won't be
    // selected.
    if (focus & (Focus.Next | Focus.Previous) && isSelectableElement(next)) {
        next.select();
    }
    // This is a little weird, but let me try and explain: There are a few scenario's
    // in chrome for example where a focused `<a>` tag does not get the default focus
    // styles and sometimes they do. This highly depends on whether you started by
    // clicking or by using your keyboard. When you programmatically add focus `anchor.focus()`
    // then the active element (document.activeElement) is this anchor, which is expected.
    // However in that case the default focus styles are not applied *unless* you
    // also add this tabindex.
    if (!next.hasAttribute('tabindex'))
        next.setAttribute('tabindex', '0');
    return FocusResult.Success;
}

var Features;
(function (Features) {
    /** No features at all */
    Features[Features["None"] = 0] = "None";
    /**
     * When used, this will allow us to use one of the render strategies.
     *
     * **The render strategies are:**
     *    - **Unmount**   _(Will unmount the component.)_
     *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
     */
    Features[Features["RenderStrategy"] = 1] = "RenderStrategy";
    /**
     * When used, this will allow the user of our component to be in control. This can be used when
     * you want to transition based on some state.
     */
    Features[Features["Static"] = 2] = "Static";
})(Features || (Features = {}));
var RenderStrategy;
(function (RenderStrategy) {
    RenderStrategy[RenderStrategy["Unmount"] = 0] = "Unmount";
    RenderStrategy[RenderStrategy["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));
function render({ ourProps, theirProps, slot, defaultTag, features, visible = true, name, }) {
    let props = mergeProps(theirProps, ourProps);
    // Visible always render
    if (visible)
        return _render(props, slot, defaultTag, name);
    let featureFlags = features ?? Features.None;
    if (featureFlags & Features.Static) {
        let { static: isStatic = false, ...rest } = props;
        // When the `static` prop is passed as `true`, then the user is in control, thus we don't care about anything else
        if (isStatic)
            return _render(rest, slot, defaultTag, name);
    }
    if (featureFlags & Features.RenderStrategy) {
        let { unmount = true, ...rest } = props;
        let strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
        return match(strategy, {
            [RenderStrategy.Unmount]() {
                return null;
            },
            [RenderStrategy.Hidden]() {
                return _render({
                    ...rest,
                    ...{ hidden: true, style: { display: 'none' } },
                }, slot, defaultTag, name);
            },
        });
    }
    // No features enabled, just render
    return _render(props, slot, defaultTag, name);
}
function _render(props, slot = {}, tag, name) {
    let { as: Component = tag, children, refName = 'ref', ...rest } = omit(props, ['unmount', 'static']);
    // This allows us to use `<HeadlessUIComponent as={MyComponent} refName="innerRef" />`
    let refRelatedProps = props.ref !== undefined ? { [refName]: props.ref } : {};
    let resolvedChildren = (typeof children === 'function' ? children(slot) : children);
    // Allow for className to be a function with the slot as the contents
    // @ts-ignore
    if (rest.className && typeof rest.className === 'function') {
        rest.className = rest.className(slot);
    }
    let dataAttributes = {};
    if (slot) {
        let exposeState = false;
        let states = [];
        for (let [k, v] of Object.entries(slot)) {
            if (typeof v === 'boolean') {
                exposeState = true;
            }
            if (v === true) {
                states.push(k);
            }
        }
        if (exposeState)
            dataAttributes[`data-headlessui-state`] = states.join(' ');
    }
    if (Component === Fragment) {
        if (Object.keys(compact(rest)).length > 0) {
            if (!isValidElement(resolvedChildren) ||
                (Array.isArray(resolvedChildren) && resolvedChildren.length > 1)) {
                throw new Error([
                    'Passing props on "Fragment"!',
                    '',
                    `The current component <${name} /> is rendering a "Fragment".`,
                    `However we need to passthrough the following props:`,
                    Object.keys(rest)
                        .map((line) => `  - ${line}`)
                        .join('\n'),
                    '',
                    'You can apply a few solutions:',
                    [
                        'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                        'Render a single element as the child so that we can forward the props onto that element.',
                    ]
                        .map((line) => `  - ${line}`)
                        .join('\n'),
                ].join('\n'));
            }
            return cloneElement(resolvedChildren, Object.assign({}, 
            // Filter out undefined values so that they don't override the existing values
            mergeProps(
            //@ts-ignore
            resolvedChildren.props, compact(omit(rest, ['ref']))), dataAttributes, refRelatedProps, mergeRefs(resolvedChildren.ref, refRelatedProps.ref)));
        }
    }
    return createElement(Component, Object.assign({}, omit(rest, ['ref']), Component !== Fragment && refRelatedProps, Component !== Fragment && dataAttributes), resolvedChildren);
}
function mergeRefs(...refs) {
    return {
        ref: refs.every((ref) => ref == null)
            ? undefined
            : (value) => {
                for (let ref of refs) {
                    if (ref == null)
                        continue;
                    if (typeof ref === 'function')
                        ref(value);
                    else
                        ref.current = value;
                }
            },
    };
}
function mergeProps(...listOfProps) {
    if (listOfProps.length === 0)
        return {};
    if (listOfProps.length === 1)
        return listOfProps[0];
    let target = {};
    let eventHandlers = {};
    for (let props of listOfProps) {
        for (let prop in props) {
            // Collect event handlers
            if (prop.startsWith('on') && typeof props[prop] === 'function') {
                eventHandlers[prop] ??= [];
                eventHandlers[prop].push(props[prop]);
            }
            else {
                // Override incoming prop
                target[prop] = props[prop];
            }
        }
    }
    // Do not attach any event handlers when there is a `disabled` or `aria-disabled` prop set.
    if (target.disabled || target['aria-disabled']) {
        return Object.assign(target, 
        // Set all event listeners that we collected to `undefined`. This is
        // important because of the `cloneElement` from above, which merges the
        // existing and new props, they don't just override therefore we have to
        // explicitly nullify them.
        Object.fromEntries(Object.keys(eventHandlers).map((eventName) => [
            eventName,
            undefined,
        ])));
    }
    // Merge event handlers
    for (let eventName in eventHandlers) {
        Object.assign(target, {
            [eventName](event, ...args) {
                let handlers = eventHandlers[eventName];
                for (let handler of handlers) {
                    if ((event instanceof Event ||
                        event?.nativeEvent instanceof Event) &&
                        event.defaultPrevented) {
                        return;
                    }
                    handler(event, ...args);
                }
            },
        });
    }
    return target;
}
/**
 * This is a hack, but basically we want to keep the full 'API' of the component, but we do want to
 * wrap it in a forwardRef so that we _can_ passthrough the ref
 */
function forwardRefWithAs(component) {
    return Object.assign(forwardRef(component), {
        displayName: component.displayName ?? component.name,
    });
}
function compact(object) {
    let clone = Object.assign({}, object);
    for (let key in clone) {
        if (clone[key] === undefined)
            delete clone[key];
    }
    return clone;
}
function omit(object, keysToOmit = []) {
    let clone = Object.assign({}, object);
    for (let key of keysToOmit) {
        //@ts-ignore
        if (key in clone)
            delete clone[key];
    }
    return clone;
}

const DEFAULT_LIST_TAG = Fragment;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes[ActionTypes["GoToItem"] = 0] = "GoToItem";
    ActionTypes[ActionTypes["RegisterItem"] = 1] = "RegisterItem";
    ActionTypes[ActionTypes["UnregisterItem"] = 2] = "UnregisterItem";
    ActionTypes[ActionTypes["SelectItem"] = 3] = "SelectItem";
    ActionTypes[ActionTypes["UnselectItem"] = 4] = "UnselectItem";
})(ActionTypes || (ActionTypes = {}));
var ActivationTrigger;
(function (ActivationTrigger) {
    ActivationTrigger[ActivationTrigger["Pointer"] = 0] = "Pointer";
    ActivationTrigger[ActivationTrigger["Other"] = 1] = "Other";
})(ActivationTrigger || (ActivationTrigger = {}));
const reducers = {
    [ActionTypes.GoToItem]: (state, action) => {
        const adjustedState = adjustOrderedState(state);
        const activeItemIndex = calculateActiveIndex(action, {
            resolveItems: () => adjustedState.items,
            resolveActiveIndex: () => adjustedState.activeItemIndex,
            resolveId: (item) => item.id,
            resolveDisabled: (item) => item.dataRef.current.disabled,
        });
        return {
            ...state,
            ...adjustedState,
            activeItemIndex,
            activationTrigger: action.trigger ?? ActivationTrigger.Other,
        };
    },
    [ActionTypes.RegisterItem]: (state, action) => {
        const adjustedState = adjustOrderedState(state, (items) => [
            ...items,
            { id: action.id, dataRef: action.dataRef },
        ]);
        return { ...state, ...adjustedState };
    },
    [ActionTypes.UnregisterItem]: (state, action) => {
        const adjustedState = adjustOrderedState(state, (items) => {
            const adjustedItems = items.filter((item) => item.id !== action.id);
            return adjustedItems;
        });
        return {
            ...state,
            ...adjustedState,
            activationTrigger: ActivationTrigger.Other,
        };
    },
    [ActionTypes.SelectItem]: (state, action) => {
        const { id } = action;
        const selectedItemIndex = state.items.findIndex((item) => item.id === id);
        return {
            ...state,
            selectedItemIndex,
        };
    },
    [ActionTypes.UnselectItem]: (state, action) => {
        return {
            ...state,
            selectedItemIndex: null,
        };
    },
};
const ListContext = createContext(null);
ListContext.displayName = 'ListContext';
const ListRenderFeatures = Features.RenderStrategy | Features.Static;
function stateReducer(state, action) {
    return match(action.type, reducers, state, action);
}
const _List = forwardRefWithAs((props, ref) => {
    const innerId = useId();
    const { id = innerId, selectedItemIndex = null, ...theirProps } = props;
    const itemsRef = createRef();
    const [state, dispatch] = useReducer(stateReducer, {
        itemsRef: useSyncRefs(ref, itemsRef),
        items: [],
        activeItemIndex: null,
        selectedItemIndex,
        activationTrigger: ActivationTrigger.Other,
    });
    useIsoMorphicEffect(() => {
        if (state.activeItemIndex !== null) {
            dispatch({
                type: ActionTypes.GoToItem,
                focus: Focus$1.Specific,
                id: state.items[state.activeItemIndex].id,
            });
            restoreFocusIfNecessary(state.items[state.activeItemIndex].dataRef.current?.domRef
                .current);
        }
    }, [state.activeItemIndex]);
    useIsoMorphicEffect(() => {
        if (state.selectedItemIndex !== null) {
            if (state.items[state.selectedItemIndex]) {
                dispatch({
                    type: ActionTypes.SelectItem,
                    id: state.items[state.selectedItemIndex].id,
                });
                restoreFocusIfNecessary(state.items[state.selectedItemIndex].dataRef.current
                    ?.domRef.current);
            }
        }
    }, [state.selectedItemIndex]);
    const handleKeyDown = useEvent((event) => {
        switch (event.key) {
            // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13
            case Keys.Space:
            case Keys.Enter:
                // event.preventDefault()
                event.stopPropagation();
                if (state.activeItemIndex !== null) {
                    dispatch({
                        type: ActionTypes.SelectItem,
                        id: state.items[state.activeItemIndex].id,
                    });
                    let { dataRef } = state.items[state.activeItemIndex];
                    dataRef.current?.domRef.current?.click();
                }
                break;
            case Keys.Escape:
                event.preventDefault();
                event.stopPropagation();
                if (state.activeItemIndex !== null) {
                    restoreFocusIfNecessary(state.items[state.activeItemIndex].dataRef
                        .current?.domRef?.current);
                    dispatch({
                        type: ActionTypes.UnselectItem,
                    });
                }
                break;
            case Keys.Tab:
                event.preventDefault();
                event.stopPropagation();
                disposables().nextFrame(() => {
                    focusFrom(state.itemsRef.current, event.shiftKey
                        ? Focus.Previous
                        : Focus.Next);
                });
                break;
            case Keys.ArrowUp:
                event.preventDefault();
                event.stopPropagation();
                dispatch({
                    type: ActionTypes.GoToItem,
                    focus: Focus$1.Previous,
                });
                break;
            case Keys.ArrowDown:
                event.preventDefault();
                event.stopPropagation();
                dispatch({
                    type: ActionTypes.GoToItem,
                    focus: Focus$1.Next,
                });
                break;
        }
    });
    const ourProps = {
        id,
        onKeyDown: handleKeyDown,
        role: 'list',
        tabIndex: -1,
        ref: itemsRef,
    };
    const slot = useMemo(() => ({ selectedItemIndex: state.selectedItemIndex }), [selectedItemIndex]);
    return (jsx(ListContext.Provider, { value: [state, dispatch], children: render({
            ourProps,
            theirProps,
            slot,
            defaultTag: DEFAULT_LIST_TAG,
            features: ListRenderFeatures,
            name: 'List',
        }) }));
});
const DEFAULT_ITEM_TAG = Fragment;
const _Item = forwardRefWithAs((props, ref) => {
    const internalId = useId();
    const { id = `beivy-hlList-item-${internalId}`, disabled = false, ...theirProps } = props;
    const [state, dispatch] = useListContext('List.Item');
    const active = state.activeItemIndex !== null
        ? state.items[state.activeItemIndex]?.id === id
        : false;
    const selected = state.selectedItemIndex !== null
        ? state.items[state.selectedItemIndex]?.id === id
        : false;
    // const selected =
    //     state.selectedItemIndex !== null
    //         ? state.items[state.selectedItemIndex].id === id
    //         : false
    const internalItemRef = useRef(null);
    const itemRef = useSyncRefs(ref, internalItemRef);
    useIsoMorphicEffect(() => {
        if (!active)
            return;
        if (state.activationTrigger === ActivationTrigger.Pointer) ;
        const d = disposables();
        d.requestAnimationFrame(() => {
            internalItemRef.current?.scrollIntoView?.({ block: 'nearest' });
        });
        return d.dispose;
    }, [internalItemRef, active, state.activationTrigger]);
    const bag = useRef({
        disabled,
        domRef: internalItemRef,
    });
    useIsoMorphicEffect(() => {
        bag.current.disabled = disabled;
    }, [bag, disabled]);
    useIsoMorphicEffect(() => {
        bag.current.textValue =
            internalItemRef.current?.textContent?.toLowerCase();
    }, [bag, internalItemRef]);
    useIsoMorphicEffect(() => {
        dispatch({ type: ActionTypes.RegisterItem, id, dataRef: bag });
        return () => dispatch({ type: ActionTypes.UnregisterItem, id });
    }, []);
    const handleFocus = useEvent(() => {
        if (disabled)
            return dispatch({
                type: ActionTypes.GoToItem,
                focus: Focus$1.Nothing,
            });
        dispatch({ type: ActionTypes.GoToItem, focus: Focus$1.Specific, id });
    });
    const pointer = useTrackedPointer();
    const handleEnter = useEvent((evt) => {
        pointer.update(evt);
    });
    const handleMove = useEvent((evt) => {
        if (!pointer.wasMoved(evt))
            return;
        if (disabled)
            return;
        if (active)
            return;
        dispatch({
            type: ActionTypes.GoToItem,
            focus: Focus$1.Specific,
            id,
            trigger: ActivationTrigger.Pointer,
        });
    });
    const handleLeave = useEvent((evt) => {
        if (!pointer.wasMoved(evt))
            return;
        if (disabled)
            return;
        if (!active)
            return;
        dispatch({ type: ActionTypes.GoToItem, focus: Focus$1.Nothing });
    });
    const handleClick = useEvent((evt) => {
        if (disabled)
            return evt.preventDefault();
        dispatch({ type: ActionTypes.SelectItem, id });
        if (state.activationTrigger === ActivationTrigger.Other) {
            restoreFocusIfNecessary(state.itemsRef.current);
        }
    });
    const slot = useMemo(() => ({ active, selected, disabled }), [active, selected, disabled]);
    const ourProps = {
        id,
        ref: itemRef,
        role: 'listitem',
        tabIndex: disabled === true ? undefined : 0,
        'aria-disabled': disabled === true ? true : undefined,
        disabled: undefined,
        onClick: handleClick,
        onFocus: handleFocus,
        onPointerEnter: handleEnter,
        onMouseEnter: handleEnter,
        onPointerMove: handleMove,
        onMouseMove: handleMove,
        onPointerLeave: handleLeave,
        onMouseLeave: handleLeave,
    };
    return render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_ITEM_TAG,
        name: 'List.Item',
    });
});
const List = Object.assign(_List, { Item: _Item });
/**
 * Sort the state items via DOM node order.
 */
function adjustOrderedState(state, adjustment = (i) => i) {
    const currentActiveItem = state.activeItemIndex !== null
        ? state.items[state.activeItemIndex]
        : null;
    const sortedItems = sortByDomNode(adjustment(state.items.slice()), (item) => item.dataRef.current.domRef.current);
    let adjustedActiveItemIndex = currentActiveItem
        ? sortedItems.indexOf(currentActiveItem)
        : null;
    if (adjustedActiveItemIndex === -1) {
        adjustedActiveItemIndex = null;
    }
    return {
        items: sortedItems,
        activeItemIndex: adjustedActiveItemIndex,
    };
}
function useListContext(component) {
    const context = useContext(ListContext);
    if (context === null) {
        const err = new Error(`<${component} /> is missing a parent <List /> component.`);
        if (Error.captureStackTrace)
            Error.captureStackTrace(err, useListContext);
        throw err;
    }
    return context;
}

const SvgAdd = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "9e8e10660a316be60a4019a2ec9a15f4", clipPath: "url(#clip0_211_64)", children: jsx("path", { id: "c390763bf0fda084138a1941ecf53e34", d: "M25.3334 17.3334H17.3334V25.3334H14.6667V17.3334H6.66675V14.6667H14.6667V6.66675H17.3334V14.6667H25.3334V17.3334Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_211_64", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgArrowForward = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "6ba2ae26976225da0fa6c17eb2950dec", clipPath: "url(#clip0_211_67)", children: jsx("path", { id: "aa7981aff661e81e3fee0db9bfdb5da4", d: "M15.9999 5.33325L14.1199 7.21325L21.5599 14.6666H5.33325V17.3333H21.5599L14.1199 24.7866L15.9999 26.6666L26.6666 15.9999L15.9999 5.33325Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_211_67", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgCheck = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "cef912035e4e66536452e9c638e341e8", children: jsx("g", { id: "8c2dcfe48442f1f09221297e3a6fb0a0", children: jsx("path", { id: "6deaf5139f2c2da42cc1bf84180126cf", d: "M16.0001 2.66675C8.64008 2.66675 2.66675 8.64008 2.66675 16.0001C2.66675 23.3601 8.64008 29.3334 16.0001 29.3334C23.3601 29.3334 29.3334 23.3601 29.3334 16.0001C29.3334 8.64008 23.3601 2.66675 16.0001 2.66675ZM13.3334 22.6667L6.66675 16.0001L8.54675 14.1201L13.3334 18.8934L23.4534 8.77341L25.3334 10.6667L13.3334 22.6667Z" }) }) }) }));

const SvgCheckboxDeselected = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "cad6c0ca9f9af12b5e5a91085a20cd9e", children: jsx("g", { id: "50eab72e8c030bbbc4df75a506aed087", children: jsx("path", { id: "e2b2bdec20fdd5c016ddc23c726ea5e2", d: "M25.3333 6.66667V25.3333H6.66667V6.66667H25.3333ZM25.3333 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333V6.66667C28 5.2 26.8 4 25.3333 4Z" }) }) }) }));

const SvgCheckboxIndeterminate = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "f50bc596840ad6981bf68637638d75fe", children: jsx("g", { id: "3b88713d226394518b39eca6d1fb3d27", children: jsx("path", { id: "628bbab3fbd27d47dd8c9bb436d8afd8", d: "M25.3333 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333V6.66667C28 5.2 26.8 4 25.3333 4ZM22.6667 17.3333H9.33333V14.6667H22.6667V17.3333Z" }) }) }) }));

const SvgCheckboxSelected = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "7e1ad30812b5f97014766b0d314d1861", children: jsx("g", { id: "7f32941a6fe827b0f2c16b64968e206c", children: jsx("path", { id: "9e1f42b2be1d445ed05f75b6186a5aa0", d: "M25.3333 4H6.66667C5.18667 4 4 5.2 4 6.66667V25.3333C4 26.8 5.18667 28 6.66667 28H25.3333C26.8133 28 28 26.8 28 25.3333V6.66667C28 5.2 26.8133 4 25.3333 4ZM13.3333 22.6667L6.66667 16L8.54667 14.12L13.3333 18.8933L23.4533 8.77333L25.3333 10.6667L13.3333 22.6667Z" }) }) }) }));

const SvgChevronDown = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "ab1a5f87b77edcdf28df6ace65f36f1a", children: jsx("g", { id: "28c73d5a0aedfdb011c4692708930c48", children: jsx("path", { id: "e52785452b157a6c7391814c6fc62ea8", d: "M9.88 10.4534L16 16.56L22.12 10.4534L24 12.3334L16 20.3334L8 12.3334L9.88 10.4534Z" }) }) }) }));

const SvgChevronUp = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "a30ddb2dad1e708934dd51d6ad692087", clipPath: "url(#clip0_211_70)", children: jsx("path", { id: "fac3dd1d7e8f0d9daa5dd984c84c08b1", d: "M9.88 20.5467L16 14.4401L22.12 20.5467L24 18.6667L16 10.6667L8 18.6667L9.88 20.5467Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_211_70", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgClose = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "87999c0ddf05201c201d896c873f9a7e", children: jsx("g", { id: "498d9c5c586e4b8bee33764592de437c", children: jsx("path", { id: "7ddcf0c0c03663fc25876c1591c654d3", d: "M25.3334 8.54675L23.4534 6.66675L16.0001 14.1201L8.54675 6.66675L6.66675 8.54675L14.1201 16.0001L6.66675 23.4534L8.54675 25.3334L16.0001 17.8801L23.4534 25.3334L25.3334 23.4534L17.8801 16.0001L25.3334 8.54675Z" }) }) }) }));

const SvgDateRange = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "65f9b6d6b2b60c81017bd2129baea6ac", children: jsx("g", { id: "e5de641757b6d09ffac39b265ce4e135", children: jsx("path", { id: "dc84a3d29debe4c46d76bf5636c83efe", d: "M12 14.6667H9.33333V17.3334H12V14.6667ZM17.3333 14.6667H14.6667V17.3334H17.3333V14.6667ZM22.6667 14.6667H20V17.3334H22.6667V14.6667ZM25.3333 5.33341H24V2.66675H21.3333V5.33341H10.6667V2.66675H8V5.33341H6.66667C5.18667 5.33341 4.01333 6.53341 4.01333 8.00008L4 26.6667C4 28.1334 5.18667 29.3334 6.66667 29.3334H25.3333C26.8 29.3334 28 28.1334 28 26.6667V8.00008C28 6.53341 26.8 5.33341 25.3333 5.33341ZM25.3333 26.6667H6.66667V12.0001H25.3333V26.6667Z" }) }) }) }));

const SvgDelete = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "b65cb220659e6ce8c937d899b9eba13f", clipPath: "url(#clip0_363_1317)", children: jsx("path", { id: "8f2d36638b03b70ece59be48451056fb", d: "M21.3334 12V25.3333H10.6667V12H21.3334ZM19.3334 4H12.6667L11.3334 5.33333H6.66675V8H25.3334V5.33333H20.6667L19.3334 4ZM24.0001 9.33333H8.00008V25.3333C8.00008 26.8 9.20008 28 10.6667 28H21.3334C22.8001 28 24.0001 26.8 24.0001 25.3333V9.33333Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_363_1317", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgEdit = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "8c63e7ef1446478b33aa5a7d1fb41a62", children: jsx("path", { id: "136f84d8fbc5e680772a07818d3a65fa", d: "M17.8712 10.0312L19.3023 11.4623L5.20897 25.5556H3.77786V24.1245L17.8712 10.0312M23.4712 0.666748C23.0823 0.666748 22.6779 0.822304 22.3823 1.11786L19.5356 3.96453L25.369 9.79786L28.2156 6.95119C28.8223 6.34453 28.8223 5.36453 28.2156 4.75786L24.5756 1.11786C24.2645 0.806748 23.8756 0.666748 23.4712 0.666748V0.666748ZM17.8712 5.62897L0.666748 22.8334V28.6667H6.50008L23.7045 11.4623L17.8712 5.62897V5.62897Z" }) }) }));

const SvgEmail = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "819ec7a5c80ecb649fd3145b18b11002", children: jsx("g", { id: "0d16bf45b5d184805fc33848beaf8dbd", children: jsx("path", { id: "e9b3969dea6e4d2d215466897b5f26f1", d: "M26.6667 5.33325H5.33341C3.86675 5.33325 2.68008 6.53325 2.68008 7.99992L2.66675 23.9999C2.66675 25.4666 3.86675 26.6666 5.33341 26.6666H26.6667C28.1334 26.6666 29.3334 25.4666 29.3334 23.9999V7.99992C29.3334 6.53325 28.1334 5.33325 26.6667 5.33325ZM26.6667 10.6666L16.0001 17.3333L5.33341 10.6666V7.99992L16.0001 14.6666L26.6667 7.99992V10.6666Z" }) }) }) }));

const SvgEvent = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "fd35eb6bd2605a2b6e537e224f38d6d5", clipPath: "url(#clip0_240_186)", children: jsx("path", { id: "32d65cded330e12dd102aebb1d9b167f", d: "M25.8 5.6H24.5V3H21.9V5.6H11.5V3H8.9V5.6H7.6C6.157 5.6 5.013 6.77 5.013 8.2L5 26.4C5 27.83 6.157 29 7.6 29H25.8C27.23 29 28.4 27.83 28.4 26.4V8.2C28.4 6.77 27.23 5.6 25.8 5.6ZM25.8 26.4H7.6V13.4H25.8V26.4ZM25.8 10.8H7.6V8.2H25.8V10.8ZM16.7 17.3H23.2V23.8H16.7V17.3Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_240_186", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgFavorite = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "5116f8cc9d09068290c2ed26a7855238", clipPath: "url(#clip0_630_6930)", children: jsx("path", { id: "7f9e1bd9201df626ea9893952c21b4ec", d: "M16.0001 28.4667L14.0667 26.7067C7.20008 20.48 2.66675 16.3733 2.66675 11.3333C2.66675 7.22667 5.89341 4 10.0001 4C12.3201 4 14.5467 5.08 16.0001 6.78667C17.4534 5.08 19.6801 4 22.0001 4C26.1067 4 29.3334 7.22667 29.3334 11.3333C29.3334 16.3733 24.8001 20.48 17.9334 26.72L16.0001 28.4667Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_630_6930", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgGroup = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "06e62cda14c30c08674604a9629c00f8", clipPath: "url(#clip0_240_201)", children: jsx("path", { id: "da7c574efe060c5011fc0bfc8650c6b2", d: "M11.2 19C7.456 19 0 20.872 0 24.6V27.4H22.4V24.6C22.4 20.872 14.944 19 11.2 19ZM3.744 24.2C5.088 23.272 8.336 22.2 11.2 22.2C14.064 22.2 17.312 23.272 18.656 24.2H3.744ZM11.2 16.2C14.288 16.2 16.8 13.688 16.8 10.6C16.8 7.512 14.288 5 11.2 5C8.112 5 5.6 7.512 5.6 10.6C5.6 13.688 8.112 16.2 11.2 16.2ZM11.2 8.2C12.528 8.2 13.6 9.272 13.6 10.6C13.6 11.928 12.528 13 11.2 13C9.872 13 8.8 11.928 8.8 10.6C8.8 9.272 9.872 8.2 11.2 8.2ZM22.464 19.096C24.32 20.44 25.6 22.232 25.6 24.6V27.4H32V24.6C32 21.368 26.4 19.528 22.464 19.096V19.096ZM20.8 16.2C23.888 16.2 26.4 13.688 26.4 10.6C26.4 7.512 23.888 5 20.8 5C19.936 5 19.136 5.208 18.4 5.56C19.408 6.984 20 8.728 20 10.6C20 12.472 19.408 14.216 18.4 15.64C19.136 15.992 19.936 16.2 20.8 16.2Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_240_201", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgHome = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "9dc4ad6e970c760d15ccf22fe4457951", clipPath: "url(#clip0_240_191)", children: jsx("path", { id: "6d880c9c1dff43b4a40b7a6fbae36408", d: "M16 6.766L23 13.066V24H20.2V15.6H11.8V24H9V13.066L16 6.766M16 3L2 15.6H6.2V26.8H14.6V18.4H17.4V26.8H25.8V15.6H30L16 3Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_240_191", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgInfo = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "db03e9dd80c18368f2dc6e7971b44b10", children: jsx("g", { id: "e63d4506538f9d8c62a3164b953e2562", children: jsx("path", { id: "064d2808e0d5ce3361ad08713280bd2c", d: "M14.6667 22.6667H17.3334V14.6667H14.6667V22.6667ZM16.0001 2.66675C8.64008 2.66675 2.66675 8.64008 2.66675 16.0001C2.66675 23.3601 8.64008 29.3334 16.0001 29.3334C23.3601 29.3334 29.3334 23.3601 29.3334 16.0001C29.3334 8.64008 23.3601 2.66675 16.0001 2.66675ZM16.0001 26.6667C10.1201 26.6667 5.33341 21.8801 5.33341 16.0001C5.33341 10.1201 10.1201 5.33341 16.0001 5.33341C21.8801 5.33341 26.6667 10.1201 26.6667 16.0001C26.6667 21.8801 21.8801 26.6667 16.0001 26.6667ZM14.6667 12.0001H17.3334V9.33341H14.6667V12.0001Z" }) }) }) }));

const SvgMessage = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "c57a665591c0d106b5438c9643ff3da2", clipPath: "url(#clip0_240_205)", children: jsx("path", { id: "a27b28cc6ffbf27fde15cc4176ab3f2e", d: "M4.8 6.8H27.2V23.6H6.438L4.8 25.238V6.8ZM4.8 4C3.26 4 2.014 5.26 2.014 6.8L2 32L7.6 26.4H27.2C28.74 26.4 30 25.14 30 23.6V6.8C30 5.26 28.74 4 27.2 4H4.8ZM7.6 18H24.4V20.8H7.6V18ZM7.6 13.8H24.4V16.6H7.6V13.8ZM7.6 9.6H24.4V12.4H7.6V9.6Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_240_205", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgMoreVert = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "0da2657fb7b0a89e7fb3f5d940bcd6c4", clipPath: "url(#clip0_295_594)", children: jsx("path", { id: "d7380f2b71aceab2e735a0b45bb70c64", d: "M15.9999 10.6666C17.4666 10.6666 18.6666 9.46659 18.6666 7.99992C18.6666 6.53325 17.4666 5.33325 15.9999 5.33325C14.5333 5.33325 13.3333 6.53325 13.3333 7.99992C13.3333 9.46659 14.5333 10.6666 15.9999 10.6666ZM15.9999 13.3333C14.5333 13.3333 13.3333 14.5333 13.3333 15.9999C13.3333 17.4666 14.5333 18.6666 15.9999 18.6666C17.4666 18.6666 18.6666 17.4666 18.6666 15.9999C18.6666 14.5333 17.4666 13.3333 15.9999 13.3333ZM15.9999 21.3333C14.5333 21.3333 13.3333 22.5333 13.3333 23.9999C13.3333 25.4666 14.5333 26.6666 15.9999 26.6666C17.4666 26.6666 18.6666 25.4666 18.6666 23.9999C18.6666 22.5333 17.4666 21.3333 15.9999 21.3333Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_295_594", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgNotification = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "32d36d34a2dfb2e42ad20a9894e24a5b", clipPath: "url(#clip0_2971_3496)", children: jsx("path", { id: "2089a3ba84b239c5d74d02f5730fab2e", d: "M15.4872 30C17.0667 30 18.359 28.7077 18.359 27.1282H12.6154C12.6154 28.7077 13.9077 30 15.4872 30ZM24.1026 21.3846V14.2051C24.1026 9.79692 21.7621 6.10667 17.641 5.13026V4.15385C17.641 2.96205 16.679 2 15.4872 2C14.2954 2 13.3333 2.96205 13.3333 4.15385V5.13026C9.22667 6.10667 6.87179 9.78256 6.87179 14.2051V21.3846L4 24.2564V25.6923H26.9744V24.2564L24.1026 21.3846ZM21.2308 22.8205H9.74359V14.2051C9.74359 10.6441 11.9118 7.74359 15.4872 7.74359C19.0626 7.74359 21.2308 10.6441 21.2308 14.2051V22.8205Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_2971_3496", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgPayment = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "4749b4bfbb684e3ee140f18fa4f72f02", children: jsx("g", { id: "6632bfa159940779c2ea3551e5fa583f", children: jsx("path", { id: "5bf8837d4c33e885ba596486bdd0613e", d: "M26.6667 5.33325H5.33341C3.85341 5.33325 2.68008 6.51992 2.68008 7.99992L2.66675 23.9999C2.66675 25.4799 3.85341 26.6666 5.33341 26.6666H26.6667C28.1467 26.6666 29.3334 25.4799 29.3334 23.9999V7.99992C29.3334 6.51992 28.1467 5.33325 26.6667 5.33325ZM26.6667 23.9999H5.33341V15.9999H26.6667V23.9999ZM26.6667 10.6666H5.33341V7.99992H26.6667V10.6666Z" }) }) }) }));

const SvgRadioButtonDeselected = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "6cfd59ff38d696266cf533bd5a88eecf", children: jsx("g", { id: "addf8a907c6d6865c4d11ecf8b32a3cc", children: jsx("path", { id: "c6bb8f76541f3b5fe5116181869c3779", d: "M16.0001 2.66675C8.64008 2.66675 2.66675 8.64008 2.66675 16.0001C2.66675 23.3601 8.64008 29.3334 16.0001 29.3334C23.3601 29.3334 29.3334 23.3601 29.3334 16.0001C29.3334 8.64008 23.3601 2.66675 16.0001 2.66675ZM16.0001 26.6667C10.1067 26.6667 5.33341 21.8934 5.33341 16.0001C5.33341 10.1067 10.1067 5.33341 16.0001 5.33341C21.8934 5.33341 26.6667 10.1067 26.6667 16.0001C26.6667 21.8934 21.8934 26.6667 16.0001 26.6667Z" }) }) }) }));

const SvgRadioButtonSelected = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "b9c9fae7f1ebd438629cd213f9d510fa", children: jsx("g", { id: "e272629cbf9f5231ea0573167d8c9235", children: jsx("path", { id: "563b196901042c8d16ed7202ef4dd59d", d: "M16.0001 9.33341C12.3201 9.33341 9.33341 12.3201 9.33341 16.0001C9.33341 19.6801 12.3201 22.6667 16.0001 22.6667C19.6801 22.6667 22.6667 19.6801 22.6667 16.0001C22.6667 12.3201 19.6801 9.33341 16.0001 9.33341ZM16.0001 2.66675C8.64008 2.66675 2.66675 8.64008 2.66675 16.0001C2.66675 23.3601 8.64008 29.3334 16.0001 29.3334C23.3601 29.3334 29.3334 23.3601 29.3334 16.0001C29.3334 8.64008 23.3601 2.66675 16.0001 2.66675ZM16.0001 26.6667C10.1067 26.6667 5.33341 21.8934 5.33341 16.0001C5.33341 10.1067 10.1067 5.33341 16.0001 5.33341C21.8934 5.33341 26.6667 10.1067 26.6667 16.0001C26.6667 21.8934 21.8934 26.6667 16.0001 26.6667Z" }) }) }) }));

const SvgSearch = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "e457467b869bbe77afc182aa4b1f9c89", children: jsx("g", { id: "e3caa4dc105db98f048d41199f4bf67b", children: jsx("path", { id: "c5ec558b67a652a673881e8f4c459ca0", d: "M20.6667 18.6667H19.6133L19.24 18.3067C20.5467 16.7867 21.3333 14.8133 21.3333 12.6667C21.3333 7.88 17.4533 4 12.6667 4C7.88 4 4 7.88 4 12.6667C4 17.4533 7.88 21.3333 12.6667 21.3333C14.8133 21.3333 16.7867 20.5467 18.3067 19.24L18.6667 19.6133V20.6667L25.3333 27.32L27.32 25.3333L20.6667 18.6667ZM12.6667 18.6667C9.34667 18.6667 6.66667 15.9867 6.66667 12.6667C6.66667 9.34667 9.34667 6.66667 12.6667 6.66667C15.9867 6.66667 18.6667 9.34667 18.6667 12.6667C18.6667 15.9867 15.9867 18.6667 12.6667 18.6667Z" }) }) }) }));

const SvgSend = (props) => (jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: [jsx("g", { id: "2439907903ea8532e9a4febad0681f29", clipPath: "url(#clip0_304_2363)", children: jsx("path", { id: "1101e7d5db0ab97eb4f7751904845e07", d: "M6.68 8.04L16.6933 12.3333L6.66667 11L6.68 8.04M16.68 19.6667L6.66667 23.96V21L16.68 19.6667M4.01333 4L4 13.3333L24 16L4 18.6667L4.01333 28L32 16L4.01333 4Z" }) }), jsx("defs", { children: jsx("clipPath", { id: "clip0_304_2363", children: jsx("rect", { width: 32, height: 32 }) }) })] }));

const SvgToday = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "c0cd3bd065ed05d0207aa02ea28e9b83", children: jsx("g", { id: "9026e14a8ffb688a650777e3b1815348", children: jsx("path", { id: "c63a6402356917f53d77d8f7a1a5e120", d: "M25.3333 3.99992H24V1.33325H21.3333V3.99992H10.6667V1.33325H8V3.99992H6.66667C5.18667 3.99992 4.01333 5.19992 4.01333 6.66658L4 25.3333C4 26.7999 5.18667 27.9999 6.66667 27.9999H25.3333C26.8 27.9999 28 26.7999 28 25.3333V6.66658C28 5.19992 26.8 3.99992 25.3333 3.99992ZM25.3333 25.3333H6.66667V10.6666H25.3333V25.3333ZM9.33333 13.3333H16V19.9999H9.33333V13.3333Z" }) }) }) }));

const SvgUpload = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "e64071122ab2c0c639f6cc7bd56493bc", children: jsx("g", { id: "f6f0c1b530e236eb67c85bb0acbd3944", children: jsx("path", { id: "939fb8043170c301cd5736dfaaefa77c", d: "M11.0588 23.9412H21.6471V13.3529H28.7059L16.3529 1L4 13.3529H11.0588V23.9412ZM16.3529 5.99412L20.1824 9.82353H18.1176V20.4118H14.5882V9.82353H12.5235L16.3529 5.99412ZM4 27.4706H28.7059V31H4V27.4706Z" }) }) }) }));

const SvgVisibilityOff = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "ce1020fb7f5a1cd9921193f69962e578", children: jsx("g", { id: "f5badc0fb51d030291680b3d27ba57e3", children: jsx("path", { id: "6903d39dd1534814571a28732fd4db16", d: "M15.9999 9.33333C19.6799 9.33333 22.6666 12.32 22.6666 16C22.6666 16.8667 22.4933 17.68 22.1866 18.44L26.0799 22.3333C28.0933 20.6533 29.6799 18.48 30.6533 16C28.3466 10.1467 22.6533 6 15.9866 6C14.1199 6 12.3333 6.33333 10.6799 6.93333L13.5599 9.81333C14.3199 9.50667 15.1333 9.33333 15.9999 9.33333ZM2.66659 5.69333L5.70659 8.73333L6.31992 9.34667C4.10659 11.0667 2.37325 13.36 1.33325 16C3.63992 21.8533 9.33325 26 15.9999 26C18.0666 26 20.0399 25.6 21.8399 24.88L22.3999 25.44L26.3066 29.3333L27.9999 27.64L4.35992 4L2.66659 5.69333ZM10.0399 13.0667L12.1066 15.1333C12.0399 15.4133 11.9999 15.7067 11.9999 16C11.9999 18.2133 13.7866 20 15.9999 20C16.2933 20 16.5866 19.96 16.8666 19.8933L18.9333 21.96C18.0399 22.4 17.0533 22.6667 15.9999 22.6667C12.3199 22.6667 9.33325 19.68 9.33325 16C9.33325 14.9467 9.59992 13.96 10.0399 13.0667V13.0667ZM15.7866 12.0267L19.9866 16.2267L20.0133 16.0133C20.0133 13.8 18.2266 12.0133 16.0133 12.0133L15.7866 12.0267Z" }) }) }) }));

const SvgVisibilityOn = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "3968d6facc56ab316b662baa15863279", children: jsx("g", { id: "56cce3bb63d34e8a1c881f63e9635a5a", children: jsx("path", { id: "7151ae66e4fbfd27db23a0961bc823bf", d: "M15.9999 6C9.33325 6 3.63992 10.1467 1.33325 16C3.63992 21.8533 9.33325 26 15.9999 26C22.6666 26 28.3599 21.8533 30.6666 16C28.3599 10.1467 22.6666 6 15.9999 6ZM15.9999 22.6667C12.3199 22.6667 9.33325 19.68 9.33325 16C9.33325 12.32 12.3199 9.33333 15.9999 9.33333C19.6799 9.33333 22.6666 12.32 22.6666 16C22.6666 19.68 19.6799 22.6667 15.9999 22.6667ZM15.9999 12C13.7866 12 11.9999 13.7867 11.9999 16C11.9999 18.2133 13.7866 20 15.9999 20C18.2133 20 19.9999 18.2133 19.9999 16C19.9999 13.7867 18.2133 12 15.9999 12Z" }) }) }) }));

const SvgWarning = (props) => (jsx("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", ...props, children: jsx("g", { id: "a4eeb8a9fabfb6311bda06544ff7deb6", children: jsx("g", { id: "ecbb2d383ece0e1cfbc07916089d0e41", children: jsx("path", { id: "dd87386d6e8841fbfe07f4ed9113b8b0", d: "M1.33325 28.0001H30.6666L15.9999 2.66675L1.33325 28.0001ZM17.3333 24.0001H14.6666V21.3334H17.3333V24.0001ZM17.3333 18.6667H14.6666V13.3334H17.3333V18.6667Z" }) }) }) }));

var SVG = /*#__PURE__*/Object.freeze({
__proto__: null,
Add: SvgAdd,
ArrowForward: SvgArrowForward,
Check: SvgCheck,
CheckboxDeselected: SvgCheckboxDeselected,
CheckboxIndeterminate: SvgCheckboxIndeterminate,
CheckboxSelected: SvgCheckboxSelected,
ChevronDown: SvgChevronDown,
ChevronUp: SvgChevronUp,
Close: SvgClose,
DateRange: SvgDateRange,
Delete: SvgDelete,
Edit: SvgEdit,
Email: SvgEmail,
Event: SvgEvent,
Favorite: SvgFavorite,
Group: SvgGroup,
Home: SvgHome,
Info: SvgInfo,
Message: SvgMessage,
MoreVert: SvgMoreVert,
Notification: SvgNotification,
Payment: SvgPayment,
RadioButtonDeselected: SvgRadioButtonDeselected,
RadioButtonSelected: SvgRadioButtonSelected,
Search: SvgSearch,
Send: SvgSend,
Today: SvgToday,
Upload: SvgUpload,
VisibilityOff: SvgVisibilityOff,
VisibilityOn: SvgVisibilityOn,
Warning: SvgWarning
});

const SVGName = Object.keys(SVG);
const svgName = Object.keys(SVG);
const SVGIcons = mergeAll(SVGName.map((svg) => ({ [`${svg}`]: SVG[svg] })));
const Icon = ({ type, ...rest }) => {
    const { classNames, ...restProps } = twSvg(rest);
    const SvgIcon = SVGIcons[type];
    return SvgIcon ? jsx(SvgIcon, { className: classNames, ...restProps }) : jsx(Fragment$1, {});
};

const buildButtonStyle = (type, size, outline, theme) => {
    const sizeStyle = (() => {
        switch (size) {
            case 'large':
                return {
                    ...theme.typography['content-500'],
                    $padding: {
                        x: '4',
                        y: '3',
                    },
                    $gap: 'x-1',
                    $borderRadius: 'md',
                };
            case 'medium':
                return {
                    ...theme.typography['content-400'],
                    $padding: {
                        x: '3',
                        y: '2',
                    },
                    $gap: 'x-1',
                    $borderRadius: 'md',
                };
            case 'small':
                return {
                    ...theme.typography['content-300'],
                    $padding: {
                        x: '2',
                        y: '2',
                    },
                    $gap: 'x-0.5',
                    $borderRadius: 'rounded',
                };
            default:
                throw new Error(`Illegal parameter error, expected the button type to be large, medium or small, but got ${size}`);
        }
    })();
    const typeStyle = (() => {
        switch (type) {
            case 'primary':
                return !outline
                    ? {
                        $bgColor: 'primary',
                        hover$bgColor: 'primary-600',
                        $textColor: 'neutral-100',
                        $borderWidth: '2',
                        $borderColor: 'primary',
                    }
                    : {
                        $bgColor: 'primary-100',
                        hover$bgColor: 'primary-200',
                        $textColor: 'primary-600',
                        $borderWidth: '2',
                        $borderColor: 'primary-600',
                    };
            case 'secondary':
                return !outline
                    ? {
                        $bgColor: 'neutral-600',
                        hover$bgColor: 'neutral-700',
                        $textColor: 'neutral-100',
                    }
                    : {
                        $bgColor: 'neutral-100',
                        hover$bgColor: 'neutral-200',
                        $textColor: 'neutral-600',
                        $borderWidth: '2',
                        $borderColor: 'neutral-600',
                    };
            default:
                throw new Error('Illegal parameter error, expected the button type to be primary, secondary, but got ' +
                    type);
        }
    })();
    return mergeAll([sizeStyle, typeStyle]);
};
const buildIconStyle = (type, size, outline, theme) => {
    const lineHeight = (() => {
        switch (size) {
            case 'large':
                return theme.typography['content-500'].$lineHeight;
            case 'medium':
                return theme.typography['content-400'].$lineHeight;
            case 'small':
                return theme.typography['content-300'].$lineHeight;
            default:
                throw new Error(`Illegal parameter error, expected the button type to be large, medium or small, but got ${size}`);
        }
    })();
    const iconHeight = predicateHeight(lineHeight);
    const iconStyle = (() => {
        switch (type) {
            case 'primary':
                return outline
                    ? {
                        $fill: 'primary-600',
                    }
                    : {
                        $fill: 'neutral-100',
                    };
            case 'secondary':
                return outline
                    ? {
                        $fill: 'neutral-600',
                    }
                    : {
                        $fill: 'neutral-100',
                    };
            default:
                throw new Error('Illegal parameter error, expected the button type to be primary, secondary, but got ' +
                    type);
        }
    })();
    return mergeAll([
        iconStyle,
        { $height: iconHeight },
    ]);
};
const Button = forwardRef(({ children, type = 'primary', size = 'medium', outline = false, submit = false, leftIcon, rightIcon, ...restProps }, ref) => {
    const theme = useTheme();
    const buttonStyle = useMemo(() => {
        return buildButtonStyle(type, size, outline, theme);
    }, [theme, type, size, outline]);
    const iconStyle = useMemo(() => buildIconStyle(type, size, outline, theme), [theme, type, size, outline]);
    const leftIconContent = leftIcon && (jsx(Icon, { type: leftIcon, ...iconStyle }));
    const rightIconContent = rightIcon && (jsx(Icon, { type: rightIcon, ...iconStyle }));
    /**
     * hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
     */
    return (jsx(Button$1, { ...buttonStyle, ...restProps, type: submit ? 'submit' : 'button', "focus$outlineWidth": "none", "focus$ringWidth": "2", "focus$ringOffsetWidth": "2", "focus$ringColor": "primary", "$width": "fit", ref: ref, children: jsxs(Box, { "$flex": "initial", inline: true, children: [leftIconContent, children, rightIconContent] }) }));
});

const Card = forwardRef(({ data, children, actions, style = (_) => ({}), ...props }, ref) => {
    const theme = useTheme();
    const defaultControlStyleProps = {
        $borderWidth: 'border',
        $borderRadius: 'md',
        $borderColor: 'neutral-200',
        $bgColor: 'white',
    };
    const titleStyle = theme.typography['title-500'];
    const subtitleStyle = theme.typography['subtitle-400'];
    const contentStyle = theme.typography['content-400'];
    const { classNames, ...restProps } = useMemo(() => twClass(Object.assign(defaultControlStyleProps, props)), [props]);
    const extraNode = useMemo(() => {
        if (!data.extra)
            return jsx(Fragment$1, {});
        if (typeof data.extra === 'string') {
            return jsx(Text, { ...subtitleStyle, children: data.extra });
        }
        return jsx(Fragment$1, { children: data.extra });
    }, [data.extra]);
    const customizedStyle = useMemo(() => {
        return style(data);
    }, [style]);
    return (jsxs(Section, { className: classNames, "$direction": "col", "$gap": "4", ...restProps, ...customizedStyle.border, ref: ref, children: [jsxs(Header, { "$direction": "row", "$justifyContent": "between", "$alignItems": "end", "$borderWidth": { bottom: 'border-b' }, "$borderColor": "neutral-200", "$padding": {
                    x: '4',
                    y: '2',
                }, "sm$padding": {
                    x: '3',
                }, ...customizedStyle.header, children: [jsxs(Box, { "$direction": "col", "$gap": "x-2", "md$direction": "row", children: [jsxs(H2, { ...titleStyle, children: [data.title, jsx("span", { className: "sr-only", children: data.extra })] }), jsx(Text, { ...subtitleStyle, role: "doc-subtitle", children: data.subtitle })] }), jsx(Box, { children: extraNode })] }), jsxs(Section, { "$direction": "col", "$gap": "8", "$padding": {
                    x: '4',
                    y: '2',
                }, "sm$padding": {
                    x: '3',
                }, ...customizedStyle.main, children: [jsx(Text, { ...contentStyle, children: data.description }), children] }), jsx(Footer, { "$justifyContent": "end", "$padding": {
                    bottom: '2',
                    x: '4',
                }, "sm$padding": {
                    x: '3',
                }, ...customizedStyle.footer, children: actions })] }));
});

const CardButton = forwardRef(({ icon, label, description, style, ...restProps }, ref) => {
    const theme = useTheme();
    const labelStyle = theme.typography['caption-500'];
    const descStyle = theme.typography['caption-300'];
    return (jsx(Button$1, { ...style, ...restProps, "$padding": "2", ref: ref, children: jsxs(Box, { "$direction": "row", "$gap": "6", "$alignItems": "center", children: [jsx(Box, { "$bgColor": "info-400", "$borderRadius": "full", "$width": "10", "$height": "10", "$padding": "1.5", children: jsx(Icon, { type: icon, "$fill": "neutral-600", "$height": "8", "$width": "8" }) }), jsxs(Box, { "$direction": "col", children: [jsx(Text, { ...descStyle, children: description }), jsx(Text, { ...labelStyle, children: label })] })] }) }));
});

const beStyleAttrTree = (props) => {
    const restProps = {};
    const attrsTree = Object.keys(props).reduce((prev, curr) => {
        if (!detectBeStyleAttributes(curr)) {
            restProps[curr] = props[curr];
            return prev;
        }
        const pseudoAttrName = curr.split('$');
        const attrName = pseudoAttrName.pop();
        const tAttrName = `$${attrName}`;
        let node = prev;
        while (pseudoAttrName.length > 0) {
            const pseudo = pseudoAttrName.shift();
            if (pseudo) {
                if (!node[pseudo]) {
                    node[pseudo] = {};
                }
                node = node[pseudo];
            }
        }
        node[tAttrName] = props[curr];
        return prev;
    }, {});
    return { attrsTree, ...restProps };
};
/**
 *
 * @param obj:
 * @param transformMap:
 * @returns
 */
const transformObject = (obj, transformMap) => {
    function traverse(obj, transformMap) {
        return R.mergeAll(Object.keys(obj).map((key) => {
            const value = obj[key];
            const transformFn = transformMap[key];
            if (transformFn) {
                return transformFn(value, key);
            }
            if (typeof value === 'object') {
                return { [key]: traverse(value, transformMap) };
            }
            return { [key]: value };
        }));
    }
    return traverse(obj, transformMap);
};
const beStyle = (attrsTree, uiTheme) => {
    const transformerMap = getTransformerMap();
    const rst = transformObject(attrsTree, transformerMap);
    return flattenObject(rst);
};
const pickupProps = (props, ...attrNames) => {
    const results = {};
    const rest = {};
    Object.keys(props).forEach((key) => attrNames.find((attr) => key.indexOf(attr) !== -1)
        ? (results[key] = props[key])
        : (rest[key] = props[key]));
    return { pickup: results, ...rest };
};
/**
 * private
 */
function detectBeStyleAttributes(attrName) {
    return attrName?.indexOf('$a__') !== -1 || attrName?.indexOf('$c__') !== -1;
}
function flattenObject(obj, separator = '$') {
    const result = {};
    function flatten(obj, currentKey) {
        Object.keys(obj).forEach((key) => {
            const value = obj[key];
            const newKey = currentKey
                ? `${currentKey}${key.indexOf(separator) !== -1 ? '' : separator}${key}`
                : key;
            if (typeof value === 'object') {
                flatten(value, newKey);
            }
            else {
                result[newKey] = value;
            }
        });
    }
    flatten(obj, '');
    return result;
}
function getTransformerMap(Theme) {
    return {
        $c__resize: (resize) => {
            if (!resize) {
                return {};
            }
            switch (resize) {
                case 'auto':
                    /**
                     * {
                     * md$flexBasis: 'auto',
                     * md$flexBasis: 'content,
                     * md$flex
                     * }
                     */
                    return {
                        $flexBasis: 'auto',
                    };
                case 'hugContent':
                    return {
                        $flexBasis: 'content',
                    };
                case 'fillContainer':
                    return {
                        $flexBasis: 'full',
                    };
            }
        },
        $a__vertical: (value) => {
            if (value) {
                return {
                    $direction: 'col',
                };
            }
            else {
                return {
                    $direction: 'row',
                    $gap: 'x-4',
                };
            }
        },
        $a__center: (value) => {
            if (value) {
                return {
                    $width: 'full',
                    $margin: {
                        x: 'auto',
                    },
                };
            }
            return {};
        },
        /**
         * block:
         * {
         * sm$direction: 'col'
         * sm$alignItems: 'start'
         * sm$direction: 'row'
         * sm$alignItems: 'baseline'
         * sm$gap: 'x-2'
         * md$direction: 'col'
         * md$alignItems: 'start'
         * md$direction: 'row'
         * md$alignItems: 'baseline'
         * md$gap: 'x-2'
         * lg$direction: 'col'
         * lg$alignItems: 'start'
         * lg$direction: 'row'
         * lg$alignItems: 'baseline'
         * lg$gap: 'x-2'
         * xl$direction: 'col'
         * xl$alignItems: 'start'
         * xl$direction: 'row'
         * xl$alignItems: 'baseline'
         * xl$gap: 'x-2'
         * xl2$direction: 'col'
         * xl2$alignItems: 'start'
         * xl2$direction: 'row'
         * xl2$alignItems: 'baseline'
         * xl2$gap: 'x-2'
         *
         *
         *
         * }
         * @param value
         * @returns
         */
        $a__display: (value) => {
            switch (value) {
                case 'block':
                    return {
                        $direction: 'col',
                        $alignItems: 'start',
                    };
                case 'inline':
                    return {
                        $direction: 'row',
                        $alignItems: 'baseline',
                        $gap: 'x-2',
                    };
                default:
                    throw new Error(`illegal $a__display ${value}`);
            }
        },
    };
}

var Checkbox = forwardRef((props, forwardedRef) => {
    const { pickup, ...rest } = pickupProps(props, '$a__display', '$a__reverse');
    const { attrsTree: contentAttrs } = beStyleAttrTree(Object.assign({ $a__display: 'block', $a__reverse: false }, pickup));
    const theme = useContext(ThemeContext);
    const contentsStyle = beStyle(contentAttrs);
    const { attrsTree, ...restProps } = beStyleAttrTree(rest);
    const style = beStyle(attrsTree);
    const { id, name, value, label, description, indeterminate, ...checkboxProps } = restProps;
    const rId = id || `${name}_${value}`;
    const captionTypo = theme.typography[theme['ui'].caption];
    const descriptionTypo = theme.typography[theme['ui'].description];
    const inputRef = useRef(null);
    const itemRef = useSyncRefs(forwardedRef, inputRef);
    useEffect(() => {
        if (!inputRef.current)
            return;
        if (indeterminate === undefined || indeterminate === null)
            return;
        inputRef.current.indeterminate = indeterminate;
    }, [indeterminate, inputRef.current]);
    const checkboxHeight = useMemo(() => {
        const typo = captionTypo;
        return predicateHeight(typo.$lineHeight, typo.$fontSize);
    }, [theme, captionTypo]);
    const contents = [
        jsx(Box, { "$height": checkboxHeight, "$alignItems": "center", children: jsx(Input$1, { id: rId, type: "checkbox", "$borderRadius": "rounded", "$borderColor": "neutral-300", "$textColor": "primary", "$cursor": "pointer", name: name, value: value, ...checkboxProps, ref: itemRef }) }, `${rId}_input`),
        jsxs(Box, { ...contentsStyle, ...captionTypo, children: [label && (jsx(Label, { htmlFor: rId, "$cursor": "pointer", children: label })), description && jsx(Text, { ...descriptionTypo, children: description })] }, `${rId}_label`),
    ];
    return (jsx(Box, { "$direction": "row", "$gap": "x-2", "$justifyItems": "start", "$alignItems": "start", ...style, children: contentsStyle.$a__reverse ? contents.reverse() : contents }));
});

const CheckboxGroup = (props) => {
    useContext(ThemeContext);
    const { pickup, ...rest } = pickupProps(props, '$a__display', '$a_reverse');
    const { attrsTree, ...secondRest } = beStyleAttrTree(rest);
    const { classNames, ...finalRest } = twClass(secondRest);
    const styles = beStyle(attrsTree);
    const { name, options, value } = finalRest;
    const __options = R.map((option) => {
        return (jsx(Checkbox, { name: name, value: option.value, label: option.label, description: option.description, ...pickup }, `${name}_${option.label}`));
    })(options || []);
    return (jsx(Box, { ...styles, className: classNames, "$flexWrap": "wrap", "$height": "auto", children: __options }));
};

const LinearProgress = ({ progress = 0, ...props }) => {
    // return (
    //     <div className="bg-neutral-200 h-2 w-full rounded-full overflow-hidden">
    //         <div
    //             className="bg-primary-400  h-2 rounded-full"
    //             style={{ width: '50%' }}
    //         ></div>
    //     </div>
    // )
    return (jsx(Div, { "$bgColor": "neutral-200", "$height": "2", "$width": "full", "$borderRadius": "full", "$overflow": "hidden", children: jsx(Div, { "$bgColor": "primary-400", "$height": "2", "lg$borderRadius": "full", style: {
                width: progress * 100 + '%',
            } }) }));
};

const FileUploader = forwardRef(({ onFileAccepted = (files) => { }, disabled = false, ...props }, ref) => {
    const theme = useTheme();
    const captionStyle = theme.typography[theme.ui.caption];
    const iconHeight = predicateHeight(captionStyle.$lineHeight);
    const onDrop = (acceptFiles) => {
        onFileAccepted(acceptFiles);
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });
    const textStyle = (disabled) => {
        return disabled
            ? {
                ...captionStyle,
                $textColor: theme.ui.text.disabled.$textColor,
            }
            : captionStyle;
    };
    const rootProps = disabled ? {} : getRootProps({ className: 'dropzon' });
    const inputProps = getInputProps();
    const cursorStyle = disabled
        ? {}
        : { $cursor: 'pointer' };
    return (jsxs(Box, { ...rootProps, ...props, children: [jsx(Input$1, { ...inputProps, ref: ref }), jsxs(Box, { "$direction": "col", "$justifyContent": "center", "$alignItems": "center", "$width": "full", "$height": "full", "$borderRadius": "md", "$borderWidth": "2", "$borderColor": "neutral-300", "$borderStyle": "dashed", "hover$borderColor": "primary-300", ...cursorStyle, children: [jsx(Text, { ...textStyle(disabled), children: "\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7" }), jsx(Text, { ...textStyle(disabled), children: "\u3082\u3057\u304F\u306F\u3053\u3053\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }), jsx(Icon, { type: "Upload", "$width": iconHeight, "$height": iconHeight, "$fill": textStyle(disabled).$textColor })] })] }));
});

var FileUploadStatus;
(function (FileUploadStatus) {
    FileUploadStatus[FileUploadStatus["prepared"] = 0] = "prepared";
    FileUploadStatus[FileUploadStatus["loading"] = 1] = "loading";
    FileUploadStatus[FileUploadStatus["parseError"] = 2] = "parseError";
    FileUploadStatus[FileUploadStatus["completed"] = 4] = "completed";
    FileUploadStatus[FileUploadStatus["failed"] = 8] = "failed";
})(FileUploadStatus || (FileUploadStatus = {}));
const CSVFileUploader = ({ option, consumer, onFileUploadStart, onFileUploadCompleted, consumerName, ...props }) => {
    const theme = useTheme();
    const [data, setData] = useState(null);
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState(FileUploadStatus.prepared);
    const [parseError, setParseError] = useState(null);
    const [beforeError, setBeforeError] = useState(null);
    const [completedError, setCompletedError] = useState(null);
    const reset = () => {
        setData(null);
        setFile(null);
        setParseError(null);
        setStatus(FileUploadStatus.prepared);
    };
    const onFiles = useCallback((file) => {
        const reader = new FileReader();
        if (!file || file.length < 1) {
            console.log('empty file');
            return;
        }
        setFile(file[0]);
        reader.readAsText(file[0]);
        reader.onload = async () => {
            const csvString = reader.result;
            if (!csvString) {
                console.log(`empty file`);
                return;
            }
            const parseResult = parse(csvString, {
                header: true,
                skipEmptyLines: true,
            });
            if (parseResult.errors.length > 0) {
                setParseError(parseResult.errors);
                setStatus(FileUploadStatus.parseError);
                return;
            }
            setStatus(FileUploadStatus.loading);
            if (!!onFileUploadStart) {
                try {
                    await onFileUploadStart(data);
                }
                catch (err) {
                    setBeforeError(err.message || '');
                }
            }
            setData(parseResult.data);
        };
        reader.onprogress = (e) => { };
        reader.onerror = (err) => {
            console.log(err);
        };
        reader.onabort = (abortEvt) => {
            console.log(abortEvt);
        };
    }, []);
    const { processed, errors } = useStream(data, option, consumer, consumerName);
    useEffect(() => {
        if ((errors && errors.length > 0) ||
            beforeError !== null ||
            completedError !== null) {
            setStatus(FileUploadStatus.failed);
        }
        else if (processed === data?.length) {
            setStatus(FileUploadStatus.completed);
        }
    }, [processed, beforeError, completedError, errors]);
    useEffect(() => {
        let timeoutHandler;
        if (status === FileUploadStatus.completed) {
            timeoutHandler = setTimeout(reset, 3000);
        }
        return () => {
            if (timeoutHandler) {
                clearTimeout(timeoutHandler);
            }
        };
    }, [status]);
    useEffect(() => {
        if (status === FileUploadStatus.completed ||
            status === FileUploadStatus.failed) {
            if (!!onFileUploadCompleted) {
                onFileUploadCompleted(data);
            }
        }
    }, [status]);
    const errorContents = useMemo(() => {
        return (jsxs(Fragment$1, { children: [jsxs(H3, { ...theme.ui.error.title, children: ["Oops: \u30D5\u30A1\u30A4\u30EB\uFF08", file?.name || '', "\uFF09\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u3042\u308A\u307E\u3057\u305F\u3002", jsx(Button, { type: "secondary", onClick: reset, size: "small", outline: true, children: "\u30EA\u30C8\u30E9\u30A4" })] }), jsxs(UL, { ...theme.ui.error.content, children: [beforeError !== null && (jsxs(LI, { children: ["\u30D5\u30A1\u30A4\u30EB\u30ED\u30FC\u30C9\u306E\u524D\u51E6\u7406\u306B\u30A8\u30E9\u30FC\u304C\u3042\u308A\u307E\u3057\u305F(", beforeError, ")"] }, "before_load_error")), completedError !== null && (jsxs(LI, { children: ["\u30D5\u30A1\u30A4\u30EB\u30ED\u30FC\u30C9\u306E\u5F8C\u51E6\u7406\u306B\u30A8\u30E9\u30FC\u304C\u3042\u308A\u307E\u3057\u305F(", completedError, ")"] }, "completed_load_error")), errors.map((err, idx) => {
                            return jsx(LI, { children: err }, `err_${idx}`);
                        })] })] }));
    }, [errors, beforeError, completedError]);
    const counter = processed && processed > 0 ? `${processed} / ${data?.length}` : '';
    return (jsx(Box, { "$direction": "col", "$gap": "1", children: jsxs(Fragment$1, { children: [jsx(FileUploader, { ...props, onFileAccepted: onFiles, disabled: status !== FileUploadStatus.prepared }), parseError && (jsxs(Box, { "$direction": "col", "$gap": "1", children: [jsxs(H3, { ...theme.ui.error.title, children: ["Oops: CSV\u30D1\u30FC\u30B9\u30A8\u30E9\u30FC:", ' ', jsx(Button, { type: "secondary", onClick: reset, size: "small", outline: true, children: "\u30EA\u30C8\u30E9\u30A4" })] }), jsx(UL, { ...theme.ui.error.content, children: parseError.map((err) => {
                                return (jsx(LI, { children: err.message }, `${err.code}`));
                            }) })] })), !!(status &&
                    FileUploadStatus.loading | FileUploadStatus.completed) && (jsxs(Fragment$1, { children: [jsxs(H3, { ...theme.typography[theme.ui.caption], children: ["\u30D5\u30A1\u30A4\u30EB\uFF08 ", file?.name || '', "\uFF09\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D", counter] }), jsx(LinearProgress, { progress: processed != null && data != null
                                ? processed / data.length
                                : 0 })] })), status === FileUploadStatus.failed && errorContents] }) }));
};

const nodes = {
    H1: H1,
    H2: H2,
    H3: H3,
    H4: H4,
    H5: H5,
};
const Heading = ({ children, title, as = 'H1' }) => {
    const theme = useTheme();
    const sectionTextStyles = {
        H1: theme.typography['title-600'],
        H2: theme.typography['title-500'],
        H3: theme.typography['title-400'],
        H4: theme.typography['title-300'],
        H5: theme.typography['title-200'],
    };
    const sectionNode = createElement(nodes[as], { ...sectionTextStyles[as] }, title);
    return (jsxs(Box, { "$justifyContent": "between", "$alignItems": "end", "$borderWidth": { bottom: '2' }, "$borderColor": "neutral-300", "$padding": { bottom: '2' }, children: [sectionNode, children] }));
};

const Input = forwardRef((props, ref) => {
    const { type = 'text', name, label, placeholder = '', $a__vertical = false, errors, ...restProps } = props;
    const [err, setErr] = useState(errors);
    useEffect(() => {
        setErr(errors);
    }, [errors]);
    const theme = useTheme();
    const captionStyle = theme.typography[theme.ui.caption];
    const errStyle = useMemo(() => err
        ? {
            $borderColor: 'error-300',
            $textColor: 'error-900',
            $placeholderColor: 'error-300',
            focus$borderColor: 'error-500',
            focus$ringColor: 'error-500',
        }
        : {}, [err]);
    const errMsgStyle = {
        ...captionStyle,
        $textColor: 'error-900',
    };
    const errAriaAttrs = useMemo(() => err
        ? {
            ['aria-invalid']: true,
            ['aria-describedby']: `${name}-error`,
        }
        : {}, [err]);
    const inputStyle = useMemo(() => ({
        $display: 'block',
        // $width: 'full',
        $borderRadius: 'md',
        $borderColor: 'neutral-300',
        $padding: {
            right: '10',
        },
        focus$outline: 'none',
        focus$borderColor: 'primary-500',
        focus$ringColor: 'primary-500',
    }), []);
    const arrangement = useMemo(() => $a__vertical
        ? {
            $direction: 'col',
            $gap: 'y-2',
        }
        : {
            $direction: 'row',
            $gap: 'x-2',
        }, []);
    return (jsxs(Box, { ...arrangement, "$width": "full", "$flex": "initial", "$justifyItems": "stretch", children: [jsx(Label, { htmlFor: name, "$width": "fit", ...captionStyle, children: label }), jsxs(Box, { "$direction": "col", "$gap": "0.5", children: [jsx(Input$1, { type: type, name: name, id: name, placeholder: placeholder, ...inputStyle, ...errStyle, ...errAriaAttrs, ...restProps, ref: ref }), err && err.message && (jsx(Text, { ...errMsgStyle, children: err.message }))] })] }));
});

const __HeadlessMenu = ({ children, ...props }) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx(Menu$1, { as: "div", className: classNames, ...restProps, children: children }));
};
const HeadlessMenuButton = ({ children, ...props }) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx(Menu$1.Button, { className: classNames, ...restProps, children: children }));
};
const HeadlessMenuItems = React.forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = twClass(props);
    return (jsx(Menu$1.Items, { className: classNames, ...restProps, ref: ref, children: children }));
});
const HeadlessMenu = Object.assign(__HeadlessMenu, {
    Button: HeadlessMenuButton,
    Items: HeadlessMenuItems,
});

const MenuItem = ({ label, iconType, type = 'Button', }) => {
    const theme = useContext(ThemeContext);
    const { caption } = theme.ui;
    const captionStyle = theme.typography[caption];
    const lineHeight = predicateHeight(captionStyle.$lineHeight, captionStyle.$fontSize);
    const menuStyle = (active, uiTheme) => {
        return active ? uiTheme.ui.text.active : uiTheme.ui.text.inactive;
    };
    const iconStyle = (active, uiTheme) => {
        return active ? uiTheme.ui.icon.active : uiTheme.ui.icon.inactive;
    };
    const itemContent = useCallback((active, theme, type) => {
        return (jsxs(Box, { "$direction": "row", "$alignItems": "center", "$padding": "2", ...captionStyle, ...menuStyle(active, theme), children: [iconType && (jsx(Icon, { type: iconType, "$width": lineHeight, "$height": lineHeight, "$padding": "1", ...iconStyle(active, theme) })), label && jsx(Text, { children: label })] }));
    }, [iconType, lineHeight, captionStyle]);
    return (jsx(Menu$1.Item, { children: ({ active }) => {
            if (type === 'Button') {
                return jsx(Button$1, { children: itemContent(active, theme, type) });
            }
            if (type === 'Link') {
                return (jsx(Link, { href: "#", children: itemContent(active, theme, type) }));
            }
            return jsx(Fragment$1, {});
        } }));
};

const Menu = ({ label, items }) => {
    const menuItems = items.map((item) => {
        return jsx(MenuItem, { ...item }, `${item.label}_${item.iconType}`);
    });
    return (jsx(Box, { children: jsxs(HeadlessMenu, { children: [jsxs(HeadlessMenu.Button, { "$display": "inline-flex", "$justifyContent": "center", "$alignItems": "center", "$borderRadius": "md", "$padding": { x: '4', y: '2' }, "$textColor": "neutral-700", "$fontWeight": "semibold", "$fontSize": "sm", "hover$bgColor": "primary-300", "focus$ringWidth": "2", "focus$ringColor": "primary-500", "focus$ringOffsetWidth": "2", "focusVisible$ringWidth": "2", "focusVisible$ringColor": "ext-white", "focusVisible$ringOffsetWidth": "2", children: [label && jsx(Text, { children: label }), jsx(Icon, { type: "MoreVert", "$fill": "neutral-700" })] }), jsx(Box, { "$position": "relative", "$direction": "col", children: jsx(Transition, { as: Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: jsx(HeadlessMenu.Items, { "$position": "absolute", "$left": "1", "$zIndex": "10", "$margin": { top: '2' }, "$padding": { x: '10', y: '12' }, "$width": "56", "$transformOrigin": "top-left", "$borderRadius": "md", "$bgColor": "neutral-100", "$shadow": "lg", "$ringWidth": "1", "$ringColor": "ext-black", "focus$outlineWidth": "none", children: jsx(Box, { "$direction": "col", children: menuItems }) }) }) })] }) }));
};

const Navigation = forwardRef(({ items, activeItemIndex }, ref) => {
    const theme = useContext(ThemeContext);
    const captionTypo = theme.typography[theme['ui'].caption];
    const iconHeight = useMemo(() => {
        const typo = captionTypo;
        return predicateHeight(typo.$lineHeight, typo.$fontSize);
    }, [theme, captionTypo]);
    // const [currentActiveItemIndex, setCurrentActiveItemIndex] =
    //     useState<number | null>(activeItemIndex)
    // const clickHandler = (idx: number) => {
    //     return () => setCurrentActiveItemIndex(idx)
    // }
    const inRouterContext = useInRouterContext();
    const itemContents = useMemo(() => items.map((item, idx) => {
        const visibility = (active) => active
            ? {
                $display: 'inline',
            }
            : {
                $display: 'hidden',
                md$display: 'inline',
            };
        const activeStyle = (active) => active
            ? {
                $borderWidth: 'b-2',
                $borderColor: 'primary-500',
                $bgColor: 'primary-200',
                $textColor: 'neutral-600',
            }
            : { $textColor: 'neutral-500' };
        const iconStyle = (active) => active
            ? {
                $fill: 'neutral-600',
            }
            : { $fill: 'neutral-400' };
        const LinkElement = useMemo(() => {
            if (inRouterContext) {
                return ({ children, href, ...props }) => (jsx(Link$1, { to: href, ...props, children: children }));
            }
            return ({ children, href, ...props }) => (jsx(Link, { href: href, ...props, children: children }));
        }, [inRouterContext]);
        return (jsx(List.Item, { children: ({ active, selected }) => (jsx(LinkElement, { href: item.href, tabIndex: 0, children: jsxs(Box, { "$alignItems": "center", "$cursor": "pointer", "$borderRadius": {
                        top: 'md',
                        bottom: 'none',
                    }, "focus$ringWidth": "2", "focus$ringOffsetWidth": "2", "focus$ringColor": "primary", "focusVisible$outlineWidth": "1", "focusVisible$outlineColor": "primary-200", "focus$outlineWidth": "0", ...activeStyle(active || selected), "$direction": "row", "$padding": { x: '3', y: '2' }, children: [item.iconType && (jsx(Icon, { type: item.iconType, "$height": iconHeight, ...iconStyle(active || selected) })), jsx(Text, { ...visibility(active), children: item.label })] }) })) }, `${item.name}`));
    }), [items]);
    return (jsx(List, { selectedItemIndex: activeItemIndex, children: jsx(Box, { "$direction": "row", children: itemContents }) }));
});

const Spinner = () => {
    return (jsx("div", { className: "flex justify-center", children: jsx("div", { className: "animate-spin h-4 w-4 border-2 border-primary-500 rounded-full border-t-transparent" }) }));
};

const NumInfo = forwardRef(({ num, precision = 2, description = '', actions, loading = false, ...props }, ref) => {
    const theme = useTheme();
    const numStyle = theme.typography['caption-900'];
    const descriptionStyle = theme.typography['caption-300'];
    const { classNames, style = {}, ...restProps } = useMemo(() => twClass(props), [props]);
    const precisedNum = (num, precision) => {
        const max = 10 ** precision - 1;
        return num > max ? max.toString() + '+' : num.toString();
    };
    return (jsxs(Section, { className: classNames, "$gap": "4", "$padding": "4", "$alignItems": "start", "$justifyContent": "center", "$maxWidth": "xs", "$width": "fit", "$borderRadius": "md", ...style, ...restProps, ref: ref, children: [loading ? (jsx(Spinner, {})) : (jsx(Text, { ...numStyle, children: precisedNum(num, precision) })), jsxs(Box, { "$direction": "col", "$gap": "2", "$alignItems": "end", children: [jsx(H3, { ...descriptionStyle, children: description }), actions] })] }));
});

const Panel = ({ show, children, ...props }) => {
    return (jsx(Transition, { show: show, enter: "transition-opacity duration-75", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity duration-150", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: jsx(Box, { ...props, children: children }) }));
};

const __Listbox = ({ children, value, ...props }) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx(Listbox, { as: "div", value: value, className: classNames, ...restProps, children: children }));
};
const __ListboxButton = forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    const theme = useTheme();
    const captionTypo = theme.typography[theme.ui.caption];
    return (jsx(Listbox.Button, { className: classNames, "$display": "flex", "$width": "full", "$height": "full", ...restProps, ref: ref, children: ({ open }) => (jsxs(Box, { "$direction": "row", "$justifyContent": "between", "$alignItems": "center", "$width": "full", "$height": "full", children: [jsx(Box, { ...captionTypo, children: children }), jsx(Box, { children: open ? (jsx(Icon, { type: "ChevronUp", "$height": "6", "$width": "6", "$fill": "neutral-400", "aria-hidden": "true" })) : (jsx(Icon, { type: "ChevronDown", "$height": "6", "$width": "6", "$fill": "neutral-400", "aria-hidden": "true" })) })] })) }));
});
const __ListboxOptions = forwardRef(({ children, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    return (jsx(Listbox.Options, { className: classNames, ...restProps, ref: ref, children: children }));
});
const HeadlessSelect = Object.assign(__Listbox, {
    Button: __ListboxButton,
    Options: __ListboxOptions,
});

const SelectOption = ({ name, label, ...props }) => {
    const theme = useTheme();
    theme.ui;
    const captionStyle = theme.typography[theme.ui.caption];
    const { classNames, ...restProps } = useMemo(() => twClass(props), [props]);
    const optionStyle = useCallback((active) => {
        return active ? classNames + ' bg-primary-100' : classNames;
    }, [classNames]);
    const optionContentStyle = useCallback((active, uiTheme) => {
        return active ? uiTheme.ui.text.active : uiTheme.ui.text.inactive;
    }, []);
    const optionContent = useCallback((active, selected, theme) => {
        return (jsxs(Box, { "$direction": "row", "$justifyContent": "between", children: [jsx(Span, { "$display": "block", ...optionContentStyle(active, theme), children: label }), selected && (jsx(Icon, { "$width": "5", "$height": "5", "$fill": captionStyle.$textColor, type: "Check" }))] }));
    }, [label]);
    return (jsx(Listbox.Option, { className: ({ active }) => optionStyle(active), ...restProps, value: { name, label }, children: ({ active, selected }) => optionContent(active, selected, theme) }, name));
};

var SelectMode;
(function (SelectMode) {
    SelectMode[SelectMode["Single"] = 0] = "Single";
    SelectMode[SelectMode["Multi"] = 1] = "Multi";
})(SelectMode || (SelectMode = {}));
const Select = forwardRef(({ data, mode = SelectMode.Single, $width, $minWidth, $bgColor, defaultValue, onChange, ...props }, ref) => {
    useTheme();
    const [selectedData, setSelectedData] = useState(data[0]);
    const onChangeHandler = useCallback((v) => {
        setSelectedData(v);
        onChange && onChange(v);
    }, [onChange]);
    return (jsxs(HeadlessSelect, { defaultValue: defaultValue, onChange: onChangeHandler, multiple: mode === SelectMode.Multi, "$bgColor": "neutral-300", ...props, children: [jsx(HeadlessSelect.Button, { "$width": $width, "$height": "full", children: jsx(Span, { "$display": "block", children: Array.isArray(selectedData)
                        ? selectedData.map((v) => v.label).join(',')
                        : selectedData?.label || '' }) }), jsx(Transition, { as: Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: jsx(HeadlessSelect.Options, { "$position": "absolute", "$margin": { top: '1' }, "$maxHeight": "60", "$width": "max", "$minWidth": $minWidth, "$overflow": "auto", "$borderRadius": "sm", "$padding": { y: '1' }, "$shadow": "lg", "$ringWidth": "1", "$zIndex": "20", "$bgColor": "ext-white", ref: ref, children: data.map((d) => (jsx(SelectOption, { "$minWidth": $minWidth, "$width": "40", "$padding": { x: '2' }, ...d }, d.name))) }) })] }));
});

const Search = forwardRef(({ category, $width, $minWidth, defaultValue = {}, onSearch, ...props }, ref) => {
    const theme = useTheme();
    const inputTextStyle = theme.typography['content-600'];
    const iconHeight = predicateHeight(inputTextStyle.$lineHeight);
    const style = {
        $width: 'full',
        $borderWidth: 'border',
        $borderRadius: 'md',
        $borderColor: 'neutral-300',
        focusWithin$outlineWidth: 'none',
        focusWithin$ringWidth: '2',
        focusWithin$ringOffsetWidth: '2',
        focusWithin$ringColor: 'primary',
    };
    const [searchCriteria, setSearchCriteria] = useState({
        category: defaultValue.category || category?.[0].name,
    });
    const categoryNode = useMemo(() => {
        if (!category)
            return jsx(Fragment$1, {});
        return (jsx(Select, { data: category, defaultValue: defaultValue.category, by: "name", "$width": $width, "$minWidth": $minWidth, "$bgColor": "white-300", "$padding": { left: '2' }, onChange: (data) => {
                setSearchCriteria((criteria) => ({
                    ...criteria,
                    category: data.name, //TODO
                }));
            } }));
    }, [category]);
    const onSearchHandler = useCallback((evt) => {
        evt.preventDefault();
        console.log('====>', searchCriteria, onSearch);
        onSearch && onSearch(searchCriteria);
    }, [onSearch, searchCriteria]);
    const onInputChange = useCallback((e) => {
        e.preventDefault();
        setSearchCriteria((search) => ({
            ...search,
            criteria: e.target.value,
        }));
    }, []);
    const buttonRef = useRef(null);
    const handleKeyDown = useEvent((event) => {
        switch (event.key) {
            // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13
            case Keys.Enter:
                // event.preventDefault()
                event.stopPropagation();
                if (!event.nativeEvent.isComposing) {
                    buttonRef.current?.click();
                }
                break;
        }
    });
    return (jsxs(Box, { ...props, "$direction": "row", ...style, "aria-role": "listbox", children: [categoryNode, jsxs(Stack, { "$width": "full", children: [jsx(Input$1, { "$width": "full", "$padding": { x: '2', y: '1' }, ...inputTextStyle, "focus$outlineWidth": "none", defaultValue: defaultValue.criteria, onChange: onInputChange, onKeyDown: handleKeyDown }), jsx(Stack.Item, { "$bottom": "-1", "$right": "2", children: jsx(Button$1, { onClick: onSearchHandler, ref: buttonRef, children: jsx(Icon, { type: "Search", "$fill": "neutral-300", "$height": iconHeight, "$width": iconHeight }) }) })] })] }));
});

const Textarea = forwardRef(({ id, name, defaultValue, label, icon, rows = 5, rules = {}, $a__vertical = false, disabled, onChange, onSend, ...props }, ref) => {
    const [savedValue, setSavedValue] = useState();
    const { classNames, ...restProps } = twClass(props);
    const dataKey = `${id}_${name}_textarea`;
    const theme = useTheme();
    const captionStyle = theme.typography[theme.ui.caption];
    const inputStyle = theme.typography['content-600'];
    const textAreaLabel = useMemo(() => (jsx(Label, { htmlFor: name, "$width": "max", ...captionStyle, children: label })), [label]);
    const onChangeHandlerFactory = (handler) => (evt) => {
        localStorage.setItem(dataKey, evt.target.value);
        handler && handler(evt);
    };
    useEffect(() => {
        const initialValue = localStorage.getItem(dataKey);
        setSavedValue(initialValue ?? defaultValue);
    }, [defaultValue]);
    const arrangement = useMemo(() => $a__vertical
        ? {
            $direction: 'col',
            $gap: 'y-2',
        }
        : {
            $direction: 'row',
            $gap: 'x-2',
        }, []);
    useState();
    const internalRef = useRef(null);
    const textareaRef = useSyncRefs(ref, internalRef);
    const onClickHandler = useCallback(() => {
        onSend && onSend(internalRef.current?.value);
        localStorage.removeItem(dataKey);
    }, [onSend]);
    // If the value is read from local storage, set disabled = false
    const isDisabled = savedValue !== defaultValue ? false : disabled;
    const iconFill = () => {
        return isDisabled
            ? {
                $fill: 'neutral-400',
            }
            : {
                $fill: 'primary-400',
            };
    };
    return (jsxs(Box, { className: classNames, ...arrangement, children: [label && textAreaLabel, jsxs(Stack, { "$width": "full", children: [jsx(TextArea, { id: id, name: name, cols: 32, rows: rows, "$borderRadius": "md", "$borderColor": "neutral-300", ...inputStyle, "$width": "full", defaultValue: savedValue, ...restProps, onChange: onChangeHandlerFactory(onChange), ref: textareaRef }), icon && (jsx(Stack.Item, { "$bottom": "2", "$right": "2", children: jsx(Button$1, { onClick: onClickHandler, disabled: isDisabled, children: jsx(Icon, { type: icon, "$height": "8", ...iconFill() }) }) }))] })] }));
});

export { Article, Aside, Avatar, Badge, Box, Button, CSVFileUploader, Card, CardButton, Checkbox, CheckboxGroup, Column, Details, Div, Figcaption, Figure, FileUploadStatus, FileUploader, Footer, Grid, H1, H2, H3, H4, H5, Header, Heading, Icon, Image, Input, LI, LinearProgress, Link, List, Main, Mark, Menu, MenuItem, Nav, Navigation, NumInfo, Panel, SVGName, Search, Section, Select, SelectMode, Span, Stack, StreamProcessor, Summary, Text, Textarea, ThemeContext, ThemeProvider, Time, UL, attrsClassNameVisitor, isFunction, svgName, twAttrsTree, twBox, twClass, twColumn, twGrid, twGridItem, twPrefix, twStack, twStackItem, twSvg, twTransfer, useStream, useTheme, walkThroughAttrsTree };
