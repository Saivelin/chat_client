'use client'

import SendRoundedIcon from '@mui/icons-material/SendRounded'
import styles from './NewMessage.module.scss'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import Input from '@/shared/Input/Input'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import AddSomeFiles from '@/widgets/AddSomeFiles/AddSomeFiles'
import { useAddSomeFiles } from '@/features/useAddSomeFiles'

const NewMessage = ({ sendMessage }: { sendMessage: any }) => {
    const [value, setValue] = useState<string>('')
    const [files, setFiles] = useState<string[]>([])
    const { inputRef, handleOnChange, onChooseFile, removeFile, clearFiles } = useAddSomeFiles(setFiles)

    const send = () => {
        sendMessage(value, files)
        setFiles([])
        clearFiles()
        setValue('')
    }

    return (
        <div className={styles.wrapper}>
            <Input
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                className={styles.input}
                placeholder='Type something...'
                rows={1}
            />
            <AddSomeFiles
                inputRef={inputRef}
                handleOnChange={handleOnChange}
                onChooseFile={onChooseFile}
                setter={setFiles}
                InputButton={<AttachFileIcon className={`${styles.btn} ${styles.addFileButton}`} />}
            />
            <SendRoundedIcon
                className={`${styles.btn} ${styles.addMessageButton}`}
                onClick={send}
            />
        </div>
    )
}

export default NewMessage
