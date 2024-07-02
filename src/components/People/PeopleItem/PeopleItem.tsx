'use client'

import { ProfileType } from '@/components/Profile/profile.types'
import styles from './PeopleItem.module.scss'
import Block from '@/components/Block/Block'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const PeopleItem = ({
    photo,
    name,
    active,
    activeDate,
    id,
    chatId
}: {
    photo: string
    name: string
    active: boolean
    activeDate: string
    id: number
    chatId?: number
}) => {
    const router = useRouter()

    const onClick = useCallback(()=>{
        router.push(`/messages/${chatId ? chatId : id}`)
    }, [])

    return (
        <motion.div whileHover={{ scale: .95 }} onClick={onClick}>
            <Block
                style={{
                    backgroundColor: 'white',
                    borderRadius: '30px',
                    padding: '10px 8px',
                    display: 'flex',
                    columnGap: '30px',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
            >
                <div className={styles.photoWrapper}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_UPLOADS}/${photo}`}
                        alt=''
                        className={styles.photo}
                    />
                </div>
                <div className={styles.info}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.activeDate}>{activeDate}</p>
                </div>
            </Block>
        </motion.div>
    )
}

export default PeopleItem
