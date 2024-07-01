import SendRoundedIcon from '@mui/icons-material/SendRounded'
import styles from './NewMessage.module.scss'

const NewMessage = () => {
    return (
        <div className={styles.wrapper}>
            <textarea
                className={styles.input}
                placeholder='Type something...'
                rows={1}
            />
            <SendRoundedIcon className={styles.btn}/>
        </div>
    )
}

export default NewMessage
