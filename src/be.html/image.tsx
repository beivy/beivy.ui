import { forwardRef } from 'react'
import { CommonElementProps } from '../core/be.core-types'
import { twClass } from '../utils'

export interface ImageProps
    extends React.ComponentPropsWithoutRef<'img'>,
        CommonElementProps {}

export type ImageRef = HTMLImageElement

export const Image = forwardRef<ImageRef, ImageProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)

        return <img className={classNames} {...restProps} ref={ref} />
    },
)
