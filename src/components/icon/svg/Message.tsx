import * as React from 'react'
import { SVGProps } from 'react'
const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g id="c57a665591c0d106b5438c9643ff3da2" clipPath="url(#clip0_240_205)">
            <path
                id="a27b28cc6ffbf27fde15cc4176ab3f2e"
                d="M4.8 6.8H27.2V23.6H6.438L4.8 25.238V6.8ZM4.8 4C3.26 4 2.014 5.26 2.014 6.8L2 32L7.6 26.4H27.2C28.74 26.4 30 25.14 30 23.6V6.8C30 5.26 28.74 4 27.2 4H4.8ZM7.6 18H24.4V20.8H7.6V18ZM7.6 13.8H24.4V16.6H7.6V13.8ZM7.6 9.6H24.4V12.4H7.6V9.6Z"
            />
        </g>
        <defs>
            <clipPath id="clip0_240_205">
                <rect width={32} height={32} />
            </clipPath>
        </defs>
    </svg>
)
export default SvgMessage
