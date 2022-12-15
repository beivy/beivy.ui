import { Grid } from '..'

export default {
    title: 'Library/Core/Grid',
    component: Grid,
}

const Item = Grid.Item

export const CommonGrid = () => {
    return (
        <Grid
            $width="screen"
            $height="full"
            $rows="4"
            $cols="12"
            $gap={{
                x: '4',
                y: '4',
            }}
            $bgColor="neutral-100"
        >
            <Item $bgColor="ext-rose-400" $colSpan="2" />
            <Item $bgColor="ext-rose-400" $colSpan="2" />
            <Item $bgColor="ext-rose-400" $colSpan="2" />
            <Item $bgColor="ext-rose-400" $rowSpan="2" $colSpan="10" />
            {/* <Item $bgColor="ext-rose-500" $rowStart="2" $rowSpan="2" /> */}
        </Grid>
    )
}
