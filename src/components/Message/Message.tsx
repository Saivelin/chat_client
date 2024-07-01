import styles from "./Message.module.scss"
import { MessageType } from "./Message.type"

const Message = ({messages} : {messages: MessageType}) => {
    return <div>{messages.text}</div>
}

export default Message
