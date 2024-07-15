import { useRegistrationMutation, useUpdateLastActiveMutation } from '@/redux/services/userApi'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export const useRegistration = () => {
    const [submitForm] = useRegistrationMutation()
    const [setActiveUser] = useUpdateLastActiveMutation()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [photo, setPhoto] = useState<string>('')

    const [token, setToken, removeToken] = useLocalStorage('token', '')
    const [user, setUser, removeUser] = useLocalStorage('user', '')

    const router = useRouter()

    const onSubmit = () => {
        if (
            name &&
            name.length > 0 &&
            surname &&
            surname.length > 0 &&
            password &&
            password.length > 0 &&
            photo &&
            photo.length > 0
        ) {
            submitForm({ name: name, surname: surname, photo: photo, password: password }).then((res: any) => {
                if (res?.data?.token && res?.data?.user) {
                    setToken(res.data.token)
                    setUser(res.data.user)
                    setActiveUser({id: res?.data?.user?.id, data: process.env.NEXT_PUBLIC_ACTIVE_USER_STATUS})
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
        photo,
        setPhoto,
        token,
        setToken,
        removeToken,
        user,
        setUser,
        removeUser,
        onSubmit
    }
}
