import {configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "./reducers/postsReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./saga";

const saga = createSagaMiddleware()

export const store = configureStore({
	reducer: {
		postsReducer,

	},
	middleware: [saga]
})

saga.run(rootWatcher)