import * as actionType from '../constants/user.Constants'
import { toast } from 'react-toastify';
import userData from "../../database/user.json"

export const getUserData = () => async (dispatch) => {
    try {
        const response = userData;
      
        dispatch({ type: actionType.USER_LOGIN_SUCCESS, payload: response });
      } catch (error) {
        dispatch({
          type: actionType.USER_LOGIN_FAIL,
          payload: error.response.message,
        });
        toast.error(error.response.data.message, {
          position: "top-center",
        });
      }
}
