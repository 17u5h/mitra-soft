import React from 'react';
import styles from './styles.module.css'
import emptyAvatar from "../../assets/emptyAvatar.png";
import {useNavigate} from "react-router-dom";
import Comments from "../Comments";

type Props = {
	title: string
	body: string
	userId: number
}

const OnePost = ({title, body, userId}: Props) => {
	const navigate = useNavigate()
	return (
		<div className={styles.postContainer}>
			<img src={emptyAvatar} alt="user's photo" className={styles.userPhoto} onClick={() => navigate(`/user-profile/${userId}`)}/>
			<div className={styles.postContent}>
				<p className={styles.postTitle}>{title}</p>
				<p className={styles.postBody}>{body}</p>
				<Comments userId={userId} />
			</div>
		</div>
	);
};

export default OnePost;