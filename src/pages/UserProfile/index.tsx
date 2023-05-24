import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchUsers} from "../../store/reducers/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";

const UserProfile = () => {
	const {userId} = useParams()
	const dispatch = useDispatch()
	const users = useSelector((state: RootState) => state.usersReducer.users)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	return (
		<div>
			user profile
		</div>
	);
};

export default UserProfile;