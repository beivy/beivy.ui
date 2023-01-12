import { CSVFileUploader } from '../csvFileUploader'

export default {
    title: 'Library/FileUploader/csv',
    component: CSVFileUploader,
}

export const ACSVFileUploader = () => {
    const onData = (data: any[]) => {
        return new Promise<void>((resolve, reject) => {
            console.log('===>consuming data', data)
            setTimeout(() => {
                resolve()
            }, 1000)
        })
    }
    return <CSVFileUploader consumer={onData} option={{ chunkSize: 1 }} />
}
