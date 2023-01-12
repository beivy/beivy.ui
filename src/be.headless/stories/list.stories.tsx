import { Link } from '@/be.html'
import { Box } from '@/core'
import { BackgroundProps, BorderProps } from '@/core/be.core-types'
import { TestContainer } from '@/stories/utils'
import { List } from '../'

export default {
    title: 'Library/Headless/List',
    component: List,
}

export const AListComponent = () => {
    const activeStyle = (active: boolean) => {
        return active
            ? ({
                  $bgColor: 'primary-100',
              } as BackgroundProps)
            : {}
    }
    const selectedStyle = (selected: boolean) => {
        return selected
            ? ({
                  $borderColor: 'primary-300',
                  $borderWidth: {
                      bottom: '2',
                  },
              } as BorderProps)
            : {}
    }
    return (
        <TestContainer>
            <List as="div">
                <List.Item>
                    {({ active, selected }) => {
                        return (
                            <Box
                                $direction="col"
                                {...activeStyle(active)}
                                {...selectedStyle(selected)}
                            >
                                <Link href="#11">Item1 - Link1</Link>
                                <Link href="#12">Item1 - Link2</Link>
                            </Box>
                        )
                    }}
                </List.Item>
                <List.Item>
                    {({ active, selected }) => {
                        return (
                            <Box
                                $direction="col"
                                {...activeStyle(active)}
                                {...selectedStyle(selected)}
                            >
                                <Link href="#21">Item2 - Link1</Link>
                                <Link href="#22">Item2 - Link2</Link>
                            </Box>
                        )
                    }}
                </List.Item>
            </List>
        </TestContainer>
    )
}
