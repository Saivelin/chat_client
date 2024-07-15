import PeopleItem from '@/widgets/People/PeopleItem/PeopleItem'
import { ProfileType } from '@/entites/profile.types'
import { useEffect, useState } from 'react'
import styles from "./ChatItem.module.scss"

const ChatItem = ({
    el,
    ownerId,
    newMessages
}: {
    el: { id: number; members: ProfileType[]; messages: any }
    ownerId: number
    newMessages?: number
}) => {
    const [person, setPerson] = useState<ProfileType | null>(null)

    useEffect(() => {
        let newPerson = el.members.find(p => p.id != ownerId)
        if (newPerson) {
            setPerson(newPerson)
        }
    }, [person, el])
    if (person && person?.id) {
        return (
            <div className={styles.wrapper}>
                {newMessages ? <div className={styles.newMessage}><span>{newMessages}</span></div> : null}
                <PeopleItem
                    key={person.id}
                    id={person.id}
                    name={`${person.name} ${person.surname}`}
                    photo={person.photo}
                    active={person.active}
                    activeDate={person.activeDate}
                    chatId={el.id}
                />
            </div>
        )
    }
}

export default ChatItem
