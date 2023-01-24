import { H3, LI, UL } from '@/be.html'
import { Button } from '@/button'
import { Box } from '@/core'
import { DevControlStyleProps } from '@/core/be.core-types'
import { useTheme } from '@/hooks'
import { StreamOption, useStream } from '@/hooks/useStream'
import { LinearProgress } from '@/progress'
import { parse as csvParse, ParseError } from 'papaparse'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FileUploader } from './fileUploader'

export interface CSVFileUploaderProps<T> extends DevControlStyleProps {
    option: StreamOption
    consumer: (data: T[]) => Promise<any>
    onFileUploadStart?: (data: T[] | null) => Promise<void>
    onFileUploadCompleted?: (data: T[] | null) => Promise<void>
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
    onFileUploadStart,
    onFileUploadCompleted,
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
    const [beforeError, setBeforeError] = useState<string | null>(null)
    const [completedError, setCompletedError] = useState<string | null>(null)

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
        reader.onload = async () => {
            const csvString = reader.result
            if (!csvString) {
                console.log(`empty file`)
                return
            }
            const parseResult = csvParse<T>(csvString as string, {
                header: true,
                skipEmptyLines: true,
                dynamicTyping: true,
            })
            if (parseResult.errors.length > 0) {
                setParseError(parseResult.errors)
                setStatus(FileUploadStatus.parseError)
                return
            }
            setStatus(FileUploadStatus.loading)
            if (!!onFileUploadStart) {
                try {
                    await onFileUploadStart(data)
                } catch (err) {
                    setBeforeError((err as any).message || '')
                }
            }
            setData(parseResult.data)
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
        if (
            (errors && errors.length > 0) ||
            beforeError !== null ||
            completedError !== null
        ) {
            setStatus(FileUploadStatus.failed)
        } else if (processed === data?.length) {
            setStatus(FileUploadStatus.completed)
        }
    }, [processed, beforeError, completedError, errors])

    useEffect(() => {
        let timeoutHandler: any
        if (status === FileUploadStatus.completed) {
            timeoutHandler = setTimeout(reset, 3000)
        }
        return () => {
            if (timeoutHandler) {
                clearTimeout(timeoutHandler)
            }
        }
    }, [status])

    useEffect(() => {
        if (
            status === FileUploadStatus.completed ||
            status === FileUploadStatus.failed
        ) {
            if (!!onFileUploadCompleted) {
                onFileUploadCompleted(data)
            }
        }
    }, [status])

    const errorContents = useMemo(() => {
        return (
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
                        閉じる
                    </Button>
                </H3>

                <UL {...theme.ui.error.content}>
                    {beforeError !== null && (
                        <LI key="before_load_error">
                            ファイルロードの前処理にエラーがありました(
                            {beforeError})
                        </LI>
                    )}
                    {completedError !== null && (
                        <LI key="completed_load_error">
                            ファイルロードの後処理にエラーがありました(
                            {completedError})
                        </LI>
                    )}
                    {errors.map((err, idx) => {
                        return <LI key={`err_${idx}`}>{err}</LI>
                    })}
                </UL>
            </>
        )
    }, [errors, beforeError, completedError])

    const counter =
        processed && processed > 0 ? `${processed} / ${data?.length}` : ''
    return (
        <Box $direction="col" $gap="1">
            <>
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
                                return (
                                    <LI key={`${err.code}`}>{err.message}</LI>
                                )
                            })}
                        </UL>
                    </Box>
                )}
                {!!(
                    status &&
                    FileUploadStatus.loading | FileUploadStatus.completed
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
                {status === FileUploadStatus.failed && errorContents}
            </>
        </Box>
    )
}
