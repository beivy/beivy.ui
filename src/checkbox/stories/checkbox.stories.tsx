import { useEffect, useRef } from 'react'
import { Checkbox } from '../'
import { ThemeProvider } from '../../core/themeProvider'

export default {
    title: 'Library/Checkbox',
    component: Checkbox,
}

export const CheckboxWithIndeterminateState = () => {
    return (
        <ThemeProvider>
            <Checkbox
                id="tokyo"
                name="city"
                label="東京"
                description="日本の首都"
                indeterminate={true}
                $c__resize="fillContainer"
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
                id="tokyo"
                label="東京"
                name="city"
                value="tokyo"
                description="日本の首都"
                ref={ref}
            ></Checkbox>
        </ThemeProvider>
    )
}
