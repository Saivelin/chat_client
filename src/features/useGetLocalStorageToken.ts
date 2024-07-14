import { useLocalStorage } from "usehooks-ts"

export const useGetLocalStorageToken = () => {
    const [token, setToken, removeToken] = useLocalStorage<string>('token', '')

    return {token, setToken, removeToken}
}