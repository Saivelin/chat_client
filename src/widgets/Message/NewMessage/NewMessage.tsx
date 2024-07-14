"use client"

import SendRoundedIcon from '@mui/icons-material/SendRounded'
import styles from './NewMessage.module.scss'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import Input from '@/shared/Input/Input'

const NewMessage = ({sendMessage} : {sendMessage: any}) => {
    const [value, setValue] = useState<string>("")

    const send = () => {
        sendMessage(value)
        setValue("")
    }

    return (
        <div className={styles.wrapper}>
            <Input
                value={value}
                onChange={(e : ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)}
                className={styles.input}
                placeholder='Type something...'
                rows={1}
            />
            <SendRoundedIcon className={styles.btn} onClick={send}/>
        </div>
    )
}

export default NewMessage
