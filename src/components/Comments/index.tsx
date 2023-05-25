import React from 'react'
import { Comment } from '../../types/Comment'
import styles from './styles.module.css'
import OneComment from './OneComment'

type Props = {
  comments: Comment[]
}

const Comments = ({ comments }: Props) => {
  return (
    <div className={styles.container}>
      {comments.map((el) => (
        <OneComment key={el.id} comment={el} />
      ))}
    </div>
  )
}

export default Comments
