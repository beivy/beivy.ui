import { useEvent } from '@/be.headless/utils/hooks/use-event'
import { Keys } from '@/be.headless/utils/keyboard'
import { Button, Input } from '@/be.html'
import { Box, Stack } from '@/core'
import { CommonElementProps, DevControlStyleProps } from '@/core/be.core-types'
import { useTheme } from '@/hooks'
import { Icon } from '@/icon'
import { Select } from '@/select'
import { predicateHeight } from '@/utils/be.tw-helper'
import { forwardRef, useCallback, useMemo, useRef, useState } from 'react'

export type CategoryData = {
    name: string
    label: string
}

export type SearchCriteria = {
    category?: string
    criteria?: string
}

export interface SearchProps
    extends Omit<React.ComponentPropsWithoutRef<'input'>, 'defaultValue'>,
        CommonElementProps {
    category?: CategoryData[]
    defaultValue?: SearchCriteria
    onSearch?: (criteria: SearchCriteria | null) => void
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
    (
        { category, $width, $minWidth, defaultValue = {}, onSearch, ...props },
        ref,
    ) => {
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

        const [searchCriteria, setSearchCriteria] =
            useState<SearchCriteria | null>({
                category: defaultValue.category || category?.[0].name,
            })

        const categoryNode = useMemo(() => {
            if (!category) return <></>
            return (
                <Select
                    data={category}
                    defaultValue={defaultValue.category}
                    by="name"
                    $width={$width}
                    $minWidth={$minWidth}
                    $bgColor="white-300"
                    $padding={{ left: '2' }}
                    onChange={(data) => {
                        setSearchCriteria((criteria) => ({
                            ...criteria,
                            category: (data as any).name, //TODO
                        }))
                    }}
                />
            )
        }, [category])

        const onSearchHandler = useCallback(
            (evt: React.MouseEvent) => {
                evt.preventDefault()
                console.log('====>', searchCriteria, onSearch)
                onSearch && onSearch(searchCriteria)
            },
            [onSearch, searchCriteria],
        )

        const onInputChange = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault()
                setSearchCriteria((search) => ({
                    ...search,
                    criteria: e.target.value,
                }))
            },
            [],
        )

        const buttonRef = useRef<HTMLButtonElement>(null)

        const handleKeyDown = useEvent(
            (event: React.KeyboardEvent<HTMLInputElement>) => {
                switch (event.key) {
                    // Ref: https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-13

                    case Keys.Enter:
                        // event.preventDefault()
                        event.stopPropagation()
                        if (!event.nativeEvent.isComposing) {
                            buttonRef.current?.click()
                        }

                        break
                }
            },
        )

        return (
            <Box {...props} $direction="row" {...style} aria-role="listbox">
                {categoryNode}
                <Stack $width="full">
                    <Input
                        $width="full"
                        $padding={{ x: '2', y: '1' }}
                        {...inputTextStyle}
                        focus$outlineWidth="none"
                        defaultValue={defaultValue.criteria}
                        onChange={onInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    <Stack.Item $bottom="-1" $right="2">
                        <Button onClick={onSearchHandler} ref={buttonRef}>
                            <Icon
                                type="Search"
                                $fill="neutral-300"
                                $height={iconHeight}
                                $width={iconHeight}
                                aria-label="検索"
                            />
                        </Button>
                    </Stack.Item>
                </Stack>
            </Box>
        )
    },
)
