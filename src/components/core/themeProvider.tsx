import React, { createContext } from 'react'

const Theme = {
    typography: {
        ['title-100']: {
            $fontSize: 'xs',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '4',
        },
        ['title-200']: {
            $fontSize: 'sm',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '5',
        },
        ['title-300']: {
            $fontSize: 'base',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '6',
        },
        ['title-400']: {
            $fontSize: 'lg',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '7',
        },
        ['title-500']: {
            $fontSize: 'xl',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '7',
        },
        ['title-600']: {
            $fontSize: '2xl',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '8',
        },
        ['title-700']: {
            $fontSize: '3xl',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '9',
        },
        ['title-800']: {
            $fontSize: '4xl',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: '10',
        },
        ['title-900']: {
            $fontSize: '5xl',
            $fontWeight: 'semibold',
            $textColor: 'neutral-700',
            $lineHeight: 'none',
        },
        ['subtitle-100']: {
            $fontSize: 'xs',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '4',
        },
        ['subtitle-200']: {
            $fontSize: 'sm',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '5',
        },
        ['subtitle-300']: {
            $fontSize: 'base',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '6',
        },
        ['subtitle-400']: {
            $fontSize: 'lg',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '7',
        },
        ['subtitle-500']: {
            $fontSize: 'xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '7',
        },
        ['subtitle-600']: {
            $fontSize: '2xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '8',
        },
        ['subtitle-700']: {
            $fontSize: '3xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '9',
        },
        ['subtitle-800']: {
            $fontSize: '4xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: '10',
        },
        ['subtitle-900']: {
            $fontSize: '5xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-500',
            $lineHeight: 'none',
        },
        ['content-100']: {
            $fontSize: 'xs',
            $fontWeight: 'normal',
            $textColor: 'neutral-500',
            $lineHeight: '4',
        },
        ['content-200']: {
            $fontSize: 'sm',
            $fontWeight: 'normal',
            $textColor: 'neutral-600',
            $lineHeight: '5',
        },
        ['content-300']: {
            $fontSize: 'base',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '6',
        },
        ['content-400']: {
            $fontSize: 'lg',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '7',
        },
        ['content-500']: {
            $fontSize: 'xl',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '7',
        },
        ['content-600']: {
            $fontSize: '2xl',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '8',
        },
        ['content-700']: {
            $fontSize: '3xl',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '9',
        },
        ['content-800']: {
            $fontSize: '4xl',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: '10',
        },
        ['content-900']: {
            $fontSize: '5xl',
            $fontWeight: 'normal',
            $textColor: 'neutral-700',
            $lineHeight: 'none',
        },
        ['caption-100']: {
            $fontSize: 'xs',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '4',
        },
        ['caption-200']: {
            $fontSize: 'sm',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '5',
        },
        ['caption-300']: {
            $fontSize: 'base',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '6',
        },
        ['caption-400']: {
            $fontSize: 'lg',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '7',
        },
        ['caption-500']: {
            $fontSize: 'xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '7',
        },
        ['caption-600']: {
            $fontSize: '2xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '8',
        },
        ['caption-700']: {
            $fontSize: '3xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '9',
        },
        ['caption-800']: {
            $fontSize: '4xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: '10',
        },
        ['caption-900']: {
            $fontSize: '5xl',
            $fontWeight: 'medium',
            $textColor: 'neutral-600',
            $lineHeight: 'none',
        },
    },
    ui: {
        caption: 'caption-300',
        description: 'content-200',
    },
} as const

export type ThemeType = typeof Theme

export const ThemeContext = createContext(Theme)

export interface ThemeProviderProps
    extends React.ComponentPropsWithoutRef<any> {
    value?: ThemeType
}

export default ({ value, children }: ThemeProviderProps) => {
    const theme = { ...Theme, ...value }
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}
