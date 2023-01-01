import { useContext } from 'react'
import { ThemeContext } from '../core/themeProvider'

export const useTheme = () => {
    return useContext(ThemeContext)
}
