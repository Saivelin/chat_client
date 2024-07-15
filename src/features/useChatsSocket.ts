import { MessageType } from '@/entites/Message.type'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { api_endpoint } from './constants/api'

export const useChatsSocket = () => {
    const socket = io(api_endpoint)
    const [messages, setMessages] = useState<MessageType[]>([])
    const [chatsWithMessages, setChatsWithMessages] = useState<number[]>([])
    useEffect(() => {
        let onMessage = (data: any) => {
            setMessages((prevMessages: any) => [...prevMessages, data])
        }

        socket.on('onMessage', onMessage)

        return () => {
            socket.off('onMessage', onMessage)
        }
    }, [socket])

    useEffect(()=>{
        messages.map((el)=>{
            if(el?.chatId){
                setChatsWithMessages([...chatsWithMessages, el?.chatId])
            }
        })
    }, [messages])

    return {socket, chatsWithMessages}
}
