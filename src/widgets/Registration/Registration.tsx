'use client'
import { useRegistration } from '@/features/useRegisration'
import styles from "./Registration.module.scss"
import Input from '@/shared/Input/Input'
import ImageInput from '@/shared/ImageInput/ImageInput'
import Button from '@/shared/Button/Button'

const Registration = () => {
    const { onSubmit, name, setName, surname, setSurname, password, setPassword, photo, setPhoto } = useRegistration()
    return (
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
    )
}

export default Registration
