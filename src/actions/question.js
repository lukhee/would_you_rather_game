import { CREATE_QUESTION, UPDATE_QUESTION, GET_QUESTIONS } from "./constType";
import firebase from "firebase";
import { db } from "../services/firebase";
const firebaseDB = db.collection("questionsTag");

export const createQuestion = (data, userId, history) => async (dispatch) => {
  const questionObj = {
    question: { ...data },
    createdAt: new Date().toISOString(),
    creator: userId,
    answers: [],
  };
  const question = await firebaseDB.add({ ...questionObj });
  dispatch({
    type: CREATE_QUESTION,
    payload: { id: question.id, question: data, userId: userId },
  });
  history.push("./homepage");
};

export const updateQuestion = (answer, questionID) => async (dispatch) => {
  console.log(answer)
  console.log(questionID)
  try {
    const result = await db.doc(questionID).update({
      answers: firebase.firestore.FieldValue.arrayUnion(answer)
  });
  console.log(result)
  } catch (error) {
    
  }
  // dispatch({
  //   type: UPDATE_QUESTION,
  //   payload: { questValue, userID },
  // });
};

export const getQuestions = () => async (dispatch) => {
  try {
    const result = await firebaseDB.get();
    const questions = result.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    dispatch({
      type: GET_QUESTIONS,
      payload: questions,
    });
  } catch (error) {
    console.log(error.message);
  }
};
