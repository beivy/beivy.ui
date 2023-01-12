import { Text } from '@/be.html'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Box } from '../core'
import { Icon } from '../icon'
import { HeadlessMenu } from './impl/menu'
import { MenuItemData } from './menu.types'
import { MenuItem } from './menuItem'

export type MenuItems = MenuItemData[]

export interface Menu {
    label: string
    items: MenuItems
}

export const Menu: React.FC<Menu> = ({ label, items }) => {
    const menuItems = items.map((item) => {
        return <MenuItem key={`${item.label}_${item.iconType}`} {...item} />
    })

    return (
        <Box>
            <HeadlessMenu>
                <HeadlessMenu.Button
                    $display="inline-flex"
                    $justifyContent="center"
                    $alignItems="center"
                    $borderRadius="md"
                    $padding={{ x: '4', y: '2' }}
                    $textColor="neutral-700"
                    $fontWeight="semibold"
                    $fontSize="sm"
                    hover$bgColor="primary-300"
                    focus$ringWidth="2"
                    focus$ringColor="primary-500"
                    focus$ringOffsetWidth="2"
                    focusVisible$ringWidth="2"
                    focusVisible$ringColor="ext-white"
                    focusVisible$ringOffsetWidth="2"
                >
                    {/* <div className="inline-flex justify-center rounded-md bg-ext-black bg-opacity-20 px-4 py-2 text-sm font-medium text-ext-white hover:bg-opacity-30 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus-visible:ring-2 focus-visible:ring-ext-white focus-visible:ring-opacity-75"> */}
                    {label && <Text>{label}</Text>}
                    <Icon type="MoreVert" $fill="neutral-700" />
                    {/* </div> */}
                </HeadlessMenu.Button>
                <Box $position="relative" $direction="col">
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        {/* <HeadlessMenu.Items 
						className="absolute left-8 z-10 mt-2 
						w-56 origin-top-right rounded-md 
						bg-ext-white shadow-lg 
						ring-1 ring-ext-black ring-opacity-5 
						focus:outline-none"> */}
                        <HeadlessMenu.Items
                            $position="absolute"
                            $left="1"
                            $zIndex="10"
                            $margin={{ top: '2' }}
                            $padding={{ x: '10', y: '12' }}
                            $width="56"
                            $transformOrigin="top-left"
                            $borderRadius="md"
                            $bgColor="neutral-100"
                            $shadow="lg"
                            $ringWidth="1"
                            $ringColor="ext-black"
                            focus$outlineWidth="none"
                        >
                            <Box $direction="col">{menuItems}</Box>
                        </HeadlessMenu.Items>
                    </Transition>
                </Box>
            </HeadlessMenu>
        </Box>
    )
}
