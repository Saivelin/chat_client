import { Socket } from "socket.io-client"
import { StorageUserType } from "./useGetLocalStorageUser"

const sendMessage = ({user, socket, id, messageText} : {user: StorageUserType | "", socket: Socket, id: number, messageText: string}) => {
    if(user && user?.id){
        socket.emit("newMessage", {chatId: +id, authorId: +user?.id, text: messageText})
    }
}

export default sendMessage