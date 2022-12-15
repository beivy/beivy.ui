import { Resize } from '../core/be.core-types'
import { BeTHeightInterval, BeTTypography } from '../core/be.tailwind-types'

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
} as const

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
export function predicateHeight(
    lh: BeTTypography['lineHeight'],
    fs?: BeTTypography['size'],
) {
    const tryNumber = Number(lh)
    if (!Number.isNaN(tryNumber)) return lh as BeTHeightInterval
    if (!fs) return 'auto'
    switch (lh) {
        case 'none':
            return FontSizeChart[fs] || 'auto'
        default:
            //TODO: log warning
            return 'auto'
    }
}

/**
 * {
 *   $direction: "row"
 *   $direction: "row-reverse"
 *   $direction: "col-reverse"
 *   $direction: "col"
 * }
 */
export function getDirection(
    direction: 'vertical' | 'horizontal' | 'inline',
    reverse?: boolean,
) {
    switch (direction) {
        case 'vertical':
            return reverse ? 'col-reverse' : 'col'
        case 'horizontal':
        case 'inline':
            return reverse ? 'row-reverse' : 'row'
        default:
            throw new Error(`Invalid direction: ${direction}`)
    }
}

/**
 * {
 *  $alignItems: 'start'
 *  $alignItems: 'end'
 * }
 */
export function getAlignmentByDirection(
    direction: 'vertical' | 'horizontal' | 'inline',
) {
    switch (direction) {
        case 'vertical':
            return 'start'
        case 'horizontal':
        case 'inline':
            return 'end'
        default:
            throw new Error(`Invalid direction: ${direction}`)
    }
}

export function resizeConstrains(resize?: Resize) {
    if (!resize) {
        return {}
    }
    switch (resize) {
        case 'auto':
            return {
                $flexBasis: 'auto',
            }
        case 'hugContent':
            return {
                $flexBasis: 'content',
            }
        case 'fillContainer':
            return {
                $flexBasis: 'full',
            }
    }
}
