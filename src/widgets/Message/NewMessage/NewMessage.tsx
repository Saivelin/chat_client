"use client"

import SendRoundedIcon from '@mui/icons-material/SendRounded'
import styles from './NewMessage.module.scss'
import { useCallback, useEffect, useState } from 'react'

const NewMessage = ({sendMessage} : {sendMessage: any}) => {
    const [value, setValue] = useState<string>("")

    const send = () => {
        sendMessage(value)
        setValue("")
    }

    return (
        <div className={styles.wrapper}>
            <textarea
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                className={styles.input}
                placeholder='Type something...'
                rows={1}
            />
            <SendRoundedIcon className={styles.btn} onClick={send}/>
        </div>
    )
}

export default NewMessage
