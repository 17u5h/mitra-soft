import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/reducers/postsReducer";
import styles from './styles.module.css'
import {RootState} from "../../store";


const Posts = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const posts = useSelector((state: RootState) => state.postsReducer)
	const dispatch = useDispatch()

	const fetchAllPosts = async () => {
		setIsLoading(true)
		try {
			dispatch(fetchPosts())
		} catch (e) {
			console.error('не удалось получить посты с сервера')
		} finally {
			setIsLoading(false)
		}
	}


	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<div style={{width: '400px', height: '200px', backgroundColor: '#999'}} onClick={() => console.log(posts)}>
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