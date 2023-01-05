import { DevControlStyleProps } from '@/core/be.core-types'
import { ButtonCard, ButtonCardProps } from '..'

export default {
    title: 'Library/buttonCard',
    component: ButtonCard,
}

export const AButtonCard = () => {
    const buttonMeta = {
        label: '128',
        description: '推奨の宛先',
        icon: 'Group',
    } as ButtonCardProps
    const style = {
        $bgColor: 'primary-100',
        $borderRadius: 'md',
        $borderWidth: 'border',
        $borderColor: 'primary-300',
        focus$ringWidth: '2',
        focus$ringOffsetWidth: '2',
        focus$ringColor: 'primary',
    } as DevControlStyleProps
    return <ButtonCard {...buttonMeta} style={style} />
}
