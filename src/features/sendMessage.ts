import { Socket } from 'socket.io-client'
import { StorageUserType } from './useGetLocalStorageUser'

const sendMessage = ({
    user,
    socket,
    id,
    messageText,
    files
}: {
    user: StorageUserType | ''
    socket: Socket
    id: number
    messageText: string
    files?: string[]
}) => {
    if (user && user?.id) {
        if (messageText || (files && files.length > 0)) {
            socket.emit('newMessage', { chatId: +id, authorId: +user?.id, text: messageText, files: files || [] })
        }
    }
}

export default sendMessage
