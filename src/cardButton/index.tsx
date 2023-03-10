import { Button, Text } from '@/be.html'
import { Box } from '@/core'
import { DevControlStyleProps } from '@/core/be.core-types'
import { Icon, IconType } from '@/icon'
import { forwardRef } from 'react'
import { useTheme } from '..'
export interface CardButtonProps {
    icon: IconType
    label?: string
    description?: string
    style?: DevControlStyleProps
}

export const CardButton = forwardRef<HTMLButtonElement, CardButtonProps>(
    (
        { icon, label, description, style, ...restProps }: CardButtonProps,
        ref,
    ) => {
        const theme = useTheme()
        const labelStyle = theme.typography['caption-500']
        const descStyle = theme.typography['caption-300']

        return (
            <Button {...style} {...restProps} $padding="2" ref={ref}>
                <Box $direction="row" $gap="6" $alignItems="center">
                    <Box
                        $bgColor="info-400"
                        $borderRadius="full"
                        $width="10"
                        $height="10"
                        $padding="1.5"
                    >
                        <Icon
                            type={icon}
                            $fill="neutral-600"
                            $height="8"
                            $width="8"
                            aria-label={`${description ?? ''}${label ?? ''}`}
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
