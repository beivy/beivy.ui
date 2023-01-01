import * as R from 'ramda'
import { Resize } from '../core/be.core-types'

export const beStyleAttrTree = <T extends object, U = keyof T>(props: T) => {
    const restProps: Partial<T> = {}
    const attrsTree = Object.keys(props).reduce(
        (prev: { [key: string]: any }, curr: string) => {
            if (!detectBeStyleAttributes(curr)) {
                ;(restProps as any)[curr] = (props as any)[curr]
                return prev
            }
            const pseudoAttrName = curr.split('$')
            const attrName = pseudoAttrName.pop()
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
        {},
    )
    return { attrsTree, ...restProps }
}

/**
 *
 * @param obj:
 * @param transformMap:
 * @returns
 */
export const transformObject = <
    T extends Record<string, any>,
    U extends Record<string, any>,
>(
    obj: T,
    transformMap: { [key: string]: (val: any, key: string) => U },
): { [key: string]: any } => {
    function traverse(
        obj: T,
        transformMap: { [key: string]: (val: any, key: string) => U },
    ): { [key: string]: any } {
        return R.mergeAll(
            Object.keys(obj).map((key) => {
                const value = obj[key]
                const transformFn = transformMap[key]
                if (transformFn) {
                    return transformFn(value, key)
                }
                if (typeof value === 'object') {
                    return { [key]: traverse(value, transformMap) }
                }
                return { [key]: value }
            }),
        )
    }

    return traverse(obj, transformMap)
}

export const beStyle = <T extends object>(attrsTree: T, uiTheme: object) => {
    const transformerMap: { [key: string]: (val: any, key: string) => any } =
        getTransformerMap(uiTheme)
    const rst = transformObject(attrsTree, transformerMap)
    return flattenObject(rst)
}

export const pickupProps = <T extends Record<string, any>>(
    props: T,
    ...attrNames: string[]
) => {
    const results: Record<string, any> = {}
    const rest: Record<string, any> = {}
    Object.keys(props).forEach((key) =>
        attrNames.find((attr) => key.indexOf(attr) !== -1)
            ? (results[key] = props[key])
            : (rest[key] = props[key]),
    )
    return { pickup: results, ...(rest as Partial<T>) }
}

/**
 * private
 */

function detectBeStyleAttributes(attrName?: string) {
    return attrName?.indexOf('$a__') !== -1 || attrName?.indexOf('$c__') !== -1
}

function flattenObject<T extends object>(
    obj: T,
    separator = '$',
): { [key: string]: any } {
    const result: { [key: string]: any } = {}

    function flatten(obj: { [key: string]: any }, currentKey: string): void {
        Object.keys(obj).forEach((key) => {
            const value = obj[key]
            const newKey = currentKey
                ? `${currentKey}${
                      key.indexOf(separator) !== -1 ? '' : separator
                  }${key}`
                : key
            if (typeof value === 'object') {
                flatten(value, newKey)
            } else {
                result[newKey] = value
            }
        })
    }

    flatten(obj, '')

    return result
}

function getTransformerMap(Theme: any) {
    return {
        $c__resize: (resize?: Resize) => {
            if (!resize) {
                return {}
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
        },
        $a__vertical: (value: boolean) => {
            if (value) {
                return {
                    $direction: 'col',
                }
            } else {
                return {
                    $direction: 'row',
                    $gap: 'x-4',
                }
            }
        },
        $a__center: (value: boolean) => {
            if (value) {
                return {
                    $width: 'full',
                    $margin: {
                        x: 'auto',
                    },
                }
            }
            return {}
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
        $a__display: (value: string) => {
            switch (value) {
                case 'block':
                    return {
                        $direction: 'col',
                        $alignItems: 'start',
                    } as const
                case 'inline':
                    return {
                        $direction: 'row',
                        $alignItems: 'baseline',
                        $gap: 'x-2',
                    } as const
                default:
                    throw new Error(`illegal $a__display ${value}`)
            }
        },
    }
}
