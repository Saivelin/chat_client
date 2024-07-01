import Block from '@/components/Block/Block'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import styles from "./LoginModule.module.scss"
import Button from '@/components/Button/Button'
import ImageInput from '@/components/ImageInput/ImageInput'
import Link from 'next/link'

const LoginModule = () => {
    return (
        <Container>
            <Block style={{display: "flex", rowGap: "10px", flexDirection: "column"}}>
                <h2 className={styles.header}>Login</h2>
                <Input placeholder='Name' style={{fontSize: "14px"}}/>
                <Input placeholder='Surname' style={{fontSize: "14px"}}/>
                <Input placeholder='Password' type="password" style={{fontSize: "14px"}}/>
                <Button>Submit</Button>
                <p style={{textAlign: "center"}}><Link href="/registration">No account? Sign up!</Link></p>
            </Block>
        </Container>
    )
}

export default LoginModule
