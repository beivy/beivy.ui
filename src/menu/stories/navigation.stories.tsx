import { List } from '@/be.headless'
import { Button } from '@/button'
import { Card, CardData, CardStyleFunc } from '@/card'
import { Box } from '@/core'
import { NumInfo } from '@/numInfo'
import { TestContainer } from '@/stories/utils'
import { Navigation } from '../'
import { ThemeProvider } from '../../core/themeProvider'

export default {
    title: 'Library/Menu/Navigation',
    component: Navigation,
}

const AStyledCard = () => {
    const activeData = {
        title: 'バレンタイン2023',
        subtitle: 'バクハツ日2023/02/14',
        description:
            'そういう元気なら結構なものだ、私は君の平生の主張を聞かされました。お前のいうようなものの宅へ来て、曲り角で分れるのが先生に済まないような話をＫに対する私の感情が土台になっていた。先生は嘘を吐かない方でしょう奥さんは何のためだと主張するのですから、すべてが私に対するお嬢さんのすべてを忘れたように思われた。',
        extra: '開催中',
        status: 'active',
    }
    const closedData = {
        title: 'バレンタイン2023',
        subtitle: 'バクハツ日2023/02/14',
        description:
            'そういう元気なら結構なものだ、私は君の平生の主張を聞かされました。お前のいうようなものの宅へ来て、曲り角で分れるのが先生に済まないような話をＫに対する私の感情が土台になっていた。先生は嘘を吐かない方でしょう奥さんは何のためだと主張するのですから、すべてが私に対するお嬢さんのすべてを忘れたように思われた。',
        extra: '終了済',
        status: 'closed',
    }
    const actions = (
        <>
            <Button rightIcon="ArrowForward" type="primary">
                メッセージを送る
            </Button>
        </>
    )

    const styleFuncFactory = (active: boolean) => {
        const selectedStyle = active
            ? ({
                  $ringWidth: '2',
                  $ringOffsetWidth: '2',
                  $ringColor: 'primary-200',
              } as ReturnType<CardStyleFunc>)
            : ({} as ReturnType<CardStyleFunc>)
        const styleFunc = (data: CardData) => {
            return data.status === 'active'
                ? ({
                      header: {
                          $bgColor: 'success-100',
                      },
                      border: {
                          $borderWidth: '1',
                          $borderColor: 'primary-200',
                          ...selectedStyle,
                      },
                  } as ReturnType<CardStyleFunc>)
                : ({
                      border: { ...selectedStyle },
                  } as ReturnType<CardStyleFunc>)
        }
        return styleFunc
    }

    return (
        <Box $margin="0">
            <List selectedItemIndex={0}>
                <Box $direction="col" $gap="4" $padding="1">
                    <List.Item>
                        {({ active }) => {
                            return (
                                <Card
                                    data={activeData}
                                    style={styleFuncFactory(active)}
                                    actions={actions}
                                >
                                    <Box
                                        $gap="2"
                                        $direction="col"
                                        md$direction="row"
                                    >
                                        <NumInfo
                                            num={199}
                                            description="あなたが送ったメッセージ"
                                            style={{
                                                $bgColor: 'success-200',
                                            }}
                                        />
                                        <NumInfo
                                            num={199}
                                            description="あなたがメッセージを送る送信推奨の宛先"
                                            style={{
                                                $bgColor: 'success-200',
                                            }}
                                        />
                                    </Box>
                                </Card>
                            )
                        }}
                    </List.Item>
                    <List.Item>
                        {({ active }) => {
                            return (
                                <Card
                                    data={closedData}
                                    style={styleFuncFactory(active)}
                                    actions={actions}
                                >
                                    <Box
                                        $gap="2"
                                        $direction="col"
                                        md$direction="row"
                                    >
                                        <NumInfo
                                            num={199}
                                            description="あなたが送ったメッセージ"
                                            style={{
                                                $bgColor: 'neutral-200',
                                            }}
                                            actions={
                                                <Button
                                                    size="small"
                                                    type="primary"
                                                    outline
                                                >
                                                    参照
                                                </Button>
                                            }
                                        />
                                        <NumInfo
                                            num={199}
                                            description="あなたがメッセージを送る送信推奨の宛先"
                                            style={{
                                                $bgColor: 'neutral-200',
                                            }}
                                            actions={
                                                <Button
                                                    size="small"
                                                    type="primary"
                                                    outline
                                                    onClick={() => {
                                                        alert(
                                                            'clicked on あなたがメッセージを送る送信推奨の宛先 ',
                                                        )
                                                    }}
                                                >
                                                    参照
                                                </Button>
                                            }
                                        />
                                    </Box>
                                </Card>
                            )
                        }}
                    </List.Item>
                </Box>
            </List>
        </Box>
    )
}

export const ANavigationMenu = () => {
    return (
        <TestContainer
            style={{ backgroundColor: 'rgba(0,0,0, 0.2)', padding: '4px' }}
        >
            <ThemeProvider>
                <Box $direction="col" $gap="4">
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
                    <AStyledCard />
                </Box>
            </ThemeProvider>
        </TestContainer>
    )
}
