import Block from '@/components/Block/Block'
import Container from '@/components/Container/Container'
import Header from '@/components/Message/Header/Header'
import Message from '@/components/Message/Message'
import { messages, profile } from './MessageModule.contants.moks'

const MessageModule = ({id} : {id: number}) => {
    return (
        <Container>
            <Block>
                <Header profile={profile}/>
                {
                    messages.map((el)=>{
                        return <Message messages={el}/>
                    })
                }
            </Block>
        </Container>
    )
}

export default MessageModule
