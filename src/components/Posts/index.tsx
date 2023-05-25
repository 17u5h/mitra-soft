import React from 'react';
import {Spinner} from "react-bootstrap";
import styles from './styles.module.css'
import {Post} from "../../types/Post";
import OnePost from './OnePost';

type Props = {
	posts?: Post[]
	isLoading: boolean
}

const Posts = ({posts, isLoading}: Props) => {

	return (
		<div className={styles.wrapper}>
			{isLoading ?
				<Spinner animation='border' variant='secondary'/> :
				<div className={styles.container}>
					{posts?.map((post: Post) => <OnePost key={post.id} title={post.title} body={post.body} userId={post.userId} postId={post.id}/>)}
				</div>
			}
		</div>
	);
};

export default Posts;