import {configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "./reducers/postsReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./saga";
import {usersReducer} from "./reducers/usersReducer";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	reducer: {
		postsReducer,
		usersReducer
	},
	middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>