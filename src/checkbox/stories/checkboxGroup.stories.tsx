import ThemeProvider from '@/core/themeProvider'
import { TestContainer } from '@/stories/utils'
import { CheckboxGroup } from '../'
import { checkboxOptions } from './checkbox.data'

export default {
    title: 'Library/CheckboxBox/Style',
    component: CheckboxGroup,
}

export const HorizontalCheckbox = () => {
    return (
        <TestContainer>
            <ThemeProvider>
                <CheckboxGroup
                    name="cities"
                    options={checkboxOptions}
                    $c__resize="hugContent"
                    $borderWidth="2"
                />
            </ThemeProvider>
        </TestContainer>
    )
}

export const VerticalCheckbox = () => {
    return (
        <TestContainer>
            <ThemeProvider>
                <CheckboxGroup
                    name="cities"
                    options={checkboxOptions}
                    md$a__display="inline"
                    $divideWidth="2"
                    $divideColor="neutral-300"
                    $borderWidth="2"
                    $a__vertical
                    $a__center
                />
            </ThemeProvider>
        </TestContainer>
    )
}
