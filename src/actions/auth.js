import { LOGIN, LOGOUT } from './constType';

export const login = (id, history) => async (dispatch) => {
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
