import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';
export const store = configureStore({
 reducer: {
 counter: counterReducer,
 todo: todoReducer // 👈 todo slice 추가
 }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;