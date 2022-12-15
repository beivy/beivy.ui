import * as R from 'ramda'
import { useMemo } from 'react'
import { Box } from '../core'
import { ElementConstraintsProps } from '../core/be.core-types'
import { BeTSpace } from '../core/be.tailwind-types'
import { resizeConstrains } from '../utils/be.tw-helper'
import Checkbox from './checkbox'

export type CheckboxGroupValue = {
    value?: string
    description?: string
}

export type CheckboxGroupOption = CheckboxGroupValue & {
    label?: string
}

export interface CheckboxGroupProps extends Partial<ElementConstraintsProps> {
    name: string
    options: CheckboxGroupOption[]
    value?: CheckboxGroupValue[]
    onChange?: (value: CheckboxGroupValue[]) => void
    a__checkbox?: 'left' | 'right'
    a__content?: 'block' | 'inline'
    a__vertical?: boolean
}

const CheckboxGroup = ({
    name,
    options,
    value,
    a__content,
    a__checkbox,
    a__vertical,
    c__resize,
    onChange,
}: CheckboxGroupProps) => {
    const boxResizeConstraints = resizeConstrains(c__resize)
    const arrangement = Object.assign(
        {
            checkbox: 'left',
            content: 'inline',
        },
        a__content && {
            content: a__content,
        },
        a__checkbox && {
            checkbox: a__checkbox,
        },
    )
    const __options = R.map((option: CheckboxGroupOption) => {
        return (
            <Checkbox
                key={`${name}_${value}`}
                name={name}
                value={option.value}
                label={option.label}
                description={option.description}
                a__content={arrangement.content}
                a__checkbox={arrangement.checkbox}
            />
        )
    })(options)

    const direction: { $direction: 'row' | 'col'; $gutter?: BeTSpace } =
        useMemo(() => {
            if (a__vertical) {
                return {
                    $direction: 'col',
                }
            } else {
                return {
                    $direction: 'row',
                    $gap: 'x-4',
                }
            }
        }, [a__vertical])

    return (
        <Box
            {...boxResizeConstraints}
            {...direction}
            $flexWrap="wrap"
            $height="auto"
        >
            {__options}
        </Box>
    )
}

export { CheckboxGroup }
