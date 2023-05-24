import React, {useEffect} from 'react';
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {fetchPosts} from "../../store/reducers/postsReducer";

const Main = () => {
	const posts = useSelector((state: RootState) => state.postsReducer.posts)
	const isLoading = useSelector((state: RootState) => state.postsReducer.isLoading)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<div>
			<Header/>
			<Posts posts={posts} isLoading={isLoading}/>
		</div>
	);
};

export default Main;