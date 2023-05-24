import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/reducers/postsReducer";
import styles from './styles.module.css'
import {RootState} from "../../store";
import {Post} from "../../types/Post";
import OnePost from './OnePost';


const Posts = () => {
	const posts = useSelector((state: RootState) => state.postsReducer.posts)
	const isLoading = useSelector((state: RootState) => state.postsReducer.isLoading)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<div className={styles.wrapper} onClick={() => console.log()}>
			{isLoading ?
				<Spinner animation='border' variant='secondary'/> :
				<div className={styles.container}>
					{posts.map((post: Post) => <OnePost key={post.id} title={post.title} body={post.body} userId={post.userId}/>)}
				</div>
			}
		</div>
	);
};

export default Posts;