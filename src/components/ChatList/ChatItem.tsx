import { useEffect, useState } from 'react'
import PeopleItem from '../People/PeopleItem/PeopleItem'
import { ProfileType } from '../Profile/profile.types'

const ChatItem = ({ el, ownerId }: { el: {id: number, members: ProfileType[]; messages: any }; ownerId: number }) => {
    const [person, setPerson] = useState<ProfileType | null>(null)

    useEffect(() => {
        let newPerson = el.members.find(p => p.id != ownerId)
        console.log(newPerson)
        if (newPerson) {
            setPerson(newPerson)
        }
    }, [person, el])
    if (person && person?.id) {
        return (
            <PeopleItem
                key={person.id}
                id={person.id}
                name={`${person.name} ${person.surname}`}
                photo={person.photo}
                active={person.active}
                activeDate={person.activeDate}
                chatId={el.id}
            />
        )
    }
}

export default ChatItem
