import { MessageType } from '@/entites/Message.type'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { api_endpoint } from './constants/api'

export const useMessagesSocket = () => {
    const socket = io(api_endpoint)
    const [messages, setMessages] = useState<MessageType[]>([])
    useEffect(() => {
        console.log(socket)
        let onMessage = (data: any) => {
            console.log(`onMessage event`)
            setMessages((prevMessages: any) => [...prevMessages, data])
        }
        socket.on('onMessage', onMessage)

        return () => {
            socket.off('onMessage', onMessage)
        }
    }, [socket])

    return {messages, setMessages, socket}
}
