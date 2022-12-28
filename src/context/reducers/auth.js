import {
  REGISTER_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESSFUL,
} from '../../constants/actionTypes';

export const authReducer = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {...state, loading: true};
    case REGISTER_SUCCESSFUL:
      return {...state, loading: false, data: payload};
    case REGISTER_FAILED:
      return {...state, loading: false, error: payload};
    default:
      return state;
  }
};
