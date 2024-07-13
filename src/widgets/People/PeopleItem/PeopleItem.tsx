'use client'

import AddIcon from '@mui/icons-material/Add';
import { ProfileType } from '@/entites/profile.types'
import styles from './PeopleItem.module.scss'
import Block from '@/shared/Block/Block'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const PeopleItem = ({
    photo,
    name,
    active,
    activeDate,
    id,
    chatId,
    onClickReplace,
    addChatButton=false
}: {
    photo: string
    name: string
    active: boolean
    activeDate: string
    id: number
    chatId?: number
    onClickReplace?: ()=>any
    addChatButton?: boolean
}) => {
    const router = useRouter()

    const onClick = useCallback(()=>{
        if (onClickReplace){
            onClickReplace()
        }
        else{
            router.push(`/messages/${chatId ? chatId : id}`)
        }
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
                    cursor: 'pointer',
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
                {addChatButton == true ? 
                    <div className={styles.addButton}><AddIcon/></div>
                : null}
            </Block>
        </motion.div>
    )
}

export default PeopleItem
