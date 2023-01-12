import { Button, Input } from '@/be.html'
import { Box, Stack } from '@/core'
import { CommonElementProps, DevControlStyleProps } from '@/core/be.core-types'
import { useTheme } from '@/hooks'
import { Icon } from '@/icon'
import { Select } from '@/select'
import { predicateHeight } from '@/utils/be.tw-helper'
import { forwardRef, useMemo, useState } from 'react'

export type CategoryData = {
    name: string
    label: string
}

export interface SearchProps
    extends React.ComponentPropsWithoutRef<'input'>,
        CommonElementProps {
    category?: CategoryData[]
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
    ({ category, $width, $minWidth, ...props }, ref) => {
        const theme = useTheme()
        const inputTextStyle = theme.typography['content-600']
        const iconHeight = predicateHeight(inputTextStyle.$lineHeight)
        const style = {
            $width: 'full',
            $borderWidth: 'border',
            $borderRadius: 'md',
            $borderColor: 'neutral-300',
            focusWithin$outlineWidth: 'none',
            focusWithin$ringWidth: '2',
            focusWithin$ringOffsetWidth: '2',
            focusWithin$ringColor: 'primary',
        } as DevControlStyleProps

        const [selectedCategory, setSelectedCategory] =
            useState<CategoryData | null>(null)

        const categoryNode = useMemo(() => {
            if (!category) return <></>
            return (
                <Select
                    data={category}
                    by="name"
                    $width={$width}
                    $minWidth={$minWidth}
                    $bgColor="white-300"
                />
            )
        }, [category])

        return (
            <Box {...props} $direction="row" {...style} aria-role="listbox">
                {categoryNode}
                <Stack $width="full">
                    <Input
                        $width="full"
                        {...inputTextStyle}
                        focus$outlineWidth="none"
                    />
                    <Stack.Item $bottom="-1" $right="2">
                        <Button>
                            <Icon
                                type="Search"
                                $fill="neutral-300"
                                $height={iconHeight}
                                $width={iconHeight}
                            />
                        </Button>
                    </Stack.Item>
                </Stack>
            </Box>
        )
    },
)
