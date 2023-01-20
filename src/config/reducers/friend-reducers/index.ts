import {
  FRIEND_GET_FAIL,
  FRIEND_GET_REQUEST,
  FRIEND_GET_RESET,
  FRIEND_GET_SUCCESS,
} from '../../constants/friend-constants';

export const friendGetReducer = (
  state = {},
  action: { type: string; payload: string },
) => {
  switch (action.type) {
    case FRIEND_GET_REQUEST:
      return { loading: true };
    case FRIEND_GET_SUCCESS:
      return { loading: false, success: action.payload };
    case FRIEND_GET_FAIL:
      return { loading: false, error: action.payload };
    case FRIEND_GET_RESET:
      return {};
    default:
      return state;
  }
};
