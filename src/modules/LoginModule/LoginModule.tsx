'use client'

import Block from '@/components/Block/Block'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import styles from './LoginModule.module.scss'
import Button from '@/components/Button/Button'
import ImageInput from '@/components/ImageInput/ImageInput'
import Link from 'next/link'
import { useLoginMutation } from '@/redux/services/userApi'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

const LoginModule = () => {
    const [submitForm] = useLoginMutation()
    const router = useRouter()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [token, setToken, removeToken] = useLocalStorage('token', "")
    const [user, setUser, removeUser] = useLocalStorage('user', "")

    const onSubmit = () => {
        if (
            name &&
            name.length > 0 &&
            surname &&
            surname.length > 0 &&
            password &&
            password.length > 0
        ) {
            submitForm({ login: `${name} ${surname}`, password: password }).then((res: any) => {
                console.log(res)
                if(res?.data?.token && res?.data?.user){
                    setToken(res.data.token)
                    setUser(res.data.user)
                    router.push("/")
                }
            })
        }
    }

    return (
        <Container>
            <Block>
                <form
                    action=''
                    style={{ display: 'flex', rowGap: '10px', flexDirection: 'column' }}
                    onSubmit={e => {
                        e.preventDefault()
                        onSubmit()
                    }}
                >
                    <h2 className={styles.header}>Login</h2>
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
                    <Button>Submit</Button>
                    <p style={{ textAlign: 'center' }}>
                        <Link href='/registration'>No account? Sign up!</Link>
                    </p>
                </form>
            </Block>
        </Container>
    )
}

export default LoginModule
