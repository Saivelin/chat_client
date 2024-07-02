'use client'

import Block from '@/components/Block/Block'
import Container from '@/components/Container/Container'
import Header from '@/components/Message/Header/Header'
import Message from '@/components/Message/Message'
import { messages, profile } from './MessageModule.contants.moks'
import NewMessage from '@/components/Message/NewMessage/NewMessage'
import styles from './MessageModule.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { ProfileType } from '@/components/Profile/profile.types'
import { MessageType } from '@/components/Message/Message.type'
import { useGetChatByChatIdQuery } from '@/redux/services/chatApi'
import { useLocalStorage } from 'usehooks-ts'
import io from 'socket.io-client'

const socket = io('http://localhost:3032/')

const MessageModule = ({ id }: { id: number }) => {
    const { data: chat } = useGetChatByChatIdQuery(+id)
    const [person, setPerson] = useState<ProfileType | null>(null)
    const [messages, setMessages] = useState<MessageType[]>([])
    const [user, setUser, removeUser] = useLocalStorage<
        { name: string; photo: string; surname: string; id: number } | ''
    >('user', '')

    useEffect(() => {
        if (chat && chat?.length && chat?.length > 0 && chat[0] && user && user?.id) {
            setPerson(chat[0].members.find((p: ProfileType) => p.id != user?.id))
            setMessages(chat[0].messages)
        }
    }, [chat])

    useEffect(() => {
        console.log(socket)
        let onMessage = (data : any) => {
            console.log(`onMessage event`)
            setMessages((prevMessages : any) => [...prevMessages, data])
        }
        socket.on('onMessage', onMessage)

        return ()=>{
            socket.off('onMessage', onMessage)
        }
    }, [socket])

    useEffect(() => {
        console.log(messages)
    }, [messages])

    const sendMessage = (messageText: string) => {
        if(user && user?.id){
            socket.emit("newMessage", {chatId: +id, authorId: +user?.id, text: messageText})
        }
    }

    return (
        <Container>
            <Block>
                {person ? <Header profile={person} /> : null}
                <div className={styles.messagesWrapper}>
                    {user && user?.id
                        ? messages &&
                          messages.map((el: any) => {
                              return (
                                  <Message
                                    messages={el}
                                    my={el.authorId == user?.id ? true : false}
                                  />
                              )
                          })
                        : null}
                </div>
                <NewMessage sendMessage={sendMessage}/>
            </Block>
        </Container>
    )
}

export default MessageModule
