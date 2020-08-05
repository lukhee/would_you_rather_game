import {
  CREATE_QUESTION,
  UPDATE_QUESTION,
  GET_QUESTIONS,
} from "../actions/constType";

const initialState = {
  loading: true,
  questions: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: [...payload],
        loading: false,
      };
    case CREATE_QUESTION:
      return {
        ...state,
        // questions: [payload, ...state.questions],
        loading: false,
      };
    case UPDATE_QUESTION:
      const updateQuestion = state.questions.find(
        (q) => q.id === payload.questValue.questID
      );
      return {
        ...state,
        questions: [
          ...state.questions.filter((q) => q.id !== payload.questValue.questID),
          {
            ...updateQuestion,
            answers: [payload.userID, ...updateQuestion.answers],
          },
        ],
        loading: false,
      };
    default:
      return state;
  }
}
