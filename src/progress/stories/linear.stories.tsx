import { useEffect, useState } from 'react'
import { LinearProgress } from '../linear'

export default {
    title: 'Library/Progress/Linear',
    component: LinearProgress,
}

export const ALinearProgressBar = () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((progress) => {
                if (progress >= 1) {
                    return 0
                }
                return progress + 0.01
            })
        }, 100)
        return () => clearInterval(interval)
    }, [])
    return <LinearProgress progress={progress} />
}
