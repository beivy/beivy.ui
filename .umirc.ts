import { resolve } from 'path'
export default {
    plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
    tailwindcss: {},
    alias: {
        components: resolve(__dirname, './src/components'),
    },
}
