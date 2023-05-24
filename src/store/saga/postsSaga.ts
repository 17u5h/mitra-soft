import {call, put, takeEvery} from 'redux-saga/effects'
import {FETCH_POSTS, isPostsLoading, setPosts} from "../reducers/postsReducer";
import {Post, PostsPromise} from "../../types/Post";
import {API_URL} from "../../constants/URLs";
import {delay} from "../../lib/delay";

const fetchPostsFromAPI = () => fetch(`${API_URL}/posts`)

function* fetchPostsWorker() {
	yield put(isPostsLoading(true))
	yield delay(500)
	const data: PostsPromise = yield call(fetchPostsFromAPI)
	const jsonData: Post[] = yield call(() => new Promise(res => res(data?.json())))
	yield put(setPosts(jsonData))
	yield put(isPostsLoading(false))
}

export function* postsWatcher() {
	yield takeEvery(FETCH_POSTS, fetchPostsWorker)
}