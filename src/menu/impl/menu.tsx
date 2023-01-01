import {
    CommonElementProps,
    ElementPositionProps,
    InsetProps,
    PseudoState,
    Screen,
    Typography,
} from '@/core/be.core-types'
import { twClass } from '@/utils'
import { Menu as HLMenu } from '@headlessui/react'
import React, { ComponentPropsWithRef } from 'react'

type HLMenuProps = ComponentPropsWithRef<typeof HLMenu>

export interface MenuProps extends HLMenuProps, CommonElementProps {
    children: React.ReactNode
}

const __HeadlessMenu = ({ children, ...props }: MenuProps) => {
    const { classNames, ...restProps } = twClass(props)
    return (
        <HLMenu as="div" className={classNames} {...restProps}>
            {children}
        </HLMenu>
    )
}

type HLMenuButtonProps = ComponentPropsWithRef<typeof HLMenu.Button>

export interface MenuButtonProps
    extends HLMenuButtonProps,
        CommonElementProps,
        Partial<Typography>,
        Partial<Screen<Typography>>,
        Partial<PseudoState<Typography>>,
        ElementPositionProps,
        Partial<Screen<ElementPositionProps>>,
        Partial<PseudoState<ElementPositionProps>> {
    children: React.ReactNode
}

const HeadlessMenuButton = ({ children, ...props }: MenuButtonProps) => {
    const { classNames, ...restProps } = twClass(props)
    return (
        <HLMenu.Button className={classNames} {...restProps}>
            {children}
        </HLMenu.Button>
    )
}

type HLMenuItemsProps = ComponentPropsWithRef<typeof HLMenu.Items>

export interface MenuItemsProps
    extends HLMenuItemsProps,
        CommonElementProps,
        Partial<Typography>,
        Partial<Screen<Typography>>,
        Partial<PseudoState<Typography>>,
        ElementPositionProps,
        Partial<Screen<ElementPositionProps>>,
        Partial<PseudoState<ElementPositionProps>>,
        InsetProps,
        Partial<Screen<InsetProps>>,
        Partial<PseudoState<InsetProps>> {
    children: React.ReactNode
}

const HeadlessMenuItems = React.forwardRef<HTMLDivElement, MenuItemsProps>(
    ({ children, ...props }: MenuItemsProps, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return (
            <HLMenu.Items className={classNames} {...restProps} ref={ref}>
                {children}
            </HLMenu.Items>
        )
    },
)

export const HeadlessMenu = Object.assign(__HeadlessMenu, {
    Button: HeadlessMenuButton,
    Items: HeadlessMenuItems,
})
