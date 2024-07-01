import Block from '@/components/Block/Block'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import styles from "./RegistrationModule.module.scss"
import Button from '@/components/Button/Button'
import ImageInput from '@/components/ImageInput/ImageInput'

const RegistrationModule = () => {
    return (
        <Container>
            <Block style={{display: "flex", rowGap: "10px", flexDirection: "column"}}>
                <h2 className={styles.header}>Registration</h2>
                <Input placeholder='Name' style={{fontSize: "14px"}}/>
                <Input placeholder='Surname' style={{fontSize: "14px"}}/>
                <Input placeholder='Password' type="password" style={{fontSize: "14px"}}/>
                <ImageInput/>
                <Button>Submit</Button>
            </Block>
        </Container>
    )
}

export default RegistrationModule
