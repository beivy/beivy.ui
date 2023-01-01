import { twBox } from '../'
it('Should return the classNames of flexBox', () => {
    const cn = twBox({
        $direction: 'row-reverse',
        $margin: {
            x: '2',
            y: '4',
        },
    })
    expect(cn.classNames).toStrictEqual('flex flex-row-reverse mx-2 my-4')
})

it('Should return the classNames with pseudo', () => {
    const cn = twBox({
        $direction: 'row-reverse',
        $margin: {
            x: '2',
            y: '4',
        },
        md$direction: 'col',
        md$margin: {
            x: '4',
            y: '8',
        },
    })
    expect(cn.classNames).toStrictEqual(
        'flex flex-row-reverse mx-2 my-4 md:flex-col md:mx-4 md:my-8',
    )
})

it('Should return the classNames with backwards search $direction', () => {
    const cn = twBox({
        $direction: 'col',
        md$space: 'y-4',
    })
    expect(cn.classNames).toStrictEqual('flex flex-col md:space-y-4')
})

it('should return the classNames with pseudo state name need replaced', () => {
    const cn = twBox({
        $direction: 'col',
        focusWithIn$direction: 'row',
    })
    expect(cn.classNames).toStrictEqual('flex flex-col focus-within:flex-row')
})

// it('should return the ')
