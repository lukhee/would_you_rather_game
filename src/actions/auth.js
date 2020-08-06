import { LOGIN, LOGOUT, CREATE_USER } from "./constType";
import {
  signup,
  signin,
  logout,
  addUser,
  findUser,
} from "../components/pages/helpers/auth";

export const login = (data, history) => async (dispatch) => {
  try {
    const loginUser = await signin(data.email, data.password);
    let userId = loginUser.user.uid;
    const find_user = await findUser(userId);
    const { username, email, createdAt, user_id } = find_user.docs[0].data();
    dispatch({
      type: LOGIN,
      payload: { username, email, login_id: user_id, createdAt, user_id:find_user.docs[0].id },
    });
    history.push("/homePage");
  } catch (error) {
    console.log(error.message);
  }
};

export const logoutUser = (history) => async (dispatch) => {
  try {
    await logout();
    dispatch({
      type: LOGOUT,
    });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (data, history) => async (dispatch) => {
  try {
    const user_data = await signup(data.email, data.password);
    // new User Object
    data.user_id = user_data.user.uid;
    data.createdAt = new Date().toISOString();
    const { email, username, createdAt, user_id } = data;

    // create new User
    const newUser = await addUser({ user_id, email, username, createdAt });
    dispatch({
      type: CREATE_USER,
      payload: { username, email, login_id: newUser.id, createdAt },
    });
    history.push("/homePage");
  } catch (error) {
    console.log(error.message);
  }
};
