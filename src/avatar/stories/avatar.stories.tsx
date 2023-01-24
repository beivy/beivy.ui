import { Avatar } from '..'
import { Box } from '../../core'
export default {
    title: 'Library/Avatar',
    component: Avatar,
}

export const Avatars = () => {
    return (
        <Box $direction="row" $gap="2">
            <Avatar src="https://i.pravatar.cc/300?img=1" />
            <Avatar alt="suzuki" />
            <Avatar
                src="https://i.pravatar.cc/300?img=1"
                $height="10"
                $width="10"
            />
            <Avatar alt="す" $height="10" $width="10" />
            <Avatar
                src="https://i.pravatar.cc/300?img=1"
                $height="12"
                $width="12"
            />
            <Avatar alt="鈴木" $height="12" $width="12" />
            <Avatar
                src="https://i.pravatar.cc/300?img=1"
                $height="14"
                $width="14"
            />
            <Avatar alt="鈴木" $height="14" $width="14" />
        </Box>
    )
}
