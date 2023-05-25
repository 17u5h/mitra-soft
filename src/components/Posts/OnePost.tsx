import React, {useState} from 'react';
import styles from './styles.module.css'
import emptyAvatar from "../../assets/emptyAvatar.png";
import {useNavigate} from "react-router-dom";
import Comments from "../Comments";
import UIButton from "../UI/UIButton";
import {Spinner} from "react-bootstrap";
import axios from "axios";
import {API_URL} from "../../constants/URLs";
import {Comment} from "../../types/Comment";
import {delay} from "../../lib/delay";

type Props = {
	title: string
	body: string
	userId: number
	postId: number
}

const OnePost = ({title, body, userId, postId}: Props) => {
	const navigate = useNavigate()
	const [isCommentsVisible, setCommentsVisible] = useState<boolean>(false)
	const [isCommentsLoading, setCommentsLoading] = useState<boolean>(false)
	const [comments, setComments] = useState<Comment[]>([])

	const goUserProfilePage = () => {
		navigate(`/user-profile/${userId}`)
	}
	const fetchComments = async () => {
		setCommentsLoading(true)
		try {
			await delay(500)
			const {data} = await axios.get(`${API_URL}/posts/${postId}/comments`)
			setComments(data)
		} catch (e) {
			console.error(e)
		} finally {
			setCommentsLoading(false)
		}
	}

	const showComments = () => {
		setCommentsVisible(prevState => !prevState)
		if (!isCommentsVisible) fetchComments()
	}

	return (
		<>
			<div className={styles.postContainer}>
				<img src={emptyAvatar} alt="user's photo" className={styles.userPhoto} onClick={goUserProfilePage}/>
				<div className={styles.postContent}>
					<p className={styles.postTitle}>{title}</p>
					<p className={styles.postBody}>{body}</p>
				</div>
				<UIButton onClick={showComments}>{isCommentsVisible ? 'Скрыть' : 'Комментарии'}</UIButton>
			</div>
			<div className={styles.commentsContainer}>
				{isCommentsVisible && (isCommentsLoading ? <Spinner animation='border' variant='secondary'/> :
					<Comments comments={comments}/>)}
			</div>
		</>
	);
};

export default OnePost;