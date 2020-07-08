import { CREATE_QUESTION, UPDATE_QUESTION } from './constType';

export const createQuestion = (data, userId, history) => async (dispatch) => {
  dispatch({
    type: CREATE_QUESTION,
    payload: {question: data, userId:userId}
  });
  history.push('./homepage')
};

export const updateQuestion = (questValue, userID) => async (dispatch) => {
  dispatch({
    type: UPDATE_QUESTION,
    payload: {questValue, userID}
  });
};
