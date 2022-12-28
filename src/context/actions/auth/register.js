import {
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESSFUL,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axios';

export default ({
    email,
    username,
    lastname: last_name,
    firstname: first_name,
    password,
  }) =>
  async dispatch => {
    dispatch({
      type: REGISTER_LOADING,
    });
    try {
      const {data} = await axiosInstance.post('/auth/create', {
        email,
        username,
        last_name,
        first_name,
        password,
      });
      dispatch({type: REGISTER_SUCCESSFUL, payload: data});
    } catch (error) {
      dispatch({
        type: REGISTER_FAILED,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong'},
      });
    }
  };
