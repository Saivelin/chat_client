import { useGetChatByMemberIdQuery } from '@/redux/services/chatApi'
import styles from './ChatList.module.scss'
import ChatItem from '../../shared/ChatItem'
import Input from '../../shared/Input/Input'
import { useState } from 'react'
import FindUser from '../FindUser/FindUser'

const ChatList = ({ id }: { id: number }) => {
    let { data: people } = useGetChatByMemberIdQuery(id)
    let [searching, setSearching] = useState<boolean>(false)

    return (
        <div className={styles.peopleList}>
            <FindUser
                setSearching={setSearching}
                profile_id={id}
            />
            {searching == false
                ? people && people?.length && people?.length > 0
                    ? people.map((el: any) => (
                          <ChatItem
                              el={el}
                              ownerId={id}
                          />
                      ))
                    : null
                : null}
        </div>
    )
}

export default ChatList
