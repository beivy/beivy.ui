import { Column, Container, Row } from '@/components'
export default () => {
    return (
        <>
            <Container height="h-full" center>
                <Column bgColor="bg-neutral-50" width="w-full" height="h-full">
                    <Row
                        bgColor="bg-primary-500"
                        width="w-full"
                        height="h-10"
                        justifyItems="justify-items-end"
                        alignItems="items-center"
                        justifyContent="justify-between"
                        margin={2}
                        gutter={2}
                    >
                        <div className="w-60 h-6 bg-ext-indigo-50 bg-opacity-60"></div>
                        <div className="w-60 h-6 bg-ext-indigo-50"></div>
                        <div className="w-60 h-6 bg-ext-indigo-50"></div>
                        <div className="w-60 h-6 bg-ext-indigo-50"></div>
                    </Row>
                    <Row
                        width="w-full"
                        height="h-full"
                        bgColor="bg-ext-purple-200"
                    >
                        <Column
                            width="w-60"
                            bgColor="bg-semantic-warning-200"
                        ></Column>
                        <Column
                            width="w-full"
                            bgColor="bg-ext-purple-400"
                        ></Column>
                    </Row>
                </Column>
            </Container>
        </>
    )
}
