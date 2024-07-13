"use client"

import { ReactNode } from "react"
import styles from "./Block.module.scss"
import { motion } from "framer-motion"

const Block = ({children, style} : {children: ReactNode, style?: any}) => {
  return (
    <div style={{...style}} className={styles.container}>{children}</div>
  )
}

export default Block