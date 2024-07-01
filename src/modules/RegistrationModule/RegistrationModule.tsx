'use client'

import Block from '@/components/Block/Block'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import styles from './RegistrationModule.module.scss'
import Button from '@/components/Button/Button'
import ImageInput from '@/components/ImageInput/ImageInput'
import { useRegistrationMutation } from '@/redux/services/userApi'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const RegistrationModule = () => {
    const [submitForm] = useRegistrationMutation()
    const router = useRouter()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [photo, setPhoto] = useState<string>('')

    const onSubmit = () => {
        if (
            name &&
            name.length > 0 &&
            surname &&
            surname.length > 0 &&
            password &&
            password.length > 0 &&
            photo &&
            photo.length > 0
        ) {
            submitForm({ name: name, surname: surname, photo: photo, password: password }).then(res => {
                console.log(res)
                if(res?.data?.id){
                    router.push("/")
                }
            })
        }
    }

    return (
        <Container>
            <Block>
                <form
                    style={{ display: 'flex', rowGap: '10px', flexDirection: 'column' }}
                    action=''
                    onSubmit={e => {
                        e.preventDefault()
                        onSubmit()
                    }}
                >
                    <h2 className={styles.header}>Registration</h2>
                    <Input
                        value={name}
                        onChange={(e: any) => {
                            setName(e.target.value)
                        }}
                        placeholder='Name'
                        style={{ fontSize: '14px' }}
                    />
                    <Input
                        value={surname}
                        onChange={(e: any) => {
                            setSurname(e.target.value)
                        }}
                        placeholder='Surname'
                        style={{ fontSize: '14px' }}
                    />
                    <Input
                        value={password}
                        onChange={(e: any) => {
                            setPassword(e.target.value)
                        }}
                        placeholder='Password'
                        type='password'
                        style={{ fontSize: '14px' }}
                    />
                    <ImageInput
                        setter={setPhoto}
                        bg={photo}
                    />
                    <Button>Submit</Button>
                </form>
            </Block>
        </Container>
    )
}

export default RegistrationModule
