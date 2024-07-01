import { MessageType } from '@/components/Message/Message.type'
import { ProfileType } from '@/components/Profile/profile.types'

export const profile: ProfileType = {
    id: 1,
    img: 'https://placehold.co/400x600',
    name: 'Pedrik',
    surname: 'Ronner',
    active: true,
    activeDate: 'now'
}

export const people: ProfileType[] = [
    { id: 2, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 3, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 4, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 5, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 6, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 7, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 8, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 9, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 10, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 11, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 12, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 13, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 14, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
    { id: 15, img: 'https://placehold.co/400x600', name: 'Pedrik', surname: 'Ronner', active: true, activeDate: 'now' },
]

export const messages: MessageType[] = [
    {id: 1, text: "fdsgfdgdfg", author: people[0]},
    {id: 2, text: "fdsgfdgdfg", author: people[0]},
    {id: 3, text: "fdsgfdgdfg", author: people[0]},
    {id: 4, text: "fdsgfdgdfg", author: people[0]},
    {id: 5, text: "fdsgfdgdfg", author: people[2]},
]