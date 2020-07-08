import React from 'react';
import QuestionTag from './questionCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateQuestion } from '../../../actions/question';
import Proptypes from 'prop-types';

const QuestionDiv = styled.div`
  max-height: 300px;
  overflow: auto;
`;

const HomePage = ({ questions, updateQuestion, auth:{user, loading} }) => {
  // finding the unanswered question
  const unAnsweredQuestion = questions.filter(({answers}) => !answers.some(item => [user.id].includes(item)))

  // update question
  const updateQuestionHandler = (questValue) => {
    setTimeout(() => {
      updateQuestion(questValue, user.id);
    }, 1000);
  };

  return (
    <div className='h-100'>
      <div className='col-md-8 mx-auto py-4 h-100'>
        <button to='/homepage' className='mb-3 d-inline btn btn-light'>
          <span>Toggle Question </span>
        </button>
        <div className='border border-dander text-center py-3 px-2 mt-4 '>
          <h2> WOULD YOU RATHER </h2>
          {!loading && unAnsweredQuestion.length !== 0 ? (
            <QuestionDiv>
              {unAnsweredQuestion.map((ques) => (
                <QuestionTag
                  updateQuestion={(id) => updateQuestionHandler(id)}
                  ques={ques}
                  key={ques.id}
                />
              ))}
            </QuestionDiv>
          ) : <p> You have answered all the questions</p>}
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  questions: Proptypes.array.isRequired,
  updateQuestion: Proptypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    questions: state.questions.questions,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { updateQuestion })(HomePage);
