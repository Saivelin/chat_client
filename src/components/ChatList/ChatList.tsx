import { useGetChatByMemberIdQuery } from '@/redux/services/chatApi'
import PeopleItem from '../People/PeopleItem/PeopleItem'
import { ProfileType } from '../Profile/profile.types'
import styles from './ChatList.module.scss'
import ChatItem from './ChatItem'

const ChatList = ({ id }: { id: number }) => {
    let { data: people } = useGetChatByMemberIdQuery(id)

    return (
        <div className={styles.peopleList}>
            {people && people?.length && people?.length > 0
                ? people.map((el : any) => (
                        <ChatItem el={el} ownerId={id}/>
                    ))
                : null}
        </div>
    )
}

export default ChatList
