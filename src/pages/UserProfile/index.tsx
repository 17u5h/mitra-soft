import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchUsers} from "../../store/reducers/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {User} from "../../types/User";
import {Spinner} from "react-bootstrap";

const UserProfile = () => {
	const [foundUser, setFoundUser] = useState<User>()
	const {userId} = useParams()
	const dispatch = useDispatch()
	const users = useSelector((state: RootState) => state.usersReducer.users)
	const isLoading = useSelector((state: RootState) => state.usersReducer.isLoading)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	useEffect(() => {
		const foundUser = users.filter((user: User) => user.id === Number(userId))
		setFoundUser(foundUser[0])
	}, [users])


	return (
		<div>
			{isLoading ?
				<Spinner animation='border' variant='secondary'/> :
				<div>{foundUser?.name}</div>
			}
		</div>
	);
};

export default UserProfile;