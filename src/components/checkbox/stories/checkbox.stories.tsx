import { useEffect, useRef } from 'react'
import { Checkbox } from '../'
import ThemeProvider from '../../core/themeProvider'

export default {
    title: 'Library/Checkbox',
    component: Checkbox,
}

export const CheckboxWithIndeterminateState = () => {
    return (
        <ThemeProvider>
            <Checkbox
                id="comments"
                label="comment"
                description="receive notification for the comment."
                indeterminate={true}
            ></Checkbox>
        </ThemeProvider>
    )
}

export const UseRefToAddEventListener = () => {
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
        const listener = (e: any) => {
            const target = e.target
            alert(
                `${target.id}: ${target.name} = ${target.value}, ${target.checked}`,
            )
        }
        if (ref && ref.current) {
            ref.current.addEventListener('change', listener)
        }
        return () => {
            if (ref && ref.current) {
                ref.current.removeEventListener('change', listener)
            }
        }
    }, [ref.current])

    return (
        <ThemeProvider>
            <Checkbox
                id="comments"
                label="Check box"
                name="notifications"
                value="comments"
                description="that should be focus when is was loaded"
                ref={ref}
            ></Checkbox>
        </ThemeProvider>
    )
}
