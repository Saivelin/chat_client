import { ProfileType } from '@/entites/profile.types'
import { useCreateChatMutation } from '@/redux/services/chatApi'
import { useRouter } from 'next/navigation'

export const useAddChat = (allChats: any, profile_id: number) => {
    const [createChat] = useCreateChatMutation()
    const router = useRouter()

    let enabled: boolean = true
    const addChat = (user_id: number) => {
        allChats.map((el: any) => {
            if (
                el.members.find((member: ProfileType) => member.id == profile_id) &&
                el.members.find((member: ProfileType) => member.id == user_id)
            ) {
                enabled = false
            }
        })
        if (enabled) {
            createChat({ members: [profile_id, user_id], messages: [] }).then((res: any) => {
                if (res?.data && res.data?.id) {
                    router.push(`/messages/${res.data.id}`)
                }
            })
        } else {
            console.log(`Chat with this members already exist `)
        }
    }

    return {addChat}
}
