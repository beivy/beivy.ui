const { twClass, objectMatcherFactory } = require('./utils')
const { defaultExtractor } = require('tailwindcss/lib/lib/defaultExtractor')

const twExtractor = defaultExtractor({ tailwindConfig: { separator: '-' } })
const objectMatcher = objectMatcherFactory()
module.exports = (content) => {
    const rst = twClass(content, objectMatcher)
    console.log('====>officical', twExtractor(content))
    return [...rst, ...twExtractor(content)]
}
