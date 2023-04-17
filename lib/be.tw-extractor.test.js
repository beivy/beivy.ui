const { twClass, objectMatcherFactory } = require('./utils')
const objectMatcher = objectMatcherFactory()
it('parse a string attribute value separated by =', () => {
    const content = '$margin="3"'
    expect(twClass(content, objectMatcher)).toStrictEqual(['m-3'])
})

it('parse a string attribute value with pseduo class', () => {
    const content = 'focusVisible$ringColor="primary-200"'
    expect(twClass(content, objectMatcher)).toStrictEqual([
        'focus-visible:ring-primary-200',
    ])
})

it('parse a string attribute separated by : ', () => {
    const content = "$textColor: 'neutral-600'"
    expect(twClass(content, objectMatcher)).toStrictEqual(['text-neutral-600'])
})

it('parse a width string attribute value ', () => {
    const content = '$width="1/4"'
    expect(twClass(content, objectMatcher)).toStrictEqual(['w-1/4'])
})

it('parse a attribute value with fraction part ', () => {
    const content = '$gap="1.5"'
    expect(twClass(content, objectMatcher)).toStrictEqual(['gap-1.5'])
})

it('parse a attribute that not to need add prefix', () => {
    const content = '$borderRadius="rounded"'
    expect(twClass(content, objectMatcher)).toStrictEqual(['rounded'])
})

it('parse a theme setting', () => {
    const c1 = "['caption-800']: {"
    const c2 = "	$fontSize: '4xl',"
    const c3 = "$fontWeight: 'medium',"
    const c4 = "$textColor: 'neutral-600',"
    const c5 = "$lineHeight: '10',"
    const c6 = '},'
    expect(twClass(c1, objectMatcher)).toStrictEqual([])
    expect(twClass(c2, objectMatcher)).toStrictEqual(['text-4xl'])
    expect(twClass(c3, objectMatcher)).toStrictEqual(['font-medium'])
    expect(twClass(c4, objectMatcher)).toStrictEqual(['text-neutral-600'])
    expect(twClass(c5, objectMatcher)).toStrictEqual(['leading-10'])
    expect(twClass(c6, objectMatcher)).toStrictEqual([])
})

it('should get an empty array', () => {
    const content = 'return ('
    expect(twClass(content, objectMatcher)).toStrictEqual([])
})

it('parse a string attribute value in the map object', () => {
    const content = "$bgColor: 'ext-red-100'"
    expect(twClass(content, objectMatcher)).toStrictEqual(['bg-ext-red-100'])
})

it('parse a string attribute with pseudo class', () => {
    const content = ' md$direction = "row"'
    expect(twClass(content, objectMatcher)).toStrictEqual(['md:flex-row'])
})

it('parse a string attribute with a nested pseudo class', () => {
    const content = 'md$hover$textColor="gray-100"'
    expect(twClass(content, objectMatcher)).toStrictEqual([
        'md:hover:text-gray-100',
    ])
})

it('parse a react comp', () => {
    const content = '<Box md$direction = "row" $space = "x-2" />'
    expect(twClass(content, objectMatcher)).toStrictEqual([
        'md:flex-row',
        'space-x-2',
    ])
})

it('parse a xl2 pseudo class which need to be replace to 2xl.', () => {
    const content = 'xl2$margin="3"'
    expect(twClass(content, objectMatcher)).toStrictEqual(['2xl:m-3'])
})

it('parse an object attribute ', () => {
    const content_l0 = '		 <Box'
    const content_l1 = '		 $margin = {{'
    const content_l2 = " top: '2',"
    const content_l3 = " bottom: '4',"
    const content_l4 = '}}'
    const content_l5 = '</Box>'
    expect(twClass(content_l0, objectMatcher)).toStrictEqual([])
    expect(twClass(content_l1, objectMatcher)).toStrictEqual([])
    expect(twClass(content_l2, objectMatcher)).toStrictEqual([])
    expect(twClass(content_l3, objectMatcher)).toStrictEqual([])
    expect(twClass(content_l4, objectMatcher)).toStrictEqual(['mt-2', 'mb-4'])
    expect(twClass(content_l5, objectMatcher)).toStrictEqual([])
})

it('parse an object attribute in a single line', () => {
    const content = ' $margin = {{top:"2", bottom:"4"}}'
    expect(twClass(content, objectMatcher)).toStrictEqual(['mt-2', 'mb-4'])
})

it('parse a object attr with multple fields and in multiple lines', () => {
    const c1 = '$margin = {{top:"2",'
    const c2 = 'bottom:"4"}}'
    expect(twClass(c1, objectMatcher)).toStrictEqual([])
    expect(twClass(c2, objectMatcher)).toStrictEqual(['mt-2', 'mb-4'])
})

it('parse a object attr with multple fields and in multiple lines with pseudo class', () => {
    const c1 = 'md$margin = {{top:"2",'
    const c2 = 'bottom:"4"}}'
    expect(twClass(c1, objectMatcher)).toStrictEqual([])
    expect(twClass(c2, objectMatcher)).toStrictEqual(['md:mt-2', 'md:mb-4'])
})

it('parse a padding setting', () => {
    const c1 = '{'
    const c2 = '$padding: {'
    const c3 = 'x: "3",'
    const c4 = 'bottom: "2",'
    const c5 = '}}'
    expect(twClass(c1, objectMatcher)).toStrictEqual([])
    expect(twClass(c2, objectMatcher)).toStrictEqual([])
    expect(twClass(c3, objectMatcher)).toStrictEqual([])
    expect(twClass(c4, objectMatcher)).toStrictEqual([])
    expect(twClass(c5, objectMatcher)).toStrictEqual(['px-3', 'pb-2'])
})

it('parse a padding setting in key-value style', () => {
    const c1 = '$padding = {{'
    const c2 = 'x: "3",'
    const c3 = 'bottom: "2",'
    const c4 = '}}'
    expect(twClass(c1, objectMatcher)).toStrictEqual([])
    expect(twClass(c2, objectMatcher)).toStrictEqual([])
    expect(twClass(c3, objectMatcher)).toStrictEqual([])
    expect(twClass(c4, objectMatcher)).toStrictEqual(['px-3', 'pb-2'])
})

it('parse a object with simple key values and in multiple lines with pseudo class', () => {
    const c1 = '{'
    const c2 = '$margin: "2",'
    const c3 = 'md$margin: "4",'
    const c4 = '}'
    expect(twClass(c1, objectMatcher)).toStrictEqual([])
    expect(twClass(c2, objectMatcher)).toStrictEqual(['m-2'])
    expect(twClass(c3, objectMatcher)).toStrictEqual(['md:m-4'])
    expect(twClass(c4, objectMatcher)).toStrictEqual([])
})

it('parse a object nested with a complex object and in multiple lines with pseudo class', () => {
    const c1 = '{'
    const c2 = '$margin: {'
    const c3 = 'top:		"2",'
    const c4 = 'left: "4",'
    const c5 = '},'
    const c6 = '}'
    expect(twClass(c1, objectMatcher)).toStrictEqual([])
    expect(twClass(c2, objectMatcher)).toStrictEqual([])
    expect(twClass(c3, objectMatcher)).toStrictEqual([])
    expect(twClass(c4, objectMatcher)).toStrictEqual([])
    expect(twClass(c5, objectMatcher)).toStrictEqual(['mt-2', 'ml-4'])
    expect(twClass(c6, objectMatcher)).toStrictEqual([])
})
