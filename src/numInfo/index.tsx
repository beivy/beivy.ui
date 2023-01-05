import { H3, Text } from '@/be.html'
import { Box, Section } from '@/core'
import { DevControlStyleProps } from '@/core/be.core-types'
import { useTheme } from '@/hooks'
import { twClass } from '@/utils'
import { forwardRef, useMemo } from 'react'

export interface NumInfoProps extends DevControlStyleProps {
    num: number
    precision?: number
    description?: string
    style?: DevControlStyleProps
    actions?: React.ReactNode
}

export const NumInfo = forwardRef<HTMLElement, NumInfoProps>(
    (
        {
            num,
            precision = 2,
            description = '',
            actions,
            ...props
        }: NumInfoProps,
        ref,
    ) => {
        const theme = useTheme()
        const numStyle = theme.typography['caption-900']
        const descriptionStyle = theme.typography['caption-300']
        const {
            classNames,
            style = {},
            ...restProps
        } = useMemo(() => twClass(props), [props])
        const precisedNum = (num: number, precision: number) => {
            const max = 10 ** precision - 1
            return num > max ? max.toString() + '+' : num.toString()
        }
        return (
            <Section
                className={classNames}
                $gap="4"
                $padding="4"
                $alignItems="center"
                $justifyContent="center"
                $maxWidth="xs"
                $width="fit"
                $borderRadius="md"
                {...style}
                {...restProps}
                ref={ref}
            >
                <Text {...numStyle}>{precisedNum(num, precision)}</Text>
                <Box $direction="col" $gap="y-2" $alignItems="end">
                    <H3 {...descriptionStyle}>{description}</H3>
                    {actions}
                </Box>
            </Section>
        )
    },
)
