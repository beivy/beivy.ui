import { Box } from '../box'
it('', () => {
    const comp = () => {
        const a = true
        const str = 'm-2'
        return (
            <Box
                $margin={{
                    top: '2',
                }}
                md$margin="3"
                $width="4"
                $maxWidth="full"
                xl2$width="full"
                md$bgColor="gray-300"
            />
        )
    }
    console.log(comp)
})
