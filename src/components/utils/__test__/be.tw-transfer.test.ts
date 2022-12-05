import { twTransfer } from '..'
it('negative margin interval className', () => {
    const cn1 = twTransfer.$margin({
        $margin: '2',
    })
    expect(cn1).toBe('m-2')
})

it('axis margin className with x and y', () => {
    const cns = twTransfer.$margin({
        $margin: {
            x: '2',
            y: '4',
        },
    })
    expect(cns).toStrictEqual('mx-2 my-4')
})

it('axis margin className for a negative value', () => {
    const cns = twTransfer.$margin({
        $margin: {
            x: '-2',
            y: '-4',
        },
    })
    expect(cns).toStrictEqual('-mx-2 -my-4')
})

it('axis margin className with top, left, bottom, right', () => {
    const cns = twTransfer.$margin({
        $margin: {
            top: '1',
            right: '2',
            bottom: '3',
            left: '4',
        },
    })
    expect(cns).toStrictEqual('mt-1 mb-3 ml-4 mr-2')
})

it('padding interval className', () => {
    const cn = twTransfer.$padding({
        $padding: '2',
    })
    expect(cn).toBe('p-2')
})

it('axis padding className with x and y', () => {
    const cns = twTransfer.$padding({
        $padding: {
            x: '2',
            y: '4',
        },
    })
    expect(cns).toStrictEqual('px-2 py-4')
})

it('a full border radius', () => {
    const cns = twTransfer.$borderRadius({
        $borderRadius: 'full',
    })
    expect(cns).toStrictEqual('rounded-full')
})

it('a default border radius', () => {
    const cns = twTransfer.$borderRadius({
        $borderRadius: 'rounded',
    })
    expect(cns).toStrictEqual('rounded')
})

it('a box corner radius', () => {
    const cns = twTransfer.$borderRadius({
        $borderRadius: {
            top: 'rounded-t',
            left: 'full',
            right: 'sm',
            bottom: '3xl',
        },
    })
    expect(cns).toStrictEqual(
        'rounded-t rounded-r-sm rounded-b-3xl rounded-l-full',
    )
})

it('a box edge width', () => {
    const cns = twTransfer.$borderWidth({
        $borderWidth: {
            top: 'border-t',
            left: '0',
            bottom: '2',
            right: '4',
        },
    })
    expect(cns).toStrictEqual('border-t border-b-2 border-r-4 border-l-0')
})

it('a special case for the background repeat', () => {
    const cns = twTransfer.$bgRepeat({
        $bgRepeat: 'no-repeat',
    })
    expect(cns).toStrictEqual('bg-no-repeat')
})

it('background gradient', () => {
    const cns = twTransfer.$bgImage({
        $bgImage: {
            gradient: 'r',
            from: 'cyan-900',
            via: 'blue-200',
            to: 'cyan-100',
        },
    })
    expect(
        expect(cns).toStrictEqual(
            'bg-gradient-to-r from-cyan-900 via-blue-200 to-cyan-100',
        ),
    )
})
