import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchPosts} from "../../lib/fetchPosts";
import {FETCH_POSTS, setPosts} from "../reducers/postsReducer";
import {Post} from "../../types/Post";


const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* fetchPostsWorker() {
	yield delay(500)
	const data: Post[] = yield call(fetchPosts)
	yield put(setPosts(data))
}

export function* postsWatcher() {
	takeEvery(FETCH_POSTS, fetchPostsWorker)
}