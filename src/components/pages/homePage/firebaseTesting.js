import React, { useState, useEffect } from "react";
import firebase from "../../../services/firebase";

// firebase.firestore().collection('times').add({
//     'title': "time checker",
//     'time': "25sec"
// })

const FirebaseTesting = () => {
  const [questions, setQuestions] = useState([]);
  const [questionData, setData] = useState({
    question: "",
    options: {
      optionA: "",
      optionB: "",
    },
  });
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("questionsTag")
      .onSnapshot((snap) => {
        const newQuestions = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuestions(newQuestions);
      });
    return () => unsubscribe();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("questionsTag")
      .add({ questionData })
      .then(() => {
        setData({
          question: "",
          options: {
            optionA: "",
            optionB: "",
          },
        });
      })
      .catch((error) => {
        throw error;
      });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name !== "question") {
      setData({
        ...questionData,
        options: {
          ...questionData.options,
          [name]: value,
        },
      });
    } else {
      setData({
        ...questionData,
        [name]: value,
      });
    }
  };
  return (
    <div>
      <h1> Firebase Api tesing </h1>
      <form onSubmit={(e) => onSubmit(e)} className="form w-75 mx-auto">
        <input
          onChange={(e) => onChangeHandler(e)}
          name="question"
          type="text"
          value={questionData.question}
          className="form-control mb-2"
        />
        <input
          onChange={(e) => onChangeHandler(e)}
          name="optionA"
          type="text"
          value={questionData.options.optionA}
          className="form-control mb-2"
        />
        <input
          onChange={(e) => onChangeHandler(e)}
          name="optionB"
          type="text"
          value={questionData.options.optionB}
          className="form-control mb-2"
        />
        <button className="btn btn-danger"> Submit </button>
      </form>
      <br />

      <div>
        <ul>
          {questions.map((quest) => (
            <li key={quest.id}> {quest.questionData.question} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FirebaseTesting;
