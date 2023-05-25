import React from 'react';
import {Comment} from "../../types/Comment";
import styles from './styles.module.css'


type Props = {
	comment: Comment
}

const OneComment = ({comment}: Props) => {
	return (
		<div className={styles.commentContainer}>
			<p className={styles.commentTitle}>{comment.email}</p>
			<p className={styles.commentBody}>{comment.body}</p>
		</div>
	);
};

export default OneComment;