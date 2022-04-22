import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './slice/token-slice';

const store = configureStore({
	reducer: {
		token: tokenSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;