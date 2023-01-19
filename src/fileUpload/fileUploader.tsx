import { Input, Text } from '@/be.html'
import { Box } from '@/core'
import { CommonElementProps, DevControlStyleProps } from '@/core/be.core-types'
import { BeTSvgFill } from '@/core/be.tailwind-types'
import { useTheme } from '@/hooks'
import { Icon } from '@/icon'
import { predicateHeight } from '@/utils/be.tw-helper'
import { forwardRef } from 'react'
import { useDropzone } from 'react-dropzone'

export interface FileUploadProps
    extends React.ComponentPropsWithoutRef<'input'>,
        DevControlStyleProps {
    onFileAccepted?: (files?: File[] | null) => void
}

export const FileUploader = forwardRef<HTMLInputElement, FileUploadProps>(
    (
        {
            onFileAccepted = (files?: File[] | null) => {},
            disabled = false,
            ...props
        },
        ref,
    ) => {
        const theme = useTheme()
        const captionStyle = theme.typography[theme.ui.caption]
        const iconHeight = predicateHeight(captionStyle.$lineHeight)
        const onDrop = (acceptFiles: File[]) => {
            onFileAccepted(acceptFiles)
        }
        const { getRootProps, getInputProps } = useDropzone({
            onDrop,
        })

        const textStyle = (disabled: boolean) => {
            return disabled
                ? {
                      ...captionStyle,
                      $textColor: theme.ui.text.disabled.$textColor,
                  }
                : captionStyle
        }

        const rootProps = disabled ? {} : getRootProps({ className: 'dropzon' })
        const inputProps = getInputProps()

        const cursorStyle = disabled
            ? {}
            : ({ $cursor: 'pointer' } as Partial<CommonElementProps>)
        return (
            <Box {...rootProps} {...props}>
                <Input {...inputProps} ref={ref} />

                <Box
                    $direction="col"
                    $justifyContent="center"
                    $alignItems="center"
                    $width="full"
                    $height="full"
                    $borderRadius="md"
                    $borderWidth="2"
                    $borderColor="neutral-300"
                    $borderStyle="dashed"
                    hover$borderColor="primary-300"
                    {...cursorStyle}
                >
                    <Text {...textStyle(disabled)}>
                        ファイルをドラッグ＆ドロップ
                    </Text>
                    <Text {...textStyle(disabled)}>
                        もしくはここをクリックしてファイルを選択してください。
                    </Text>
                    <Icon
                        type="Upload"
                        $width={iconHeight}
                        $height={iconHeight}
                        $fill={textStyle(disabled).$textColor as BeTSvgFill}
                    />
                </Box>
            </Box>
        )
    },
)
