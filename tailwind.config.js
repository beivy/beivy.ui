const colors = require('tailwindcss/colors')
const twExtractor = require('./lib/be.tw-extractor')
module.exports = {
    content: {
        files: ['./src/**/!(*.test).tsx', './src/**/!(*.test).ts'],
        // extract: {
        //     tsx: twExtractor,
        // },
    },
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: {
                50: '#eff6ff',
                100: '#dbeafe',
                200: '#bfdbfe',
                300: '#93c5fd',
                400: '#60a5fa',
                500: '#3b82f6',
                600: '#2563eb',
                700: '#1d4ed8',
                800: '#1e40af',
                900: '#1e3a8a',
                DEFAULT: '#3b82f6',
            },
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
