import { useGetLocalStorageUser } from '@/features/useGetLocalStorageUser'
import { useUpdateLastActiveMutation } from '@/redux/services/userApi'
import { useEffect } from 'react'

export const useUserActive = () => {
    const [setActiveUser] = useUpdateLastActiveMutation()
    const { user } = useGetLocalStorageUser()

    const onPageHidden = () => {
        if (user && user?.id) {
            const now = new Date()
            setActiveUser({ id: user?.id, data: `Был(-а) в сети ${now.toLocaleDateString("ru-RU")} в ${now.getHours()}:${now.getMinutes()}` })
        }
    }

    const onPageShowed = () => {
        if (user && user?.id) {
            setActiveUser({ id: user?.id, data: process.env.NEXT_PUBLIC_ACTIVE_USER_STATUS })
        }
    }

    useEffect(() => {
        window.addEventListener("beforeunload", onPageHidden)
        window.addEventListener("unload", onPageHidden)
        window.addEventListener("pageshow", onPageShowed)

        return ()=>{
            window.addEventListener("beforeunload", onPageHidden)
            window.removeEventListener("unload", onPageHidden)
            window.removeEventListener("pageshow", onPageShowed)
        }
    }, [])
}
