import { Div } from '@/be.html'

export interface LinearProgressProps {
    progress: number
}
export const LinearProgress = ({
    progress = 0,
    ...props
}: LinearProgressProps) => {
    // return (
    //     <div className="bg-neutral-200 h-2 w-full rounded-full overflow-hidden">
    //         <div
    //             className="bg-primary-400  h-2 rounded-full"
    //             style={{ width: '50%' }}
    //         ></div>
    //     </div>
    // )

    return (
        <Div
            $bgColor="neutral-200"
            $height="2"
            $width="full"
            $borderRadius="full"
            $overflow="hidden"
        >
            <Div
                $bgColor="primary-400"
                $height="2"
                lg$borderRadius="full"
                style={{
                    width: progress * 100 + '%',
                }}
            />
        </Div>
    )
}
