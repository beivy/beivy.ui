import ThemeProvider from '@/core/themeProvider'
import { Input } from '../'
export default {
    title: 'Library/Input',
    component: Input,
}

export const ALabeledInput = () => {
    return (
        <ThemeProvider>
            <Input name="user_name" label="ユーザ名" />
        </ThemeProvider>
    )
}
