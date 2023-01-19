import { Box } from '@/core'
import { Search } from '..'

export default {
    title: 'Library/Search',
    component: Search,
}

export const ASearch = () => {
    const categories = [
        {
            name: 'section',
            label: '部署',
        },
        {
            name: 'user',
            label: 'ユーザ',
        },
    ]
    return (
        <Box $direction="col" $gap="4">
            <Search name="1" $width="24" $minWidth="20" category={categories} />
            <Search name="2" $width="24" $minWidth="20" category={categories} />
        </Box>
    )
}
