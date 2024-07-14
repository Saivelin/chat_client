import { useRouter } from 'next/navigation'
import { useGetLocalStorageUser } from './useGetLocalStorageUser'
import { useGetLocalStorageToken } from './useGetLocalStorageToken'

export const useLogout = () => {
    const { removeUser } = useGetLocalStorageUser()
    const { removeToken } = useGetLocalStorageToken()
    const router = useRouter()

    return () => {
        removeUser()
        removeToken()
        router.push('/login')
    }
}
