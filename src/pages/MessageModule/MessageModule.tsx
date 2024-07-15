'use client'

import Block from '@/shared/Block/Block'
import Container from '@/shared/Container/Container'
import Header from '@/widgets/Message/Header/Header'
import NewMessage from '@/widgets/Message/NewMessage/NewMessage'
import { useEffect, useState } from 'react'
import { ProfileType } from '@/entites/profile.types'
import { useGetChatByChatIdQuery } from '@/redux/services/chatApi'
import { useMessagesSocket } from '@/features/useMessagesSocket'
import { useGetLocalStorageUser } from '@/features/useGetLocalStorageUser'
import MessageList from '@/widgets/Message/List/MessageList'
import messageSend from "@/features/sendMessage"
import checkMessage from '@/features/checkMessage'
import { useIsAuthorized } from '@/features/useIsAuthorized'

const MessageModule = ({ id }: { id: number }) => {
    const { data: chat } = useGetChatByChatIdQuery(+id)
    const [person, setPerson] = useState<ProfileType | null>(null)
    const {user} = useGetLocalStorageUser()
    const {messages, setMessages, socket} = useMessagesSocket()
    useIsAuthorized()

    useEffect(() => {
        if (chat && chat?.length && chat?.length > 0 && chat[0] && user && user?.id) {
            setPerson(chat[0].members.find((p: ProfileType) => p.id != user?.id))
            setMessages(chat[0].messages)
        }
    }, [chat])

    const sendMessage = (messageText: string, files?: string[]) => {
        messageSend({user, socket, id, messageText, files: files || []})
    }

    const check = (messageId: number) => {
        checkMessage({socket, id: messageId})
    }

    return (
        <Container>
            <Block>
                {person ? <Header profile={person} /> : null}
                <MessageList user={user} messages={messages} check={check}/>
                <NewMessage sendMessage={sendMessage}/>
            </Block>
        </Container>
    )
}

export default MessageModule
