'use client'

import { ReactNode } from 'react'
import styles from './Block.module.scss'
import { motion } from 'framer-motion'

const Block = ({ children, style, classNames }: { children: ReactNode; style?: any; classNames?: string[] }) => {
    return (
        <div
            style={{ ...style }}
            className={`${styles.container} ${
                classNames
                    ? classNames.map(el => {
                          return `${el} `
                      })
                    : null
            }`}
        >
            {children}
        </div>
    )
}

export default Block
