import { Button } from '@/be.html'
import { Transition } from '@headlessui/react'
import { forwardRef, useEffect, useState } from 'react'
import { Box, Icon, Text, useTheme } from '..'

export interface NotificationProps {
    message: string
    show: boolean
    autoHidden?: true | number
    onClose?: () => void
}

const Notification = forwardRef<HTMLElement, NotificationProps>(
    (
        { show: propsShow, message, autoHidden, onClose }: NotificationProps,
        ref,
    ) => {
        const theme = useTheme()
        const [show, setShow] = useState(propsShow)
        const [hiddenHandler, setHiddenHandler] = useState<any>(undefined)

        useEffect(() => {
            setShow(propsShow)
        }, [propsShow])

        useEffect(() => {
            if (!show) {
                onClose && onClose()
            }
        }, [show])

        useEffect(() => {
            if (autoHidden && show) {
                if (hiddenHandler) return
                const time =
                    typeof autoHidden === 'number' ? autoHidden * 1000 : 5000
                const handler = setTimeout(() => {
                    setShow(false)
                    setHiddenHandler(undefined)
                }, time)
                setHiddenHandler(handler)
            }
            return () => {
                if (hiddenHandler) {
                    clearTimeout(hiddenHandler)
                }
            }
        }, [autoHidden, show])

        return (
            <Box
                arial-live="assertive"
                $position="fixed"
                $alignContent="end"
                $inset="0"
                $padding={{
                    x: '4',
                    y: '6',
                }}
                sm$alignContent="start"
                sm$padding="6"
                className="pointer-events-none"
            >
                <Box
                    $width="full"
                    $direction="col"
                    $alignItems="center"
                    $space="y-4"
                    sm$alignItems="start"
                    $justifyContent="end"
                >
                    <Transition
                        show={show}
                        as="div"
                        enter="transition ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity=100 sm: translate-x-0"
                        leave="transition easi-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Box
                            $width="full"
                            sm$width="max"
                            $overflow="hidden"
                            $borderRadius="lg"
                            $bgColor="white"
                            $shadow="lg"
                            $ringWidth="1"
                            $ringColor="neutral-400"
                            $padding="4"
                            $alignItems="center"
                            className="pointer-events-auto"
                        >
                            <Box $justifyContent="between">
                                <Text {...theme.typography['content-400']}>
                                    {message ?? ''}
                                </Text>
                            </Box>
                            <Box
                                $margin={{ left: '4' }}
                                $flexShrink="flex-shrink-0"
                                $width="min"
                            >
                                <Button
                                    $display="inline-flex"
                                    $borderRadius="md"
                                    $bgColor="white"
                                    $borderColor="primary-300"
                                    hover$textColor="neutral-500"
                                    hover$bgColor="primary-300"
                                    focus$ringWidth="2"
                                    focus$ringColor="primary"
                                    focus$ringOffsetWidth="2"
                                    onClick={() => setShow(false)}
                                    $width="min"
                                    $padding="0"
                                    $lineHeight="4"
                                >
                                    <span className="sr-only">閉じる</span>
                                    <Icon
                                        $fill="primary-400"
                                        hover$fill="primary"
                                        type="Close"
                                        $width="5"
                                        $height="5"
                                    ></Icon>
                                </Button>
                            </Box>
                        </Box>
                    </Transition>
                </Box>
            </Box>
        )
    },
)

export { Notification }
