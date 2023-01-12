import { useEffect, useState } from 'react'

export function useOnceEffect(
    fn?: () => () => void | void,
    predicate?: () => boolean,
    dependencies?: any[],
) {
    const [executed, setExecuted] = useState(false)
    useEffect(() => {
        if (!executed && (predicate ? predicate() : true)) {
            setExecuted(true)
            return fn ? fn() : undefined
        }
    }, [fn, predicate, ...(dependencies ?? [])])
}
