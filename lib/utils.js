// const twRegEx = /^\s*(\S*)(?=\$)(\S+)\s*=\s*["'{](\S*)["'}]/
//const twAttr = /^\s*\S*\s+(\S*)(?=\$)(\S+)\s*=\s*(.*)\s*$/
const twAttr = /(\S*)(?=\$)(\S+)\s*[=:]\s*([^<>]*)\s*/
const regExpSplitAttr = /\s+(?![=:])/ ///\s+(?<!=)\s+|(?<=")\s+/
const twNameValue = /^\s*(\S*)\s*:\s*(\S*)\s*$/
const twMayBeAxis = /^\s*(\S*)\s*:\s*(\S*)\s*$/
const prefixes = require('./prefix')
// const twAttr = /(\S*)(?=\$)(\S+)\s*=\s*"(.*)"/

const pseudoMap = {
    focusWithIn: 'focus-within',
    focusVisible: 'focus-visible',
    xl2: '2xl',
    firstOfType: 'first-of-type',
    lastOfType: 'last-of-type',
    onlyOfType: 'only-of-type',
    inRange: 'in-range',
    outOfRange: 'out-of-range',
    placeholderShown: 'placeholder-shown',
    selection: 'selection',
    firstLine: 'first-line',
    firstLetter: 'first-letter',
    motionReduce: 'motion-reduce',
    motionSafe: 'motion-safe',
    contrastMore: 'contrast-more',
}

function parseAttrValueAsString(rawAttrValue, attrName, pseudo) {
    // const pseudoStr = (pseudo === '' ? '' : `${pseudo}:`).replaceAll(
    //     'xl2',
    //     '2xl',
    // )
    const attrValue = rawAttrValue.replaceAll(/["'{},]/g, '')
    const pseudoStr = pseudo === '' ? '' : `${pseudoMap[pseudo] ?? pseudo}:`
    const prefix = prefixes[attrName]
    if (!prefix) {
        return [`${pseudoStr}${attrValue}`]
    }

    if (!prefix.prefix || prefix.prefix === '') {
        return [`${pseudoStr}${attrValue}`]
    }
    if (prefix.extra) {
        const spCase = prefix.extra[attrValue]
        if (spCase) {
            return [`${pseudoStr}${spCase}`]
        }
    }
    return [`${pseudoStr}${prefix.prefix}-${attrValue}`]
}

function parseAttrValueAsObject(attrValue, attrName, pseudo) {
    const pseudoStr = (pseudo === '' ? '' : `${pseudo}:`).replaceAll(
        'xl2',
        '2xl',
    )
    const attrs = attrValue
        .split(/[{,}]/)
        .filter(Boolean)
        .map((v) => {
            const nv = twNameValue.exec(v)
            console.log('****', nv)
            if (!nv) return []
            return [nv[1], nv[2].replaceAll(/["'{}]/g, '')]
        })

    const rst = attrs
        .map((v) => {
            const prefix = prefixes[attrName]
            if (!prefix) return undefined
            const axis = prefix.axis?.[v[0]]
            if (!axis) return undefined
            return `${pseudoStr}${axis.prefix}-${v[1]}`
        })
        .filter(Boolean)
    return rst
}

function objectMatcherFactory() {
    let numOpenedParenthesis = 0
    let isObject = false
    let contents = ''
    let pseudo = ''
    let attrName = ''
    return (content, curAttrName, curPseudo) => {
        const skip = !curAttrName && !attrName
        if (skip) {
            // isObject = false
            // contents = ''
            // pseudo = ''
            // attrName = ''
            return [skip, isObject, false, '', '', '']
        }
        if (!pseudo && curPseudo) {
            pseudo = curPseudo
        }
        if (!attrName && curAttrName) {
            attrName = curAttrName
        }
        if (!contents) {
            contents = content
        } else {
            contents += ' ' + content
        }
        if (content) {
            for (let c of content) {
                if (c === '{') {
                    isObject = true
                    numOpenedParenthesis++
                }
                if (c === '}') {
                    numOpenedParenthesis--
                    if (numOpenedParenthesis <= 0) break
                }
            }
        }
        console.log(content, numOpenedParenthesis)
        const isClosed =
            numOpenedParenthesis === 0 ||
            content.indexOf('</') != -1 ||
            content.indexOf('/>') != -1
        const current = isObject
            ? [skip, isObject, isClosed, contents, attrName, pseudo]
            : [skip, isObject, isClosed, content, curAttrName, curPseudo]

        if (isClosed) {
            numOpenedParenthesis = 0
            isObject = false
            contents = ''
            pseudo = ''
            attrName = ''
        }
        // if (curAttrName && curAttrName.indexOf('$') !== -1) {
        //     return [false, false, true, content, curAttrName, curPseudo]
        // }
        return current
    }
}

function extractAttr(content) {
    return twAttr.exec(content)
}

function splitAttr(content) {
    if (!content) return []
    const attrs = content.split(regExpSplitAttr)
    const rst = attrs.reduce((prev, curr) => {
        if (prev[prev.length - 1]?.endsWith('=')) {
            prev[prev.length - 1] = prev[prev.length - 1] + curr
        } else {
            prev.push(curr)
        }
        return prev
    }, [])
    return rst
}

function attrValueParser(objectMatcher, curAttrValue, curAttrName, curPseudo) {
    const [skip, isObject, isClosed, contents, attrName, pseudo] =
        objectMatcher(curAttrValue, curAttrName, curPseudo)
    console.log(
        '****attrValueParser',
        skip,
        isObject,
        isClosed,
        contents,
        attrName,
        pseudo,
    )
    // console.log('====>', [skip, isObject, isClosed, contents, attrName, pseudo])
    // const cleanedContents = contents.replaceAll(/[{}]/g, '').trim()
    if (skip) return []
    if (isObject) {
        if (isClosed) {
            return parseAttrValueAsObject(contents, attrName, pseudo)
        }
        return []
    }
    return parseAttrValueAsString(curAttrValue, curAttrName, curPseudo)
}

function twClass(content, objectMatcher) {
    console.log('invoke twClass ====>', content)
    if (!content) return []
    const rst = (
        content.indexOf('$') != -1 && content.indexOf('=') != -1
            ? splitAttr(content)
            : [content]
    )
        .map((v) => {
            const attr = extractAttr(v)
            console.log('====>extracted attr', attr)
            // if (!attr) return []
            if (!attr || attr.length < 4)
                return attrValueParser(objectMatcher, v)
            const curPseudo = attr[1].replace('$', ':').trim()
            const curAttrName = attr[2].trim()
            const curAttrValue = attr[3].replaceAll(/["']/g, '').trim()

            return attrValueParser(
                objectMatcher,
                curAttrValue,
                curAttrName,
                curPseudo,
            )
        })
        .reduce((prev, curr) => [...prev, ...curr], [])
    console.log('====>twClass', rst)
    return rst
}

module.exports = {
    twClass,
    objectMatcherFactory,
}
