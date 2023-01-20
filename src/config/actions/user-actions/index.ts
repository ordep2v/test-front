import axios from 'axios';
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from '../../constants/user-constants';
import { AppDispatch } from '../../store';

export const signin =
  (login: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { login, password } });
    try {
      const { data } = await axios.post(
        'http://localhost:3001/api/user/login',
        { login, password },
      );
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
