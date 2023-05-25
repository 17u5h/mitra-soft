import React from 'react'
import styles from './styles.module.css'

type Props = {
  children: string
  onClick: () => void
}

const UIButton = ({ onClick, children }: Props) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default UIButton
