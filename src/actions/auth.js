import { LOGIN, LOGOUT, CREATE_USER } from './constType';

export const login = (id, history) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: id,
  });
  history.push('./homePage');
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const createUser = (payload, history) => (dispatch) => {
  dispatch({
    type: CREATE_USER,
    payload,
  });
  history.push('/homePage')
};