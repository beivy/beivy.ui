import { List } from '@/be.headless'
import { Link, Text } from '@/be.html'
import { Box } from '@/core'
import { CommonElementProps, SVGProps } from '@/core/be.core-types'
import { ThemeContext } from '@/core/themeProvider'
import { Icon } from '@/icon'
import { predicateHeight } from '@/utils/be.tw-helper'
import React, { forwardRef, useContext, useMemo } from 'react'
import { Link as RouterLink, useInRouterContext } from 'react-router-dom'
import { MenuItemData } from './menu.types'

export interface NavigationProps {
    items: MenuItemData[]
    activeItemIndex: number | null
}

export const Navigation = forwardRef(
    (
        { items, activeItemIndex }: NavigationProps,
        ref: React.Ref<HTMLElement>,
    ) => {
        const theme = useContext(ThemeContext)
        const captionTypo = theme.typography[theme['ui'].caption]
        const iconHeight = useMemo(() => {
            const typo = captionTypo
            return predicateHeight(typo.$lineHeight, typo.$fontSize)
        }, [theme, captionTypo])

        // const [currentActiveItemIndex, setCurrentActiveItemIndex] =
        //     useState<number | null>(activeItemIndex)

        // const clickHandler = (idx: number) => {
        //     return () => setCurrentActiveItemIndex(idx)
        // }
        const inRouterContext = useInRouterContext()
        const LinkElement = useMemo(() => {
            if (inRouterContext) {
                return ({ children, href, ...props }: any) => (
                    <RouterLink to={href} {...props}>
                        {children}
                    </RouterLink>
                )
            }
            return ({ children, href, ...props }: any) => (
                <Link href={href} {...props}>
                    {children}
                </Link>
            )
        }, [inRouterContext])

        const itemContents = useMemo(
            () =>
                items.map((item, idx) => {
                    const visibility = (
                        active: boolean,
                    ): Partial<CommonElementProps> =>
                        active
                            ? {
                                  $display: 'hidden',
                                  sm$display: 'inline',
                              }
                            : {
                                  $display: 'hidden',
                                  md$display: 'inline',
                              }
                    const activeStyle = (
                        active: boolean,
                    ): Partial<CommonElementProps> =>
                        active
                            ? {
                                  $borderColor: 'primary-500',
                                  $textColor: 'neutral-600',
                              }
                            : { $textColor: 'neutral-500' }
                    const iconStyle = (active: boolean): Partial<SVGProps> =>
                        active
                            ? {
                                  $fill: 'neutral-600',
                              }
                            : { $fill: 'neutral-400' }

                    const selectedStyle = (
                        selected: boolean,
                    ): Partial<CommonElementProps> =>
                        selected
                            ? {
                                  $bgColor: 'primary-200',
                                  $borderWidth: 'b-2',
                                  $borderRadius: { top: 'md' },
                                  $borderColor: 'primary-500',
                                  $textColor: 'neutral-600',
                              }
                            : {}

                    return (
                        <List.Item key={`${item.name}`}>
                            {({ active, selected }) => (
                                <LinkElement href={item.href} tabIndex={0}>
                                    <Box
                                        $alignItems="center"
                                        $cursor="pointer"
                                        // hover$bgColor="primary-100"
                                        $borderRadius={{
                                            top: 'md',
                                            bottom: 'none',
                                        }}
                                        focus$ringWidth="2"
                                        focus$ringOffsetWidth="2"
                                        focus$ringColor="primary"
                                        focusVisible$outlineWidth="1"
                                        focusVisible$outlineColor="primary-200"
                                        focus$outlineWidth="0"
                                        {...activeStyle(active)}
                                        {...selectedStyle(selected)}
                                        $direction="row"
                                        $padding={{ x: '3', y: '2' }}
                                    >
                                        {item.iconType && (
                                            <Icon
                                                type={item.iconType}
                                                $height={iconHeight}
                                                {...iconStyle(
                                                    active || selected,
                                                )}
                                            />
                                        )}
                                        <Text {...visibility(active)}>
                                            {item.label}
                                        </Text>
                                    </Box>
                                </LinkElement>
                            )}
                        </List.Item>
                    )
                }),
            [items],
        )

        return (
            <List selectedItemIndex={activeItemIndex}>
                <Box $direction="row">{itemContents}</Box>
            </List>
        )
    },
)
