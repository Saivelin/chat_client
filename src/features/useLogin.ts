import { useLoginMutation, useUpdateLastActiveMutation } from "@/redux/services/userApi"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useLocalStorage } from "usehooks-ts"

export const useLogin = () => {
    const [submitForm] = useLoginMutation()
    const [setActiveUser] = useUpdateLastActiveMutation()
    const router = useRouter()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [token, setToken, removeToken] = useLocalStorage('token', '')
    const [user, setUser, removeUser] = useLocalStorage('user', '')

    const onSubmit = () => {
        if (name && name.length > 0 && surname && surname.length > 0 && password && password.length > 0) {
            submitForm({ login: `${name} ${surname}`, password: password }).then((res: any) => {
                console.log(res)
                if (res?.data?.token && res?.data?.user) {
                    setToken(res.data.token)
                    setUser(res.data.user)
                    setActiveUser({id: res?.data?.user?.id, data: process.env.NEXT_PUBLIC_ACTIVE_USER_STATUS}).then((res)=>{console.log(res)})
                    router.push('/')
                }
            })
        }
    }

    return {
        name,
        setName,
        surname,
        setSurname,
        password,
        setPassword,
        token,
        setToken,
        removeToken,
        user,
        setUser,
        removeUser,
        onSubmit
    }
}
