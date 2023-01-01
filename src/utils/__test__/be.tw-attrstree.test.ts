import { twAttrsTree } from '..'
it('should create a tw attr tree', () => {
    const props = {
        $a: 'a',
        md$a: 'md-a',
        md$hover$a: 'md-hover-a',
        noise: 'some noise data',
    }
    const { attrsTree, ...restProps } = twAttrsTree(props)
    const attrs = {
        $a: 'a',
        md: {
            $a: 'md-a',
            hover: {
                $a: 'md-hover-a',
            },
        },
    }
    const removeParentNode = (obj: any) => {
        Object.keys(obj).map((k) => {
            if (typeof obj[k] === 'object' && k !== 'parent') {
                removeParentNode(obj[k])
            }
            if (k === 'parent') {
                delete obj['parent']
            }
        })
        return obj
    }
    expect(attrsTree.md.parent.$a).toBe('a')
    const hover = attrsTree.md.hover
    expect(hover.parent.parent.$a).toBe('a')
    expect(removeParentNode(attrsTree)).toStrictEqual(attrs)
    expect(restProps).toStrictEqual({
        noise: 'some noise data',
    })
})
