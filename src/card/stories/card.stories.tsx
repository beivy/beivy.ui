import { List } from '@/be.headless'
import { NumInfo } from '@/numInfo'
import { Card, CardData, CardStyleFunc } from '..'
import { Avatar, Box, Button } from '../..'
export default {
    title: 'Library/Card',
    component: Card,
}

export const ACard = () => {
    const data = {
        title: 'バレンタイン2023',
        subtitle: 'バクハツ日2023/02/14',
        description: `## テストタイトル
そういう元気なら結構なものだ、**私は君**の_平生_の主張を聞かされました。

お前のいうようなもの[Google](https://www.google.com)の宅へ来て、曲り角で分れるのが先生に済まないような話をＫに対する私の感情が土台になっていた。

先生は嘘を吐かない方でしょう奥さんは何のためだと[主張するのですから](https://www.google.com/search?q=%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%83%86%E3%82%B9%E3%83%88%E6%A4%9C%E7%B4%A2&oq=%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%83%86%E3%82%B9%E3%83%88%E6%A4%9C%E7%B4%A2&aqs=chrome..69i57j0i546l5.4379j0j15&sourceid=chrome&ie=UTF-8)、
すべてが私に対するお嬢さんのすべてを[忘れたように思われた](https://www.google.com/search?q=%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%83%86%E3%82%B9%E3%83%88%E6%A4%9C%E7%B4%A2&oq=%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%83%86%E3%82%B9%E3%83%88%E6%A4%9C%E7%B4%A2&aqs=chrome..69i57j0i546l5.4379j0j15&sourceid=chrome&ie=UTF-8)。`,
        extra: '開催中',
    }
    const actions = (
        <>
            <Button rightIcon="ArrowForward" type="primary">
                メッセージを送る
            </Button>
        </>
    )
    return <Card data={data} actions={actions} markdown></Card>
}

export const ACardWithExtraAvatar = () => {
    const data = {
        title: 'バレンタイン2023',
        subtitle: 'バクハツ日2023/02/14',
        description:
            'そういう元気なら結構なものだ、私は君の平生の主張を聞かされました。お前のいうようなものの宅へ来て、曲り角で分れるのが先生に済まないような話をＫに対する私の感情が土台になっていた。先生は嘘を吐かない方でしょう奥さんは何のためだと主張するのですから、すべてが私に対するお嬢さんのすべてを忘れたように思われた。',
        extra: <Avatar alt="鈴木" />,
    }
    return <Card data={data}></Card>
}

export const AStyledCard = () => {
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
