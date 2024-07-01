import { ReactNode } from "react"
import styles from "./Button.module.scss"

const Button = ({onClick, children, style} : {onClick?: ()=>any, children: ReactNode, style?: any}) => {
    return <button onClick={onClick ? onClick : ()=>{}} className={styles.button} style={{...style}}>{children}</button>
}

export default Button
