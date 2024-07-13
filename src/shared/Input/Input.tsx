import styles from "./Input.module.scss"

const Input = (props : any) => {
  return <input {...props} className={styles.input}/>
}

export default Input