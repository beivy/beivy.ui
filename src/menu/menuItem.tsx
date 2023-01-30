import { Button, Link, Text } from '@/be.html'
import { Box, ThemeContext, ThemeType } from '@/core'
import { Icon } from '@/icon'
import { predicateHeight } from '@/utils/be.tw-helper'
import { Menu } from '@headlessui/react'
import React, { useCallback, useContext } from 'react'
import { MenuItemData } from './menu.types'

export interface MenuItemProps extends MenuItemData {
    type?: 'Button' | 'Link'
}

export const MenuItem: React.FC<MenuItemProps> = ({
    label,
    iconType,
    type = 'Button',
}) => {
    const theme = useContext(ThemeContext)
    const { caption } = theme.ui
    const captionStyle = theme.typography[caption]
    const lineHeight = predicateHeight(
        captionStyle.$lineHeight,
        captionStyle.$fontSize,
    )
    const menuStyle = (active: boolean, uiTheme: ThemeType) => {
        return active ? uiTheme.ui.text.active : uiTheme.ui.text.inactive
    }
    const iconStyle = (active: boolean, uiTheme: ThemeType) => {
        return active ? uiTheme.ui.icon.active : uiTheme.ui.icon.inactive
    }

    const itemContent = useCallback(
        (active: boolean, theme: ThemeType, type: 'Button' | 'Link') => {
            return (
                <Box
                    $direction="row"
                    $alignItems="center"
                    $padding="2"
                    {...captionStyle}
                    {...menuStyle(active, theme)}
                >
                    {iconType && (
                        <Icon
                            type={iconType}
                            $width={lineHeight}
                            $height={lineHeight}
                            $padding="1"
                            {...iconStyle(active, theme)}
                            aria-label={label}
                        />
                    )}
                    {label && <Text>{label}</Text>}
                </Box>
            )
        },
        [iconType, lineHeight, captionStyle],
    )

    return (
        <Menu.Item>
            {({ active }) => {
                if (type === 'Button') {
                    return <Button>{itemContent(active, theme, type)}</Button>
                }
                if (type === 'Link') {
                    return (
                        <Link href="#">{itemContent(active, theme, type)}</Link>
                    )
                }
                return <></>
            }}
        </Menu.Item>
    )
}
