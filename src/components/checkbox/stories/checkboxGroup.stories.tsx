import ThemeProvider from '@/components/core/themeProvider'
import { CheckboxGroup } from '../'
import { TestContainer } from '../../core/stories/utils'
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
                    a__content="inline"
                    c__resize="fillContainer"
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
                    a__content="inline"
                    a__vertical
                />
            </ThemeProvider>
        </TestContainer>
    )
}
