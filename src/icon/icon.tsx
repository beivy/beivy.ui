import React, { FC, SVGProps } from 'react'
import { SVGIconProps } from '../core/be.core-types'
import { twSvg } from '../utils'
// import Event from './svg/Event'
// import Home from './svg/Home'
// import MoreVert from './svg/MoreVert'
// import Send from './svg/Send'
import { mergeAll } from 'ramda'
import * as SVG from './svg'

export type IconType = keyof typeof SVG
export const SVGName = Object.keys(SVG) as IconType[]
export type IconProps = SVGIconProps & {
    type: IconType
}

export const svgName = Object.keys(SVG)

const SVGIcons: Record<IconType, React.FC<SVGProps<SVGSVGElement>>> = mergeAll(
    SVGName.map((svg) => ({ [`${svg}`]: SVG[svg] })),
) as Record<IconType, React.FC<SVGProps<SVGSVGElement>>>

const Icon: FC<IconProps> = ({ type, ...rest }: IconProps) => {
    const { classNames, ...restProps } = twSvg(rest)
    const SvgIcon = SVGIcons[type]

    return SvgIcon ? <SvgIcon className={classNames} {...restProps} /> : <></>
}

export { Icon }
