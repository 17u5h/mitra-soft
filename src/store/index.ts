import {configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "./reducers/postsReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./saga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	reducer: {
		postsReducer,
	},
	middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>