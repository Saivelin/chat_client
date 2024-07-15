import { MessageType } from '@/entites/Message.type'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { api_endpoint } from './constants/api'

export const useMessagesSocket = () => {
    const socket = io(api_endpoint)
    const [messages, setMessages] = useState<MessageType[]>([])
    useEffect(() => {
        let onMessage = (data: any) => {
            console.log(`onMessage event`)
            setMessages((prevMessages: any) => [...prevMessages, data])
        }

        let onCheck = (data: number) => {
            let newMessages = [...messages]
            newMessages.forEach((el)=>{
                if(el.id == data){
                    el.checked = true
                }
            })
            setMessages(newMessages)
        }

        socket.on('onMessage', onMessage)
        socket.on('onCheck', onCheck)

        return () => {
            socket.off('onMessage', onMessage)
            socket.off('onCheck', onCheck)
        }
    }, [socket])

    return {messages, setMessages, socket}
}
