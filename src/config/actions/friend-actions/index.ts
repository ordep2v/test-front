import axios from 'axios';
import {
  FRIEND_GET_FAIL,
  FRIEND_GET_REQUEST,
  FRIEND_GET_SUCCESS,
} from '../../constants/friend-constants';
import { AppDispatch } from '../../store';

export const get =
  () =>
  async (dispatch: AppDispatch, getState: () => any): Promise<void> => {
    dispatch({ type: FRIEND_GET_REQUEST });
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      const { data } = await axios.get('http://localhost:3001/api/user/list-friends', {
        headers: {
          Token: `${userInfo.token}`,
        },
      });
      dispatch({ type: FRIEND_GET_SUCCESS, payload: data });
    } catch (error: any) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: FRIEND_GET_FAIL, payload: message });
    }
  };
