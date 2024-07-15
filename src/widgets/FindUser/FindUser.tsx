import { useGetAllUsersQuery } from '@/redux/services/userApi'
import Input from '../../shared/Input/Input'
import styles from './FindUser.module.scss'
import { useEffect, useState } from 'react'
import { useDebounceValue } from 'usehooks-ts'
import { ProfileType } from '../../entites/profile.types'
import { useCreateChatMutation, useGetAllChatsQuery } from '@/redux/services/chatApi'
import ChatItem from '../../shared/ChatItem'
import PeopleItem from '../People/PeopleItem/PeopleItem'
import { useRouter } from 'next/navigation'

const FindUser = ({ profile_id, setSearching }: { profile_id: number; setSearching: any }) => {
    const [search, setSearch] = useState<string | null>(null)
    const { data: allUsers } = useGetAllUsersQuery(null)
    const { data: allChats } = useGetAllChatsQuery(null)
    const [createChat] = useCreateChatMutation()
    const [debouncedSearch, setDebouncedSearch] = useDebounceValue<string | null>(null, 500)
    const [searchedUsers, setSearchedUsers] = useState<ProfileType[]>([])
    const router = useRouter()

    const addChat = (user_id: number) => {
        let enabled: boolean = true
        allChats.map((el: any) => {
            if (
                el.members.find((member: ProfileType) => member.id == profile_id) &&
                el.members.find((member: ProfileType) => member.id == user_id)
            ) {
                enabled = false
            }
        })
        if (enabled) {
            createChat({ members: [profile_id, user_id], messages: [] }).then((res : any) => {
                if(res?.data && res.data?.id){
                    router.push(`/messages/${res.data.id}`)
                }
            })
        } else {
            console.log(`Chat with this members already exist `)
        }
    }

    useEffect(() => {
        if (search) {
            setSearching(true)
            setDebouncedSearch(search)
        } else {
            setSearching(false)
        }
    }, [search])

    useEffect(() => {
        if (search) {
            let newSearched: ProfileType[] = []
            allUsers.map((el: ProfileType) => {
                if (`${el.name} ${el.surname}`.includes(search)) {
                    newSearched.push(el)
                }
            })
            setSearchedUsers(newSearched)
        }
    }, [debouncedSearch])

    return (
        <div>
            <Input
                placeholder="Find more people..."
                value={search}
                onChange={(e: any) => {
                    setSearch(e.target.value)
                }}
            />
            <div style={{marginTop: "30px", display: "flex", flexDirection: "column", rowGap: "15px"}}>
                {search
                    ? searchedUsers.map(el => (
                          <PeopleItem
                            id={el.id}
                            key={el.id}
                            photo={el.photo}
                            active={el.active}
                            activeDate={el.activeDate}
                            addChatButton={true}
                            name={`${el.name} ${el.surname}`}
                            onClickReplace={()=>{addChat(el.id)}}
                          />
                      ))
                    : null}
            </div>
        </div>
    )
}

export default FindUser
