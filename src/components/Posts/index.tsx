import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/reducers/postsReducer";
import styles from './styles.module.css'
import {RootState} from "../../store";


const Posts = () => {
	const posts = useSelector((state: RootState) => state.postsReducer.posts)
	const isLoading = useSelector((state: RootState) => state.postsReducer.isLoading)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
		console.log(isLoading)
	}, [])

	return (
		<div className={styles.wrapper} onClick={() => console.log(posts)}>
			{isLoading ?
				<Spinner animation='border' variant='secondary'/> :
				<div className={styles.container}>
					{}
				</div>
			}
		</div>
	);
};

export default Posts;