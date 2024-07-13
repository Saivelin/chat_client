'use client'

import { useLogin } from "@/features/useLogin"
import styles from "./Login.module.scss"
import Input from "@/shared/Input/Input"
import Button from "@/shared/Button/Button"
import Link from "next/link"

const Login = () => {
    const { onSubmit, name, setName, surname, setSurname, password, setPassword } = useLogin()
    return (
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
    )
}

export default Login
