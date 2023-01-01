import { Resize } from '@/components/core/be.core-types'
import { beStyle, beStyleAttrTree, transformObject } from '../be.style'

describe('transformObject', () => {
    it('should transform the object according to the transform map', () => {
        const obj = {
            a: 1,
            b: {
                f: {
                    c: 2,
                },
                d: 3,
            },
            e: 4,
        }

        const transformMap = {
            a: (val: any) => ({ a: val * 2 } as any),
            c: (val: any) => ({ c: val * 3 } as any),
            e: (val: any) => ({ e: val * 4 } as any),
        }

        const result = transformObject(obj, transformMap)
        expect(result).toEqual({
            a: 2,
            b: {
                f: {
                    c: 6,
                },
                d: 3,
            },
            e: 16,
        })
    })

    it('should return the original object if no transform map is provided', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 3,
        }

        const result = transformObject(obj, {})

        expect(result).toEqual(obj)
    })

    it('should transform be style attrs tree to tailwind classes', () => {
        const attrsTree = {
            $c__resize: 'fillContainer',
            md: {
                $c__resize: 'hugContent',
            },
        }
        const style = transformObject(attrsTree, {
            $c__resize: (resize?: Resize) => {
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
            },
        })
        const expected = {
            $flexBasis: 'full',
            md: {
                $flexBasis: 'content',
            },
        }
        expect(style).toEqual(expected)
    })
})

describe('beStyle', () => {
    it('build constraints attribute tree', () => {
        const props = {
            a: 'test',
            $c__resize: 'fillContainer',
            md$c__resize: 'hugContent',
        }
        const { attrsTree, ...restProps } = beStyleAttrTree(props)
        const expectedAttrsTree = {
            $c__resize: 'fillContainer',
            md: {
                $c__resize: 'hugContent',
            },
        }
        const expectedRestProps = {
            a: 'test',
        }
        expect(attrsTree).toStrictEqual(expectedAttrsTree)
        expect(restProps).toStrictEqual(expectedRestProps)
    })

    it('should construct the attribute tree and transform it to the tail wind class objects', () => {
        const props = {
            $c__resize: 'fillContainer',
            md$c__resize: 'hugContent',
            md$hover$c__resize: 'fillContainer',
            md$a__display: 'block',
        }
        const { attrsTree } = beStyleAttrTree(props)
        const rst = beStyle(attrsTree, {})
        expect(rst).toEqual({
            $flexBasis: 'full',
            md$flexBasis: 'content',
            md$hover$flexBasis: 'full',
            md$alignItems: 'start',
            md$direction: 'col',
        })
    })
})
