import { Socket } from 'socket.io-client'
import { StorageUserType } from './useGetLocalStorageUser'

const checkMessage = ({ socket, id }: { socket: Socket; id: number }) => {
    socket.emit('checkMessage', {id: id})
}

export default checkMessage
