import axios from "axios";
import {API_URL} from "../constants/URLs";

export const fetchPosts = async () => {
	try {
		const {data} = await axios.get(`${API_URL}/posts`)
		return data
	} catch (e) {
		console.error('не удалось получить посты с сервера')
	}
}