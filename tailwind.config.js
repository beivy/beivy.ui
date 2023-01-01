const colors = require('tailwindcss/colors')
const twExtractor = require('./lib/be.tw-extractor')
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: {
        files: [
            './src/components/core/themeProvider.tsx',
            './src/**/!(*.test).tsx',
            './src/**/!(*.test).ts',
        ],
        extract: {
            tsx: twExtractor,
            ts: twExtractor,
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: '16px' },
            })
        }),
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: {
                50: '#ebf3ff',
                100: '#ebf3ff',
                200: '#dce8ff',
                300: '#aac8ff',
                400: '#73a5ff',
                500: '#2864f0',
                600: '#3264dc',
                700: '#285ac8',
                800: '#1e46aa',
                900: '#23418c',
                DEFAULT: '#2864f0',
                // DEFAULT: 'red',
            },
            second: {
                50: '#f7f5f5',
                100: '#f0eded',
                200: '#e9e7e7',
                300: '#e1dcdc',
                400: '#d7d2d2',
                500: '#bebaba',
                600: '#aaa7a7',
                700: '#8c8989',
                800: '#6e6b6b',
                900: '#464343',
                DEFAULT: '#464343',
            },
            neutral: colors.neutral,
            semantic: {
                success: colors.green,
                warning: colors.orange,
                error: colors.red,
                info: colors.cyan,
            },
            white: colors.white,
            ext: {
                ...colors,
            },
        },
        fontFamily: {
            sans: ['Noto Sans JP', 'ui-sans-serif', 'system-ui'],
        },
    },
}
