import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { friendGetReducer } from '../reducers/friend-reducers';
import {
  userSigninReducer,
} from '../reducers/user-reducers';

const initialState: any = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo') || '')
      : null,
  },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  friendList: friendGetReducer,
});

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState> | any;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = () => store.dispatch;
export default store;
