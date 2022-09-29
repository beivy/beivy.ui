const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./src/**/*.tsx', './src/**/*.ts'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: colors.blue,
            second: colors.lime,
            neutral: colors.neutral,
            semantic: {
                success: colors.green,
                warning: colors.orange,
                error: colors.red,
                info: colors.cyan,
            },
            ext: {
                ...colors,
            },
        },
    },
}
