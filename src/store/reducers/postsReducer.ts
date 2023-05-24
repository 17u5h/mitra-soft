import {Post} from "../../types/Post";

type Action = {
	type: string
	payload: Post[]
}

const initialState: Post[] = []

export const SET_POSTS = 'SET_POSTS'
export const FETCH_POSTS = 'FETCH_POSTS'

export const postsReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case SET_POSTS: {
			return {...state, posts: action.payload}
		}
		default:
			return state
	}
}

export const setPosts = (payload: Post[]) => ({type: SET_POSTS, payload})
export const fetchPosts = () => ({type: FETCH_POSTS})