import * as R from 'ramda'
import { useContext } from 'react'
import { Box } from '../core'
import {
    CommonElementProps,
    ElementConstraintsProps,
    PseudoState,
    Screen,
} from '../core/be.core-types'
import { ThemeContext } from '../core/themeProvider'
import { twClass } from '../utils'
import { beStyle, beStyleAttrTree, pickupProps } from '../utils/be.style'
import Checkbox from './checkbox'

export type CheckboxGroupValue = {
    value?: string
    description?: string
}

export type CheckboxGroupOption = CheckboxGroupValue & {
    label?: string
}

interface __CheckboxArrangementProps {
    $a__display?: 'block' | 'inline'
    $a__reverse?: boolean
    $a__vertical?: boolean
    $a__center?: boolean
}

export interface CheckboxArrangementProps
    extends Partial<__CheckboxArrangementProps>,
        Partial<Screen<__CheckboxArrangementProps>>,
        Partial<PseudoState<__CheckboxArrangementProps>> {}

export interface CheckboxGroupProps
    extends CommonElementProps,
        ElementConstraintsProps,
        CheckboxArrangementProps {
    name: string
    options: CheckboxGroupOption[]
    value?: CheckboxGroupValue[]
    onChange?: (value: CheckboxGroupValue[]) => void
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
    const themeContext = useContext(ThemeContext)
    const { pickup, ...rest } = pickupProps(props, '$a__display', '$a_reverse')
    const { attrsTree, ...secondRest } = beStyleAttrTree(rest)
    const { classNames, ...finalRest } = twClass(secondRest)
    const styles = beStyle(attrsTree, themeContext)

    const { name, options, value } = finalRest

    const __options = R.map((option: CheckboxGroupOption) => {
        return (
            <Checkbox
                key={`${name}_${option.label}`}
                name={name}
                value={option.value}
                label={option.label}
                description={option.description}
                {...pickup}
            />
        )
    })(options || [])

    return (
        <Box {...styles} className={classNames} $flexWrap="wrap" $height="auto">
            {__options}
        </Box>
    )
}

export { CheckboxGroup }
