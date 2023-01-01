import { Box } from '@/core'
import { Button } from '../'
export default {
    title: 'Library/Button/Button',
    component: Button,
}

export const Buttons = () => {
    return (
        <Box $direction="col" $gap="4">
            <Button type={'primary'} size={'large'} leftIcon="Add">
                Largeボタン
            </Button>
            <Button type={'primary'} size={'medium'} rightIcon="ArrowForward">
                Mediumボタン
            </Button>
            <Button
                type={'primary'}
                size={'small'}
                leftIcon="Add"
                rightIcon="ArrowForward"
            >
                Smallボタン
            </Button>
            <Button
                type={'primary'}
                size={'large'}
                rightIcon="ArrowForward"
                outline
            >
                Largeボタン
            </Button>
            <Button type={'primary'} size={'medium'} leftIcon="Add" outline>
                Mediumボタン
            </Button>
            <Button
                type={'primary'}
                size={'small'}
                rightIcon="ArrowForward"
                outline
            >
                Smallボタン
            </Button>
            <Button type={'secondary'} size={'large'} leftIcon="Add">
                Largeボタン
            </Button>
            <Button type={'secondary'} size={'medium'} rightIcon="ArrowForward">
                Mediumボタン
            </Button>
            <Button type={'secondary'} size={'small'} leftIcon="Add">
                Smallボタン
            </Button>
            <Button
                type={'secondary'}
                size={'large'}
                rightIcon="ArrowForward"
                outline
            >
                Largeボタン
            </Button>
            <Button type={'secondary'} size={'medium'} leftIcon="Add" outline>
                Mediumボタン
            </Button>
            <Button
                type={'secondary'}
                size={'small'}
                rightIcon="ArrowForward"
                outline
            >
                Smallボタン
            </Button>
        </Box>
    )
}
