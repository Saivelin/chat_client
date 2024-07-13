'use client'

import Block from '@/shared/Block/Block'
import Container from '@/shared/Container/Container'
import TopProfile from '@/widgets/Profile/TopProfile/TopProfile'
import PeopleItem from '@/widgets/People/PeopleItem/PeopleItem'
import styles from './MainModule.module.scss'
import { useLocalStorage } from 'usehooks-ts'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useGetChatByMemberIdQuery } from '@/redux/services/chatApi'
import { ProfileType } from '@/entites/profile.types'
import ChatList from '@/widgets/ChatList/ChatList'
import { useIsAuthorized } from '@/features/useIsAuthorized'
import Loading from '@/shared/Loading/Loading'
import { useUserActive } from '@/processes/useUserActive'

const MainModule = () => {
    const [user] = useIsAuthorized()
    useUserActive()

    if (user && user.name) {
        return (
            <Container>
                <Block>
                    { user && user.name ? 
                        <>
                            <TopProfile data={user ? user : { name: 'Name', surname: 'Surname', photo: 'avatar.webp' }} />
                            {user && user?.id ? <ChatList id={user?.id} /> : <h3 style={{ textAlign: 'center' }}>Loading</h3>}
                        </>
                        :
                            <Loading/>
                    }
                </Block>
            </Container>
        )
    }
}

export default MainModule
