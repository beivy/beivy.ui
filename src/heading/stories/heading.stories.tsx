import { Button } from '@/button'
import { Box, ThemeProvider } from '@/core'
import { Heading } from '..'

export default {
    title: 'Library/Heading',
    component: Heading,
}

export const Headings = () => {
    return (
        <ThemeProvider>
            <Box $direction="col" $gap="4">
                <Heading title="H1 Heading" as="H1">
                    <Button>テスト</Button>
                </Heading>
                <Heading title="H2 Heading" as="H2">
                    <Button>テスト</Button>
                </Heading>
                <Heading title="H3 Heading" as="H3">
                    <Button>テスト</Button>
                </Heading>
                <Heading title="H4 Heading" as="H4">
                    <Button>テスト</Button>
                </Heading>
                <Heading title="H5 Heading" as="H5">
                    <Button>テスト</Button>
                </Heading>
            </Box>
        </ThemeProvider>
    )
}
