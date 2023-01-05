import { Box } from '@/core'
import { TestContainer } from '@/stories/utils'
import { Navigation } from '../'
import { ThemeProvider } from '../../core/themeProvider'

export default {
    title: 'Library/Menu/Navigation',
    component: Navigation,
}

export const ANavigationMenu = () => {
    return (
        <TestContainer
            style={{ backgroundColor: 'rgba(0,0,0, 0.2)', padding: '4px' }}
        >
            <ThemeProvider>
                <Box $direction="row" $alignItems="center">
                    <Navigation
                        items={[
                            {
                                name: 'home',
                                href: '#home',
                                label: 'ホーム',
                                iconType: 'Home',
                            },
                            {
                                name: 'event',
                                href: '#event',
                                label: 'イベント',
                                iconType: 'Event',
                            },
                            {
                                name: 'user',
                                href: '#user',
                                label: 'ユーザ',
                                iconType: 'Group',
                            },
                        ]}
                        activeItemIndex={2}
                    />
                </Box>
            </ThemeProvider>
        </TestContainer>
    )
}
