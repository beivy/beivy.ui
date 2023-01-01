import '../tailwind.css'
import { setConsoleOptions } from '@storybook/addon-console'
import './index.css'

setConsoleOptions({
    panelExclude: [],
})
export const parameters = {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
