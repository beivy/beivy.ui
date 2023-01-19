import { useEffect, useState } from 'react'

export type StreamOption = {
    chunkSize?: number
}
export class StreamProcessor<T extends any> {
    private data: T[]
    private option: StreamOption
    private __errors: string[]
    private status: 'settled' | undefined
    private __idx: number
    private consumers: {
        name: string
        func: (data: T[]) => Promise<void>
    }[]
    constructor(opts: StreamOption) {
        this.data = []
        this.option = Object.assign(
            {
                chinkSize: 1,
            },
            opts,
        )
        this.consumers = []
        this.__errors = []
        this.status = undefined
        this.__idx = 0
    }

    addData(data: T[] | T) {
        const itemToAdd: T[] = Array.isArray(data) ? data : [data]
        Array.prototype.push.apply(this.data, itemToAdd)
    }

    registerConsumer(name: string, consumer: (data: T[]) => Promise<void>) {
        this.consumers.push({
            name,
            func: consumer,
        })
    }

    async process(progress?: (remain: number, error: string[]) => void) {
        if (this.status === 'settled') {
            if (progress) {
                return progress(this.remained(), this.errors())
            }
            return
        }
        let chunk = this.data.splice(0, this.option.chunkSize)
        while (chunk.length > 0) {
            const rsts = await Promise.allSettled(
                this.consumers.map((consumer) =>
                    consumer.func(chunk).catch((err) => {
                        const msg = `${this.__idx + 1}件目から${
                            this.option.chunkSize
                        }件データの処理中にエラーが起きました。`
                        console.warn(msg, err)
                        return Promise.reject(msg)
                    }),
                ),
            )

            rsts.forEach((rst) => {
                if (rst.status === 'rejected') {
                    this.__errors.push((rst as PromiseRejectedResult).reason)
                }
            })
            if (progress) {
                progress(this.remained(), this.errors())
            }
            chunk = this.data.splice(0, this.option.chunkSize)
            this.__idx = this.__idx + chunk.length
        }
        this.status = 'settled'
    }

    remained() {
        return this.data.length
    }

    errors() {
        return this.__errors
    }
}

export function useStream<T extends any>(
    data: T[] | null,
    options: StreamOption,
    consumer: (chunk: T[]) => Promise<void>,
    consumerName?: string,
) {
    const [progress, setProgress] = useState({
        processed: null as number | null,
        errors: [] as string[],
    })

    console.log('====>stream', data)
    useEffect(() => {
        if (!data) {
            return
        }
        const name = consumerName ?? consumer.name
        const stream = new StreamProcessor<T>(options)
        stream.addData(data)
        stream.registerConsumer(name, consumer)
        stream.process((remained, errors) => {
            setProgress({
                processed: data.length - remained,
                errors: [...errors],
            })
        })
    }, [data])

    return progress
}
