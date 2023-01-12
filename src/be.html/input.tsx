import { forwardRef } from 'react'
import {
    CommonElementProps,
    CommonFormElementProps,
    DevControlStyleProps,
    PseudoState,
    Screen,
    TextProps,
} from '../core/be.core-types'
import { twClass } from '../utils'

export interface InputProps
    extends React.ComponentPropsWithoutRef<'input'>,
        CommonElementProps,
        CommonFormElementProps,
        DevControlStyleProps,
        Partial<TextProps>,
        Partial<Screen<TextProps>>,
        Partial<PseudoState<TextProps>> {}

export type InputRef = HTMLInputElement

export const Input = forwardRef<InputRef, InputProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return <input className={classNames} {...restProps} ref={ref} />
    },
)

export const DatePicker = forwardRef<InputRef, InputProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return (
            <input
                className={classNames}
                {...restProps}
                ref={ref}
                type="date"
            />
        )
    },
)

export const DateTimePicker = forwardRef<InputRef, InputProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return (
            <input
                className={classNames}
                {...restProps}
                ref={ref}
                type="datetime-local"
            />
        )
    },
)

export const MonthPicker = forwardRef<InputRef, InputProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return (
            <input
                className={classNames}
                {...restProps}
                ref={ref}
                type="month"
            />
        )
    },
)

export const TimePicker = forwardRef<InputRef, InputProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return (
            <input
                className={classNames}
                {...restProps}
                ref={ref}
                type="time"
            />
        )
    },
)

export const Password = forwardRef<InputRef, InputProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return (
            <input
                className={classNames}
                {...restProps}
                ref={ref}
                type="password"
            />
        )
    },
)

export const NumberInput = forwardRef<InputRef, InputProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return (
            <input
                className={classNames}
                {...restProps}
                ref={ref}
                type="number"
            />
        )
    },
)

export const SearchInput = forwardRef<InputRef, InputProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return (
            <input
                className={classNames}
                {...restProps}
                ref={ref}
                type="search"
            />
        )
    },
)

export interface TextAreaProps
    extends React.ComponentPropsWithoutRef<'textarea'>,
        CommonFormElementProps,
        CommonElementProps,
        Partial<TextProps>,
        Partial<Screen<TextProps>>,
        Partial<PseudoState<TextProps>> {}

export type TextAreaRef = HTMLTextAreaElement
export const TextArea = forwardRef<TextAreaRef, TextAreaProps>(
    ({ children, ...props }, ref) => {
        const { classNames, ...restProps } = twClass(props)
        return <textarea className={classNames} {...restProps} ref={ref} />
    },
)
