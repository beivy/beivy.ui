import { Box } from '@/core'
import { BoxProps } from '@/core/be.core-types'
import { Transition } from '@headlessui/react'

export interface PanelProps
    extends React.ComponentPropsWithoutRef<'div'>,
        BoxProps {
    show: boolean
}

const Panel = ({ show, children, ...props }: PanelProps) => {
    return (
        <Transition
            show={show}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Box {...props}>{children}</Box>
        </Transition>
    )
}

export { Panel }
