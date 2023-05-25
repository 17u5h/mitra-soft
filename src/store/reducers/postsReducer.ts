import {Post} from "../../types/Post";
import {AnyAction} from "@reduxjs/toolkit";

const initialState = {
	posts: [],
	sortedPosts: [],
	isLoading: false
}
export const FETCH_POSTS = 'FETCH_POSTS'
export const SET_POSTS = 'SET_POSTS'
export const SET_SORTED_POSTS = 'SET_SORTED_POSTS'
export const LOADING_SWITCH = 'LOADING_SWITCH'

export const postsReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case SET_POSTS: {
			return {...state, posts: action.payload}
		}
		case SET_SORTED_POSTS: {
			return {...state, sortedPosts: action.payload}
		}
		case LOADING_SWITCH: {
			return {...state, isLoading: action.payload}
		}
		default:
			return state
	}
}

export const fetchPosts = () => ({type: FETCH_POSTS})
export const setPosts = (payload: Post[]) => ({type: SET_POSTS, payload})
export const setSortedPosts = (payload: Post[]) => ({type: SET_SORTED_POSTS, payload})
export const isPostsLoading = (payload: boolean) => ({type: LOADING_SWITCH, payload})
