import React, {useState} from 'react';
import styles from './styles.module.css'
import {Button} from "react-bootstrap";
import {Post} from "../../types/Post";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setSortedPosts} from "../../store/reducers/postsReducer";
import CloseButton from "../UI/CloseButton";


const Search = () => {
	const dispatch = useDispatch()
	const posts = useSelector((state: RootState) => state.postsReducer.posts)
	const sortedPosts = useSelector((state: RootState) => state.postsReducer.sortedPosts)

	const [searchQuery, setSearchQuery] = useState<string>('')

	const searchHandler = () => {
		if (!searchQuery) {
			dispatch(setSortedPosts(posts))
		} else {
			const filteredPosts = sortedPosts.filter((el: Post) => el.title.toLowerCase().includes(searchQuery.toLowerCase()))
			dispatch(setSortedPosts(filteredPosts))
		}
	}

	const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') searchHandler()
	}

	const cancelHandler = () => {
		setSearchQuery('')
	}

	return (
		<div className={styles.searchContainer}>
			<input className={styles.customInput} placeholder='Поиск по названию' value={searchQuery}
						 onChange={event => setSearchQuery(event.target.value)} onKeyDown={onPressEnter}/>
			<div className={styles.closeButtonContainer} onClick={cancelHandler}>
				<CloseButton/>
			</div>
			<Button variant="outline-success" onClick={searchHandler}>Искать</Button>
		</div>

	);
};

export default Search;