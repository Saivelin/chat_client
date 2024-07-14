import styles from './Message.module.scss'
import { MessageType } from '../../entites/Message.type'
import { RefObject } from 'react';

const Message = ({ messages, my, ref }: { messages: MessageType; my: boolean, ref?: any }) => {
    return (
        <div className={`${styles.wrapper} ${my == true ? styles.wrapper_my : styles.wrapper_other}`} ref={ref ? ref : null}>
            <p className={`${styles.message} ${my == true ? styles.message_my : styles.message_other}`}>
                {messages.text}
            </p>
        </div>
    )
}

export default Message
