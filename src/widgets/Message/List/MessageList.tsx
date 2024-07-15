import Message from '../Message'
import { MessageType } from '@/entites/Message.type'
import { ProfileType } from '@/entites/profile.types'
import Loading from '@/shared/Loading/Loading'
import styles from "./MessageList.module.scss"
import { StorageUserType } from '@/features/useGetLocalStorageUser'
import { useEffect, useRef } from 'react'
import { scrollBlockDown } from '@/features/scrollBlockDown'

const MessageList = ({messages, user, check} : {messages: MessageType[], user?: ProfileType | '' | StorageUserType, check: any}) => {
    const scrollRef = useRef(null)

    useEffect(()=>{
        if(scrollRef?.current){
            scrollBlockDown(scrollRef)
        }
    }, [messages])

    return (
        <div className={styles.messagesWrapper} ref={scrollRef}>
            {user && user?.id ? (
                messages &&
                messages.map((el: any, i: number) => {
                    return (
                        <Message
                            check={check}
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
