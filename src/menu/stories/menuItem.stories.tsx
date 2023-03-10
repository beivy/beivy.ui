import { ThemeProvider } from '@/core'
import { MenuItem } from '../'
import { HeadlessMenu } from '../impl/menu'

export default {
    title: 'Library/Menu/MenuItem',
    component: MenuItem,
}

export const ASingleMenuItem = () => {
    return (
        <ThemeProvider>
            <HeadlessMenu>
                <MenuItem
                    name="cities"
                    href="#"
                    label="東京"
                    iconType="Home"
                ></MenuItem>
            </HeadlessMenu>
        </ThemeProvider>
    )
}
