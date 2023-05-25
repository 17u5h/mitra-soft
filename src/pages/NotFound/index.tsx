import React from 'react'
import styles from './styles.module.css'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.img} />
      <div className={styles.text}>Страница не найдена. Вы попали в Мордор</div>
    </div>
  )
}

export default NotFound