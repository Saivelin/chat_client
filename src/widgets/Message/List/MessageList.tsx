import Message from '../Message'
import { MessageType } from '@/entites/Message.type'
import { ProfileType } from '@/entites/profile.types'
import Loading from '@/shared/Loading/Loading'
import styles from "./MessageList.module.scss"
import { StorageUserType } from '@/features/useGetLocalStorageUser'
import { useScrollDown } from '@/features/useScrollDown'

const MessageList = ({messages, user} : {messages: MessageType[], user?: ProfileType | '' | StorageUserType}) => {
    const {scrollRef} = useScrollDown()

    return (
        <div className={styles.messagesWrapper} ref={scrollRef}>
            {user && user?.id ? (
                messages &&
                messages.map((el: any) => {
                    return (
                        <Message
                            messages={el}
                            my={el.authorId == user?.id ? true : false}
                        />
                    )
                })
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default MessageList
