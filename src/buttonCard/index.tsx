import { Button, Text } from '@/be.html'
import { Box } from '@/core'
import { DevControlStyleProps } from '@/core/be.core-types'
import { useTheme } from '@/hooks'
import { Icon, IconType } from '@/icon'
import { predicateHeight } from '@/utils/be.tw-helper'
import { forwardRef } from 'react'

export interface ButtonCardProps {
    icon: IconType
    label: string
    description?: string
    style?: DevControlStyleProps
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void
}

export const ButtonCard = forwardRef<HTMLButtonElement, ButtonCardProps>(
    ({ icon, label, description, style, onClick }: ButtonCardProps, ref) => {
        const theme = useTheme()
        const labelStyle = theme.typography['caption-500']
        const descStyle = theme.typography['caption-300']
        const iconHeight = predicateHeight(labelStyle.$lineHeight)

        return (
            <Button ref={ref} onClick={onClick} $padding="2" {...style}>
                <Box $direction="row" $gap="6" $alignItems="center">
                    <Box
                        $bgColor="info-400"
                        $borderRadius="full"
                        $width={iconHeight}
                        $padding="2"
                    >
                        <Icon
                            type={icon}
                            $fill="neutral-600"
                            $height={iconHeight}
                        />
                    </Box>
                    <Box $direction="col">
                        <Text {...descStyle}>{description}</Text>
                        <Text {...labelStyle}>{label}</Text>
                    </Box>
                </Box>
            </Button>
        )
    },
)
