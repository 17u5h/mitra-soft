import {call, put, takeEvery} from 'redux-saga/effects'
import {FETCH_POSTS, setPosts} from "../reducers/postsReducer";
import {Post, PostsPromise} from "../../types/Post";
import {API_URL} from "../../constants/URLs";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

const fetchPostsFromAPI = () => fetch(`${API_URL}/posts`)

function* fetchPostsWorker() {
	yield delay(500)
	const data: PostsPromise = yield call(fetchPostsFromAPI)
	const jsonData: Post[] = yield call(() => new Promise(res => res(data?.json())))
	console.log(jsonData)
	yield put(setPosts(jsonData))
}

export function* postsWatcher() {
	yield takeEvery(FETCH_POSTS, fetchPostsWorker)
}