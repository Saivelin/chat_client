import { useGetChatByMemberIdQuery } from '@/redux/services/chatApi'
import styles from './ChatList.module.scss'
import ChatItem from '../../shared/ChatItem'
import Input from '../../shared/Input/Input'
import { useState } from 'react'
import FindUser from '../FindUser/FindUser'
import { useChatsSocket } from '@/features/useChatsSocket'

const ChatList = ({ id }: { id: number }) => {
    let { data: people } = useGetChatByMemberIdQuery(id)
    let [searching, setSearching] = useState<boolean>(false)
    const { chatsWithMessages } = useChatsSocket()

    return (
        <div className={styles.peopleList}>
            <FindUser
                setSearching={setSearching}
                profile_id={id}
            />
            {searching == false
                ? people && people?.length && people?.length > 0
                    ? people.map((el: any) => (
                          <>
                              <ChatItem
                                  newMessages={chatsWithMessages.reduce(
                                      (acc: any, curr: any) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
                                      {}
                                  )[el.id]}
                                  el={el}
                                  ownerId={id}
                              />
                          </>
                      ))
                    : null
                : null}
        </div>
    )
}

export default ChatList
