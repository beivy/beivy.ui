import typescript from 'rollup-plugin-typescript2'
export default {
    input: 'src/index.ts',
    output: { file: 'es/index.js', format: 'es', indent: false },
    plugins: [
        typescript({
            exclude: [
                '**/__tests__',
                '**/*.test.ts',
                '**/*.stories.tsx',
                '**/pages/**/*.ts',
                '**/pages/**/*.tsx',
                '**/stories/**/*.ts',
                '**/stories/**/*.tsx',
            ],
            useTsconfigDeclarationDir: true,
        }),
    ],
}
