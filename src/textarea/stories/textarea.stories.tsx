import { FormProvider, Inputs, SubmitHandler, useForm } from 'react-hook-form'
import { Textarea } from '..'
export default {
    title: 'Library/textarea',
    component: Textarea,
}

type Inputs = {
    ['evt#user1@test_com']: string
}

export const TextareaWithForm = () => {
    const methods = useForm<Inputs>({
        defaultValues: {
            ['evt#user1@test_com']: 'このメッセージを贈りましょう',
        },
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Textarea
                    rules={{ required: 'このフィルドに入力が必須です' }}
                    name="evt#user1@test_com"
                    label="メッセージ"
                    defaultValue="このメッセージを贈りましょう"
                    icon="Send"
                />
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    )
}

export const ATextarea = () => {
    return (
        <Textarea
            placeholder="ありがとうを送りましょ"
            name="#evt#user2@test.com"
            icon="Send"
        />
    )
}
