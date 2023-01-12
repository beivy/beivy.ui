import { FileUploader } from '../fileUploader'

export default {
    title: 'Library/FileUploader/common',
    component: FileUploader,
}

export const AFileUpload = () => {
    return <FileUploader $width="full" $height="full"></FileUploader>
}
