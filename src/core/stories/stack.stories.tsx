import { Stack } from '..'

export default {
    title: 'Library/Core/Stack',
    component: Stack,
}

const Item = Stack.Item

export const CommonStack = () => {
    return (
        <Stack $width="screen" $height="full" $bgColor="neutral-100">
            <Item
                $bgColor="ext-rose-400"
                $bottom="0"
                $right="0"
                $width="16"
                $height="16"
            />
            {/* <Item $bgColor="ext-rose-500" $rowStart="2" $rowSpan="2" /> */}
        </Stack>
    )
}
