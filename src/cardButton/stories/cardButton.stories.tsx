import { List } from '@/be.headless'
import { Box } from '@/core'
import { DevControlStyleProps } from '@/core/be.core-types'
import { CardButton, CardButtonProps } from '..'

export default {
    title: 'Library/CardButton',
    component: CardButton,
}

export const AButtonCard = () => {
    const buttonMeta = {
        label: '128',
        description: '推奨の宛先',
        icon: 'Group',
    } as CardButtonProps
    const style = {
        $bgColor: 'primary-100',
        $borderRadius: 'md',
        $borderWidth: 'border',
        $borderColor: 'primary-300',
        focus$ringWidth: '2',
        focus$ringOffsetWidth: '2',
        focus$ringColor: 'primary',
    } as DevControlStyleProps
    return <CardButton {...buttonMeta} style={style} />
}

export const ButtonCardGroup = () => {
    const buttonMeta = [
        {
            label: '128',
            description: '推奨の宛先',
            icon: 'Group',
        },
        {
            label: '64',
            description: '記入済',
            icon: 'Group',
        },
        {
            label: '宛先検索',
            icon: 'Group',
        },
    ] as CardButtonProps[]
    const styleFactory = (active: boolean) => {
        const common = {
            $borderRadius: 'md',
            $borderWidth: 'border',
            focus$ringWidth: '2',
            focus$ringOffsetWidth: '2',
            focus$ringColor: 'primary',
            focus$outlineWidth: '0',
        }
        if (active) {
            return {
                $bgColor: 'primary-100',
                $borderColor: 'primary-300',
                ...common,
            } as DevControlStyleProps
        } else {
            return {
                $bgColor: 'neutral-200',
                $borderColor: 'neutral-300',
                ...common,
            } as DevControlStyleProps
        }
    }
    return (
        <List>
            <Box $gap="4">
                {buttonMeta.map((meta) => (
                    <List.Item>
                        {({ active, selected }) => (
                            <CardButton
                                {...meta}
                                style={styleFactory(active || selected)}
                            ></CardButton>
                        )}
                    </List.Item>
                ))}
            </Box>
        </List>
    )
}
