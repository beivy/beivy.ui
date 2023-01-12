import { forwardRef, useMemo } from 'react'
import { twBox } from '../utils'
import { BoxProps, LayoutElementProps } from './be.core-types'

export const Box = forwardRef<HTMLDivElement, BoxProps & { inline?: boolean }>(
    ({ children, inline = false, ...props }, ref) => {
        const { classNames, ...restProps } = useMemo(
            () => twBox(props, inline),
            [props],
        )
        return (
            <div className={classNames} {...restProps} ref={ref}>
                {children}
            </div>
        )
    },
)

export const Article = forwardRef<
    HTMLElement,
    LayoutElementProps<'article'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <article className={classNames} {...restProps} ref={ref}>
            {children}
        </article>
    )
})

export const Section = forwardRef<
    HTMLElement,
    LayoutElementProps<'section'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props, inline],
    )
    return (
        <section className={classNames} {...restProps} ref={ref}>
            {children}
        </section>
    )
})

export const Aside = forwardRef<
    HTMLElement,
    LayoutElementProps<'aside'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <aside className={classNames} {...restProps} ref={ref}>
            {children}
        </aside>
    )
})

export const Details = forwardRef<
    HTMLDetailsElement,
    LayoutElementProps<'details'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <details className={classNames} {...restProps} ref={ref}>
            {children}
        </details>
    )
})

export const Figcaption = forwardRef<
    HTMLElement,
    LayoutElementProps<'figcaption'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <figcaption className={classNames} {...restProps} ref={ref}>
            {children}
        </figcaption>
    )
})

export const Figure = forwardRef<
    HTMLElement,
    LayoutElementProps<'figure'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <figure className={classNames} {...restProps} ref={ref}>
            {children}
        </figure>
    )
})

export const Footer = forwardRef<
    HTMLElement,
    LayoutElementProps<'footer'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <footer className={classNames} {...restProps} ref={ref}>
            {children}
        </footer>
    )
})

export const Header = forwardRef<
    HTMLElement,
    LayoutElementProps<'header'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <header className={classNames} {...restProps} ref={ref}>
            {children}
        </header>
    )
})

export const Main = forwardRef<
    HTMLElement,
    LayoutElementProps<'main'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <main className={classNames} {...restProps} ref={ref}>
            {children}
        </main>
    )
})

export const Mark = forwardRef<
    HTMLElement,
    LayoutElementProps<'mark'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <mark className={classNames} {...restProps} ref={ref}>
            {children}
        </mark>
    )
})

export const Nav = forwardRef<
    HTMLElement,
    LayoutElementProps<'nav'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <nav className={classNames} {...restProps} ref={ref}>
            {children}
        </nav>
    )
})

export const Summary = forwardRef<
    HTMLElement,
    LayoutElementProps<'summary'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <summary className={classNames} {...restProps} ref={ref}>
            {children}
        </summary>
    )
})

export const Time = forwardRef<
    HTMLTimeElement,
    LayoutElementProps<'time'> & { inline?: boolean }
>(({ children, inline = false, ...props }, ref) => {
    const { classNames, ...restProps } = useMemo(
        () => twBox(props, inline),
        [props],
    )
    return (
        <time className={classNames} {...restProps} ref={ref}>
            {children}
        </time>
    )
})
