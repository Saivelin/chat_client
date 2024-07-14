import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export const useIsAuthorized = () => {
    const [user] = useLocalStorage<
        { name: string; photo: string; surname: string; id: number } | ''
    >('user', '')

    const router = useRouter()

    useEffect(() => {
        let timer = setTimeout(() => {
            router.push('/login')
        }, 500)
        if (user && user?.name && user?.id) {
            clearTimeout(timer)
        }
    }, [user])

    return [user]
}