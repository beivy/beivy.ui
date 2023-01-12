import { ThemeProvider } from '@/core'
import { TestContainer } from '@/stories/utils'
import { Menu } from '../'

export default {
    title: 'Library/Menu/Menu',
    component: Menu,
}

export const ADropdownMenu = () => {
    return (
        <TestContainer
            style={{ backgroundColor: 'rgba(0,0,0, 0.2)', height: '100%' }}
        >
            <ThemeProvider>
                <Menu
                    label="メニュー"
                    items={[
                        {
                            name: 'home',
                            href: '#',
                            label: 'ホーム',
                            iconType: 'Home',
                        },
                        {
                            name: 'event',
                            href: '#',
                            label: 'イベント',
                            iconType: 'Event',
                        },
                        {
                            name: 'users',
                            href: '#',
                            label: 'ユーザ',
                            iconType: 'Group',
                        },
                    ]}
                />
            </ThemeProvider>
        </TestContainer>
    )
}
