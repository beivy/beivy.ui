import { Badge } from '..'
import { Box } from '../../core'
import { Icon } from '../../icon'
export default {
    title: 'Library/badge',
    component: Badge,
}

export const Badges = () => {
    return (
        <Box $direction="row" $gap="2">
            <Badge badgeContent={4}>
                <Icon type="Event" $width="12" $height="12" />
            </Badge>
            <Badge badgeContent={false}>
                <Icon type="Event" $width="12" $height="12" />
            </Badge>
        </Box>
    )
}
