import { Image } from '../be.html'
import { Box } from '../core'
import { BeTHeight, BeTWidth } from '../core/be.tailwind-types'

export interface AvatarProps {
    alt?: string
    src?: string
    $width?: BeTWidth
    $height?: BeTHeight
}
export const Avatar = ({ alt, src, $width, $height }: AvatarProps) => {
    const width = $width ?? '8'
    const height = $height ?? '8'

    if (src) {
        return (
            <Image
                $display="inline-block"
                src={src}
                alt={alt}
                $width={width}
                $height={height}
                $borderRadius="full"
            />
        )
    }

    return (
        <Box
            $display="inline-flex"
            $bgColor="primary"
            $width={width}
            $height={height}
            $borderRadius="full"
            $textColor="neutral-100"
            $justifyContent="center"
            $alignItems="center"
        >
            <p>{alt?.charAt(0).toUpperCase()}</p>
        </Box>
    )
}
