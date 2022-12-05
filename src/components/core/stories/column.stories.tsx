import { Box, Column } from '..'

export default {
    title: 'Library/Core/Column',
    component: Column,
}

export const CommonGrid = () => {
    return (
        <Column
            $columns="1"
            md$columns="3"
            $width="screen"
            $height="full"
            $bgColor="neutral-100"
            $space="y-2"
        >
            <Box $bgColor="ext-rose-400" $width="full" $height="4" />
            <Box $bgColor="ext-rose-400" $width="full" $height="28" />
            <Box $bgColor="ext-rose-400" $width="full" $height="4" />
            <Box $bgColor="ext-rose-400" $width="full" $height="8" />
            {/* <Item $bgColor="ext-rose-500" $rowStart="2" $rowSpan="2" /> */}
        </Column>
    )
}
