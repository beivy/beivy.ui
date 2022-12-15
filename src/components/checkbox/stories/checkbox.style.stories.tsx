import { Box } from '@/components/core'
import { Checkbox } from '../'
import { TestContainer } from '../../core/stories/utils'
import ThemeProvider from '../../core/themeProvider'

export default {
    title: 'Library/Checkbox/Style',
    component: Checkbox,
}

export const CheckboxOnRightSide = () => {
    return (
        <ThemeProvider>
            <TestContainer>
                <Box
                    $width="full"
                    $margin={{ x: 'auto' }}
                    $justifyItems="center"
                >
                    <Checkbox
                        id="comments"
                        label="右側にチェックボックス付き"
                        description="receive notification for the comment."
                        a__checkbox="right"
                        a__content="block"
                        c__resize="fillContainer"
                    />
                </Box>
            </TestContainer>
        </ThemeProvider>
    )
}

export const CheckboxOnLeftSide = () => {
    return (
        <ThemeProvider>
            <Checkbox
                id="comments"
                label="左側にチェックボックス付き"
                description="receive notification for the comment."
            ></Checkbox>
        </ThemeProvider>
    )
}

export const CheckboxNoDescription = () => {
    return (
        <ThemeProvider>
            <Checkbox id="comments" label="ラベル名のみチェックボックス" />
        </ThemeProvider>
    )
}

export const CheckboxInline = () => {
    return (
        <ThemeProvider>
            <Checkbox
                id="comments"
                label="ラベル名"
                description="説明文書"
                a__content="inline"
            />
        </ThemeProvider>
    )
}

export const CheckboxFillContainer = () => {
    return (
        <ThemeProvider>
            <div style={{ display: 'flex', width: '600px' }}>
                <Checkbox id="chk1" label="ラベル名" description="説明文書" />
            </div>
        </ThemeProvider>
    )
}

export const CheckboxOnly = () => {
    return (
        <ThemeProvider>
            <Checkbox id="chk1" />
            <Checkbox id="chk2" />
        </ThemeProvider>
    )
}

export const CheckboxInAContainer = () => {}
