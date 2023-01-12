import { Box } from '@/core'
import { Select, SelectMode } from '..'
export default {
    title: 'Library/Select',
    component: Select,
}

export const ASelect = () => {
    return (
        <Box $direction="col" $gap="4">
            <Select
                name="1"
                data={[
                    {
                        name: 'section',
                        label: '部署',
                    },
                    {
                        name: 'user',
                        label: 'ユーザ',
                    },
                ]}
                $width="20"
                $minWidth="20"
                by="name"
                mode={SelectMode.Multi}
            />
            <Select
                name="2"
                data={[
                    {
                        name: 'section',
                        label: '部署',
                    },
                    {
                        name: 'user',
                        label: 'ユーザ',
                    },
                ]}
                $width="20"
                $minWidth="20"
                by="name"
                mode={SelectMode.Multi}
            />
        </Box>
    )
}
