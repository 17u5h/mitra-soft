import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import {fetchAllPosts} from "../../lib/fetchAllPosts";

const Posts = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		fetchAllPosts(setIsLoading, dispatchPosts)
	}, [])

	return (
		<div>
			{isLoading? <Spinner animation='border' variant='secondary'/>}
		</div>
	);
};

export default Posts;