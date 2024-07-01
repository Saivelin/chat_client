import { ReactNode } from "react"
import styles from "./Button.module.scss"

const Button = ({onClick, children, style} : {onClick?: ()=>void, children: ReactNode, style?: any}) => {
    return <button className={styles.button} style={{...style}}>{children}</button>
}

export default Button
