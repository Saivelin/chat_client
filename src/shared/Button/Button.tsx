import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import styles from "./Button.module.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

const Button: FC<ButtonProps> = ({children, ...props}) => {
    return <button {...props} className={`${styles.button} ${props.className}`}>{children}</button>
}

export default Button
