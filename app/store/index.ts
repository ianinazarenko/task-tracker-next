import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import tasksReducer from './tasks';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;