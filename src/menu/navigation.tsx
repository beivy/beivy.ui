import { forwardRef, useContext, useMemo, useState } from 'react'
import { Link, Text } from '../be.html'
import { Box } from '../core'
import {
    CommonElementProps,
    ElementVisibilityProps,
    Responsible,
} from '../core/be.core-types'
import { ThemeContext } from '../core/themeProvider'
import { Icon } from '../icon'
import { predicateHeight } from '../utils/be.tw-helper'
import { MenuItemData } from './menu.types'

export interface NavigationProps {
    items: MenuItemData[]
    activeItemIndex: number | null
}

export const Navigation = forwardRef(
    (
        { items, activeItemIndex }: NavigationProps,
        ref: React.Ref<HTMLDivElement>,
    ) => {
        const theme = useContext(ThemeContext)
        const captionTypo = theme.typography[theme['ui'].caption]
        const iconHeight = useMemo(() => {
            const typo = captionTypo
            return predicateHeight(typo.$lineHeight, typo.$fontSize)
        }, [theme, captionTypo])

        const [currentActiveItemIndex, setCurrentActiveItemIndex] =
            useState<number | null>(activeItemIndex)

        const clickHandler = (idx: number) => {
            return () => setCurrentActiveItemIndex(idx)
        }

        const itemContents = useMemo(
            () =>
                items.map((item, idx) => {
                    const active = idx === currentActiveItemIndex

                    const visibility: Responsible<ElementVisibilityProps> =
                        active
                            ? {
                                  $display: 'inline',
                              }
                            : {
                                  $display: 'hidden',
                                  md$display: 'inline',
                              }
                    const activeStyle: Partial<CommonElementProps> = active
                        ? {
                              $borderWidth: 'b-2',
                              $borderColor: 'primary-500',
                              $textColor: 'neutral-600',
                          }
                        : {}
                    return (
                        <Link
                            key={item.name}
                            tabIndex={0}
                            $alignItems="center"
                            hover$bgColor="primary-100"
                            focus$bgColor="primary-100"
                            focus$outlineWidth="none"
                            onClick={clickHandler(idx)}
                            {...activeStyle}
                        >
                            <Box
                                $direction="row"
                                $alignItems="center"
                                $padding={{ x: '3', y: '2' }}
                            >
                                {item.iconType && (
                                    <Icon
                                        type={item.iconType}
                                        $height={iconHeight}
                                        $fill={'primary-300'}
                                    />
                                )}
                                <Text {...visibility}>{item.label}</Text>
                            </Box>
                        </Link>
                    )
                }),
            [clickHandler, items],
        )

        return (
            // <List ref={ref}>
            <Box $direction="row">{itemContents}</Box>
            // </List>
        )
    },
)
