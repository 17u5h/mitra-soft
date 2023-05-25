import { API_URL } from '../../constants/URLs'
import { call, put, takeEvery } from 'redux-saga/effects'
import { delay } from '../../lib/delay'
import { FETCH_USERS, isUsersLoading, setUsers } from '../reducers/usersReducer'
import { User, UsersPromise } from '../../types/User'

const fetchUsersFromAPI = () => fetch(`${API_URL}/users`)

function* fetchUsersWorker() {
  yield put(isUsersLoading(true))
  yield delay(500)
  const data: UsersPromise = yield call(fetchUsersFromAPI)
  const jsonData: User[] = yield call(() => new Promise((res) => res(data?.json())))
  yield put(setUsers(jsonData))
  yield put(isUsersLoading(false))
}

export function* usersWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersWorker)
}
