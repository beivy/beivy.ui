import { H1, H2, H3, H4, H5 } from '@/be.html'
import { Box } from '@/core'
import { useTheme } from '@/hooks'
import { createElement } from 'react'

export interface SectionProps {
    title: string
    as?: 'H1' | 'H2' | 'H3' | 'H4' | 'H5'
    children?: React.ReactNode
}

const nodes = {
    H1: H1,
    H2: H2,
    H3: H3,
    H4: H4,
    H5: H5,
}

export const Heading = ({ children, title, as = 'H1' }: SectionProps) => {
    const theme = useTheme()
    const sectionTextStyles = {
        H1: theme.typography['title-600'],
        H2: theme.typography['title-500'],
        H3: theme.typography['title-400'],
        H4: theme.typography['title-300'],
        H5: theme.typography['title-200'],
    }

    const sectionNode = createElement(
        nodes[as],
        { ...sectionTextStyles[as] },
        title,
    )

    return (
        <Box
            $justifyContent="between"
            $alignItems="end"
            $borderWidth={{ bottom: '2' }}
            $borderColor="neutral-300"
            $padding={{ bottom: '2' }}
        >
            {sectionNode}

            {children}
        </Box>
    )
}
