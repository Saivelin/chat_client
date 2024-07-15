import styles from './Message.module.scss'
import { MessageType } from '../../entites/Message.type'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import { useEffect } from 'react'
import { useCheckMessageMutation } from '@/redux/services/chatApi'
import { useGetLocalStorageUser } from '@/features/useGetLocalStorageUser'

const Message = ({ messages, my, ref, check }: { messages: MessageType; my: boolean; ref?: any, check: any }) => {
    const {user} = useGetLocalStorageUser()

    useEffect(() => {
        if (messages.checked === false && user && user?.id !== messages.authorId) {
            check(messages.id)
        }
    }, [])

    return (
        <div
            className={`${styles.wrapper} ${my == true ? styles.wrapper_my : styles.wrapper_other}`}
            ref={ref ? ref : null}
        >
            <div className={`${styles.message} ${my == true ? styles.message_my : styles.message_other}`}>
                {messages.checked === false ? (
                    <RadioButtonUncheckedIcon className={styles.status} />
                ) : (
                    <RadioButtonCheckedIcon className={styles.status} />
                )}
                {messages?.text ? <p>{messages.text}</p> : null}
                {messages?.files && messages?.files.length > 0 ? (
                    <div className={styles.imagesWrapper}>
                        {messages?.files &&
                            messages.files.map(el => {
                                return (
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_API_UPLOADS}/${el}`}
                                        alt=''
                                    />
                                )
                            })}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Message
