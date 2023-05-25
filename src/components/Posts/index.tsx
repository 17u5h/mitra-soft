import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import styles from './styles.module.css'
import {Post} from "../../types/Post";
import OnePost from './OnePost';
import PaginationComponent from "../Pagination";

type Props = {
	posts?: Post[]
	isLoading: boolean
}

const Posts = ({posts, isLoading}: Props) => {

	const countPostsOnPage = 10
	const amountOfPages = Math.ceil((posts?.length || 1) / countPostsOnPage)

	const [postsOnPage, setPostsOnPage] = useState<Post[]>([])

	useEffect(() => {
		onChangePage(1)
	}, [posts])

	const onChangePage = (currentPage: number) => {
		const firstPostOnPage = (currentPage - 1) * countPostsOnPage
		const lastPostOnPage = currentPage * countPostsOnPage - 1
		const postsInsidePage = posts?.slice(firstPostOnPage, lastPostOnPage)
		setPostsOnPage(postsInsidePage || [])
	}

	return (
		<div className={styles.wrapper}>
			{isLoading ?
				<Spinner animation='border' variant='secondary'/> :
				<div className={styles.container}>
					{postsOnPage?.map((post: Post) => <OnePost key={post.id} title={post.title} body={post.body}
																										 userId={post.userId}
																										 postId={post.id}/>)}
				</div>
			}
			{(postsOnPage.length > 0) && <PaginationComponent amountOfPages={amountOfPages} onChangePage={onChangePage}/>}
		</div>
	);
};

export default Posts;