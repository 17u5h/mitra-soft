import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import UserProfile from "../pages/UserProfile";
import MyProfile from "../pages/MyProfile";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Main/>}/>
			<Route path="/my-profile" element={<MyProfile/>}/>
			<Route path="/user-profile/:userId" element={<UserProfile/>}/>

			<Route path="*" element={<NotFound/>}/>
		</Routes>
	);
};

export default AppRoutes;