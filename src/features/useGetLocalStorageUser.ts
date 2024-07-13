import { useLocalStorage } from "usehooks-ts";

export interface StorageUserType {
    name: string
    photo: string
    surname: string
    id: number
}

export const useGetLocalStorageUser = () => {
    const [user, setUser, removeUser] = useLocalStorage<StorageUserType | ''>('user', '')

    return {user, setUser, removeUser}
}
