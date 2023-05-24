import {AnyAction} from "@reduxjs/toolkit";
import {User} from "../../types/User";
import {LOADING_SWITCH} from "./postsReducer";

const initialState = {
	users: [],
	isLoading: false
}

export const FETCH_USERS = 'FETCH_USERS'
export const SET_USERS = 'SET_USERS'

export const usersReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case SET_USERS: {
			return {...state, users: action.payload}
		}
		default:
			return state
	}
}

export const fetchUsers = () => ({type: FETCH_USERS})
export const setUsers = (payload: User[]) => ({type: SET_USERS, payload})
export const isUsersLoading = (payload: boolean) => ({type: LOADING_SWITCH, payload})