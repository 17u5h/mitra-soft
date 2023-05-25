import { all } from 'redux-saga/effects'
import { postsWatcher } from './postsSaga'
import { usersWatcher } from './usersSaga'

export function* rootWatcher() {
  yield all([postsWatcher(), usersWatcher()])
}
