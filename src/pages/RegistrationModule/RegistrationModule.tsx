import Block from '@/shared/Block/Block'
import Container from '@/shared/Container/Container'
import Input from '@/shared/Input/Input'
import styles from './Registration.module.scss'
import Button from '@/shared/Button/Button'
import ImageInput from '@/shared/ImageInput/ImageInput'
import { useRegistration } from '@/features/useRegisration'
import Registration from '@/widgets/Registration/Registration'

const RegistrationModule = () => {
    return (
        <Container>
            <Block>
                <Registration/>
            </Block>
        </Container>
    )
}

export default RegistrationModule
