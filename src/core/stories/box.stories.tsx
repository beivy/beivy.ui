import { Box } from '..'

export default {
    title: 'Library/Core/Box',
    component: Box,
}

export const Layout = () => {
    const props: any = {
        $bgColor: 'ext-red-100',
    }
    return (
        /** Root Container */
        <Box
            $height="full"
            $width="full"
            xl$maxWidth="screen-xl"
            xl$margin="auto"
            $padding={{ x: '2' }}
            $direction="col"
            $space="y-4"
            {...props}
        >
            {/* Header */}
            <Box
                $width="full"
                $direction="row"
                $justifyContent="between"
                $alignItems="end"
                $height="16"
                $bgColor="ext-gray-100"
                dark$bgColor="ext-gray-700"
                $borderRadius={{ bottom: 'md' }}
            >
                {/* Brand & Logo */}
                <Box
                    $direction="row"
                    $space="x-1"
                    $height="full"
                    $alignItems="end"
                >
                    <Box
                        $minWidth="min"
                        $width="8"
                        $height="8"
                        $bgColor="ext-blue-200"
                        $borderRadius="md"
                    />
                    <Box
                        $minWidth="min"
                        $width="8"
                        $height="8"
                        $bgColor="ext-blue-200"
                        $borderRadius="md"
                    />
                </Box>
                <Box $direction="row" $space="x-3">
                    {/* Navigation menu */}
                    <Box $direction="row" $space="x-1">
                        <Box
                            $minWidth="min"
                            $width="8"
                            $height="8"
                            $bgColor="ext-blue-200"
                            $borderRadius="md"
                        />
                        <Box
                            $minWidth="min"
                            $width="8"
                            $height="8"
                            $bgColor="ext-blue-200"
                            $borderRadius="md"
                        />
                        <Box
                            $minWidth="min"
                            $width="8"
                            $height="8"
                            $bgColor="ext-blue-200"
                            $borderRadius="md"
                        />
                        <Box
                            $minWidth="min"
                            $width="8"
                            $height="8"
                            $bgColor="ext-blue-200"
                            $borderRadius="md"
                        />
                    </Box>
                    {/* User profile & Notifications */}
                    <Box $direction="row" $space="x-1">
                        <Box
                            $minWidth="min"
                            $width="8"
                            $height="8"
                            $bgColor="ext-blue-200"
                            $borderRadius="md"
                        />
                        <Box
                            $minWidth="min"
                            $width="8"
                            $height="8"
                            $bgColor="ext-blue-200"
                            $borderRadius="md"
                        />
                    </Box>
                </Box>
            </Box>
            {/* Body */}
            <Box $width="full" $height="full" $bgColor="ext-blue-200" />
        </Box>
    )
}
