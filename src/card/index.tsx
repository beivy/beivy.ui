import { Box, Footer, Header, Section } from '@/core'
import { useTheme } from '@/hooks'
import { twClass } from '@/utils'
import { forwardRef, useMemo } from 'react'
import { H2, Text } from '../be.html'
import {
    BorderProps,
    CommonElementProps,
    DevControlStyleProps,
    RingProps,
} from '../core/be.core-types'

export interface CardData extends Record<string, any> {
    title?: string
    subtitle?: string
    description?: string
    extra?: React.ReactNode | string
}

export type CardStyleFunc = (data: CardData) => {
    header?: DevControlStyleProps
    main?: DevControlStyleProps
    footer?: DevControlStyleProps
    border?: Partial<BorderProps> | Partial<RingProps>
}

export interface CardProps extends DevControlStyleProps {
    data: CardData
    children?: React.ReactNode | React.ReactNode[]
    actions?: React.ReactNode
    style?: CardStyleFunc
}

const Card = forwardRef<HTMLElement, CardProps>(
    (
        {
            data,
            children,
            actions,
            style = (_: CardData) => ({} as ReturnType<CardStyleFunc>),
            ...props
        }: CardProps,
        ref,
    ) => {
        const theme = useTheme()
        const defaultControlStyleProps: Partial<CommonElementProps> = {
            $borderWidth: 'border',
            $borderRadius: 'md',
            $borderColor: 'neutral-200',
            $bgColor: 'white',
        }

        const titleStyle = theme.typography['title-500']
        const subtitleStyle = theme.typography['subtitle-400']
        const contentStyle = theme.typography['content-400']

        const { classNames, ...restProps } = useMemo(
            () => twClass(Object.assign(defaultControlStyleProps, props)),
            [props],
        )

        const extraNode = useMemo(() => {
            if (!data.extra) return <></>
            if (typeof data.extra === 'string') {
                return <Text {...subtitleStyle}>{data.extra}</Text>
            }

            return <>{data.extra}</>
        }, [data.extra])

        const customizedStyle = useMemo(() => {
            return style(data)
        }, [style])

        return (
            <Section
                className={classNames}
                $direction="col"
                $gap="4"
                {...restProps}
                {...customizedStyle.border}
                ref={ref}
            >
                <Header
                    $direction="row"
                    $justifyContent="between"
                    $alignItems="end"
                    $borderWidth={{ bottom: 'border-b' }}
                    $borderColor="neutral-200"
                    $padding={{
                        x: '4',
                        y: '2',
                    }}
                    sm$padding={{
                        x: '3',
                    }}
                    {...customizedStyle.header}
                >
                    <Box $direction="col" $gap="x-2" md$direction="row">
                        <H2 {...titleStyle}>
                            {data.title}
                            <span className="sr-only">{data.extra}</span>
                        </H2>
                        <Text {...subtitleStyle} role="doc-subtitle">
                            {data.subtitle}
                        </Text>
                    </Box>
                    <Box>{extraNode}</Box>
                </Header>

                <Section
                    $direction="col"
                    $gap="8"
                    $padding={{
                        x: '4',
                        y: '2',
                    }}
                    sm$padding={{
                        x: '3',
                    }}
                    {...customizedStyle.main}
                >
                    <Text {...contentStyle}>{data.description}</Text>
                    {children}
                </Section>
                <Footer
                    $justifyContent="end"
                    /** pb-2 */
                    $padding={{
                        bottom: '2',
                        x: '4',
                    }}
                    sm$padding={{
                        x: '3',
                    }}
                    {...customizedStyle.footer}
                >
                    {actions}
                </Footer>
            </Section>
        )
    },
)

export { Card }
