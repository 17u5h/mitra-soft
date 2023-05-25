import React from 'react'
import styles from './styles.module.css'
import picture from '../../assets/404.jpg'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img src={picture} className={styles.img} alt='picture of Mordor'/>
      <div className={styles.text}>Страница не найдена. Вы попали в Мордор</div>
    </div>
  )
}

export default NotFound