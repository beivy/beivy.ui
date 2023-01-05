import { Button } from '@/button'
import { NumInfo } from '..'
export default {
    title: 'Library/numInfo',
    component: NumInfo,
}

export const ANumInfo = () => {
    const actions = (
        <Button rightIcon="ArrowForward" size="small" type="primary" outline>
            参照
        </Button>
    )
    return (
        <NumInfo
            num={200}
            description="あなたが送ったメッセージ"
            style={{
                $bgColor: 'neutral-200',
            }}
        />
    )
}

export const AnActiveNumInfo = () => {
    return (
        <NumInfo
            num={200}
            description="あなたがメッセージを送る推奨の宛先"
            style={{
                $bgColor: 'success-200',
            }}
        />
    )
}
