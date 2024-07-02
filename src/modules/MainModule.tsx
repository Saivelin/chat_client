'use client'

import Block from '@/components/Block/Block'
import Container from '@/components/Container/Container'
import TopProfile from '@/components/Profile/TopProfile/TopProfile'
import PeopleItem from '@/components/People/PeopleItem/PeopleItem'
import styles from './MainModule.module.scss'
import { useLocalStorage } from 'usehooks-ts'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useGetChatByMemberIdQuery } from '@/redux/services/chatApi'
import { ProfileType } from '@/components/Profile/profile.types'
import ChatList from '@/components/ChatList/ChatList'

const MainModule = () => {
    const [user, setUser, removeUser] = useLocalStorage<
        { name: string; photo: string; surname: string; id: number } | ''
    >('user', '')

    const router = useRouter()

    useEffect(() => {
        let timer = setTimeout(() => {
            router.push('/login')
        }, 3000)
        if (user && user?.name && user?.id) {
            clearTimeout(timer)
        }
    }, [user])

    if (user && user.name) {
        return (
            <Container>
                <Block>
                    <TopProfile data={user ? user : { name: 'Name', surname: 'Surname', photo: 'avatar.webp' }} />
                    {user && user?.id ? <ChatList id={user?.id} /> : <h3 style={{ textAlign: 'center' }}>Loading</h3>}
                </Block>
            </Container>
        )
    } else {
        return (
            <Container>
                <Block>
                    <h3 style={{ textAlign: 'center' }}>Loading</h3>
                </Block>
            </Container>
        )
    }
}

export default MainModule
