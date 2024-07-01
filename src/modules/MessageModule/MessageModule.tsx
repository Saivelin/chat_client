import Block from '@/components/Block/Block'
import Container from '@/components/Container/Container'
import Header from '@/components/Message/Header/Header'
import Message from '@/components/Message/Message'
import { messages, profile } from './MessageModule.contants.moks'
import NewMessage from '@/components/Message/NewMessage/NewMessage'
import styles from './MessageModule.module.scss'

const MessageModule = ({id} : {id: number}) => {
    return (
        <Container>
            <Block>
                <Header profile={profile}/>
                <div className={styles.messagesWrapper}>
                    {
                        messages.map((el)=>{
                            return <Message messages={el} my={true}/>
                        })
                    }
                    {
                        messages.map((el)=>{
                            return <Message messages={el} my={false}/>
                        })
                    }
                </div>
                <NewMessage/>
            </Block>
        </Container>
    )
}

export default MessageModule
