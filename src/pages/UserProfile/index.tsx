import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {fetchUsers} from "../../store/reducers/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {User} from "../../types/User";
import {Spinner} from "react-bootstrap";
import styles from './styles.module.css'
import {Post} from "../../types/Post";
import Posts from "../../components/Posts";
import emptyAvatar from "../../assets/emptyAvatar.png";
import UIButton from "../../components/UI/UIButton";


const UserProfile = () => {
		const [foundUser, setFoundUser] = useState<User>()
		const [userPosts, setUserPosts] = useState<Post[]>()
		const {userId} = useParams()
		const dispatch = useDispatch()
		const navigate = useNavigate()
		const users = useSelector((state: RootState) => state.usersReducer.users)
		const posts = useSelector((state: RootState) => state.postsReducer.posts)
		const isLoading = useSelector((state: RootState) => state.usersReducer.isLoading)

		useEffect(() => {
			dispatch(fetchUsers())
		}, [])

		useEffect(() => {
			const foundUser = users.filter((user: User) => user.id === Number(userId))
			const usersPosts = posts.filter((post: Post) => post.userId === Number(userId))
			setFoundUser(foundUser[0])
			setUserPosts(usersPosts)
		}, [users])


		const goBackward = () => {
			navigate('/')
		}

		return (
			<div className={styles.container}>
				{isLoading ?
					<Spinner animation='border' variant='secondary'/> :
					<>
						<div className={styles.aboutUser}>
							<img src={emptyAvatar} alt="user's photo" className={styles.userPhoto}
									 onClick={() => navigate(`/user-profile/${userId}`)}/>
							<div className={styles.userInfo}>
								<p className={styles.profileName}>{foundUser?.name}</p>
								<p>{foundUser?.email}</p>
								<p>{foundUser?.website}</p>
							</div>
							<UIButton onClick={goBackward}>Назад</UIButton>
						</div>
						<Posts posts={userPosts} isLoading={isLoading}/>
						<UIButton onClick={goBackward}>Назад</UIButton>
					</>
				}
			</div>
		);
	}
;

export default UserProfile;