import { useMemo } from 'react'
import { Span, Stack, useTheme } from '..'
import { CommonElementProps } from '../core/be.core-types'
import { BeTColor, BeTHeight, BeTWidth } from '../core/be.tailwind-types'
import { predicateHeight } from '../utils/be.tw-helper'

export interface BadgeProps {
    badgeContent?: number | boolean
    $bgColor?: BeTColor
    $textColor?: BeTColor
    children?: React.ReactNode
}
/** inline-block rounded-full w-5 min-w-5 h-5 bg-primary-400 text-neutral-200 */
/** w-3 h-3 bg-accent-400 */
export const Badge = ({
    badgeContent,
    $bgColor,
    $textColor,
    children,
}: BadgeProps) => {
    const theme = useTheme()
    const typo = theme.typography['caption-200']
    const bgColor: Partial<CommonElementProps> = $bgColor
        ? {
              $bgColor: $bgColor,
          }
        : { $bgColor: 'accent-400' }
    const textColor: Partial<CommonElementProps> = $textColor
        ? {
              $textColor: $textColor,
          }
        : { $textColor: 'neutral-200' }
    const [width, height]: [BeTWidth, BeTHeight] = useMemo(() => {
        if (!badgeContent && badgeContent !== 0) {
            return ['3', '3']
        }
        const height = predicateHeight(typo.$lineHeight)
        return [height, height]
    }, [badgeContent, typo])
    const badge = useMemo(
        () => (
            <Span
                $display="block"
                $borderRadius="full"
                $width={width}
                $height={height}
                {...bgColor}
                {...textColor}
                $textAlign="center"
            >
                <Span $display="inline-block"> {badgeContent}</Span>
            </Span>
        ),
        [badgeContent, width, height, bgColor, textColor],
    )
    return (
        <Stack>
            {children}
            <Stack.Item $right="0" $top="0">
                {badge}
            </Stack.Item>
        </Stack>
    )
}
