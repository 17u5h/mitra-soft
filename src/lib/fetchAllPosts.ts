import axios from "axios";
import {API_URL} from "../constants/URLs";
import {Post} from "../types/types";

export const fetchAllPosts = async (setLoading: (loading: boolean) => void, dispatchPosts: (data: Post[]) => void) => {
	setLoading(true)
	try {
		const {data} = await axios.get(`${API_URL}/posts`)
		dispatchPosts(data)
	} catch (e) {
		console.error('не удалось получить посты с сервера')
	} finally {
		setLoading(false)
	}
}