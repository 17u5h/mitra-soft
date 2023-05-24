import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {fetchPosts} from "../../store/reducers/postsReducer";

const Posts = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
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
		fetchAllPosts()
	}, [])

	return (
		<div>
			{isLoading? <Spinner animation='border' variant='secondary'/> : }
		</div>
	);
};

export default Posts;