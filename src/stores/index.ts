import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as rawUseDispatch,
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { talkSlice } from './talk';

export const store = configureStore({
  reducer: {
    talk: talkSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useDispatch = () => rawUseDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
