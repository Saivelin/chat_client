import styles from './Message.module.scss'
import { MessageType } from './Message.type'

const Message = ({ messages, my }: { messages: MessageType; my: boolean }) => {
    return (
        <div className={`${styles.wrapper} ${my == true ? styles.wrapper_my : styles.wrapper_other}`}>
            <p className={`${styles.message} ${my == true ? styles.message_my : styles.message_other}`}>
                {messages.text}
            </p>
        </div>
    )
}

export default Message
