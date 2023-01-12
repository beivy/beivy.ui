import { H3, LI, UL } from '@/be.html'
import { Button } from '@/button'
import { Box } from '@/core'
import { CommonElementProps } from '@/core/be.core-types'
import { useTheme } from '@/hooks'
import { StreamOption, useStream } from '@/hooks/useStream'
import { LinearProgress } from '@/progress'
import { parse as csvParse, ParseError } from 'papaparse'
import { useCallback, useEffect, useState } from 'react'
import { FileUploader } from './fileUploader'

export interface CSVFileUploaderProps<T> extends CommonElementProps {
    option: StreamOption
    consumer: (data: T[]) => Promise<void>
    consumerName?: string
}

export enum FileUploadStatus {
    prepared = 0x00,
    loading = 0x01,
    parseError = 0x02,
    completed = 0x04,
    failed = 0x08,
}
export const CSVFileUploader = <T extends Record<string, unknown>>({
    option,
    consumer,
    consumerName,
    ...props
}: CSVFileUploaderProps<T>) => {
    const theme = useTheme()
    const [data, setData] = useState<T[] | null>(null)
    const [file, setFile] = useState<File | null>(null)
    const [status, setStatus] = useState<FileUploadStatus>(
        FileUploadStatus.prepared,
    )
    const [parseError, setParseError] = useState<ParseError[] | null>(null)

    const reset = () => {
        setData(null)
        setFile(null)
        setParseError(null)
        setStatus(FileUploadStatus.prepared)
    }

    const onFiles = useCallback((file?: File[] | null) => {
        const reader = new FileReader()
        if (!file || file.length < 1) {
            console.log('empty file')
            return
        }
        setFile(file[0])

        reader.readAsText(file[0])
        reader.onload = () => {
            const csvString = reader.result
            if (!csvString) {
                console.log(`empty file`)
                return
            }
            const parseResult = csvParse<T>(csvString as string, {
                header: true,
            })
            if (parseResult.errors.length > 0) {
                setParseError(parseResult.errors)
                setStatus(FileUploadStatus.parseError)
                return
            }
            setData(parseResult.data)
            setStatus(FileUploadStatus.loading)
        }
        reader.onprogress = (e: ProgressEvent) => {}
        reader.onerror = (err: ProgressEvent) => {
            console.log(err)
        }
        reader.onabort = (abortEvt: ProgressEvent) => {
            console.log(abortEvt)
        }
    }, [])

    const { processed, errors } = useStream(
        data,
        option,
        consumer,
        consumerName,
    )

    useEffect(() => {
        if (processed === data?.length) {
            setStatus(FileUploadStatus.completed)
            setTimeout(reset, 3000)
        }
        if (errors && errors.length > 1) {
            setStatus(FileUploadStatus.failed)
        }
    }, [processed, errors])

    const counter =
        processed && processed > 0 ? `${processed} / ${data?.length}` : ''
    return (
        <Box $direction="col" $gap="1">
            <FileUploader
                {...props}
                onFileAccepted={onFiles}
                disabled={status !== FileUploadStatus.prepared}
            />

            {parseError && (
                <Box $direction="col" $gap="1">
                    <H3 {...theme.ui.error.title}>
                        Oops: CSVパースエラー:{' '}
                        <Button
                            type="secondary"
                            onClick={reset}
                            size="small"
                            outline
                        >
                            リトライ
                        </Button>
                    </H3>

                    <UL {...theme.ui.error.content}>
                        {parseError.map((err) => {
                            return <LI key={`${err.code}`}>{err.message}</LI>
                        })}
                    </UL>
                </Box>
            )}
            {!!(
                status && FileUploadStatus.loading | FileUploadStatus.completed
            ) && (
                <>
                    <H3 {...theme.typography[theme.ui.caption]}>
                        ファイル（ {file?.name || ''}）アップロード中　
                        {counter}
                    </H3>
                    <LinearProgress
                        progress={
                            processed != null && data != null
                                ? processed / data.length
                                : 0
                        }
                    />
                </>
            )}
            {status === FileUploadStatus.failed && (
                <>
                    <H3 {...theme.ui.error.title}>
                        Oops: ファイル（{file?.name || ''}
                        ）アップロード中にエラーがありました。
                        <Button
                            type="secondary"
                            onClick={reset}
                            size="small"
                            outline
                        >
                            リトライ
                        </Button>
                    </H3>

                    <UL {...theme.ui.error.content}>
                        {errors.map((err, idx) => {
                            return <LI key={`err_${idx}`}>{err}</LI>
                        })}
                    </UL>
                </>
            )}
        </Box>
    )
}
