'use client'

import UploadRoundedIcon from '@mui/icons-material/UploadRounded'
import { ChangeEvent, useRef, useState } from 'react'
import styles from './ImageInput.module.scss'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import { useUploadImage } from '@/helpers/useUploadImage'

const ImageInput = ({setter, bg} : {setter?: any, bg?: any}) => {
    const inputRef = useRef<any>()

    const [selectedFile, setSelectedFile] = useState<any>(null)

    const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0])
            let name = await useUploadImage(e.target.files[0])
            setter ? setter(name) : null
        }
    }

    const onChooseFile = () => {
        inputRef.current.click()
    }

    const removeFile: () => void = () => {
        setSelectedFile(null)
    }

    return (
        <div>
            <input
                type='file'
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={handleOnChange}
            />
            <button
                style={bg ? {background: `url("${process.env.NEXT_PUBLIC_API_UPLOADS}/${bg}")`, backgroundSize: "cover", backgroundPosition: "50%", backgroundRepeat: "no-repeat"} : {}}
                type='button'
                className={styles.fileBtn}
                onClick={onChooseFile}
            >
                <UploadRoundedIcon className={styles.icon} /> Upload File
            </button>
            {selectedFile ? (
                <div className={styles.selectedFile}>
                    <p>{selectedFile.name}</p>
                    <button type='button' onClick={removeFile}>
                        <DeleteRoundedIcon />
                    </button>
                </div>
            ) : null}
        </div>
    )
}

export default ImageInput
