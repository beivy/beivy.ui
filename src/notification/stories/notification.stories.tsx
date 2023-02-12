import { Box } from '@/core'
import { Notification } from '..'
export default {
    title: 'Library/Notification',
    component: Notification,
}

export const ANotification = () => {
    return (
        <>
            <Box $width="full" $height="full">
                Test Contents
            </Box>
            <Notification
                message="メッセージを送信しました。"
                show={true}
                onClose={() => {}}
                // autoHidden={2}
            />
        </>
    )
}
