import React from 'react';
import QuestionTag from './questionCard';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { updateQuestion } from '../../../actions/question';
import Proptypes from 'prop-types';

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
        <Button to='/homepage' className='mb-3 d-inline btn btn-outline-danger'>
          <span>Toggle Question </span>
        </Button>
        <div className='border border-dander text-center py-3 px-2 mt-4 bg-white '>
          <h2 className="text-weight-bold"> WOULD YOU RATHER </h2>
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


// styling using styled-components
const btn = keyframes`
  from {box-shadow: 0 0 20px rgb(220, 53, 69, 0.4)};
  to {box-shadow: 0 0 20px rgb(220, 53, 69, 0.7)};
`;

const QuestionDiv = styled.div`
  max-height: 300px;
  overflow: auto;
`;

const Button = styled.button`
  box-shadow: 0 0 20px #dc3545;
  animation: ${btn} 1s infinite;
  // animation-fill-mode: forwards;

  transition-property: transform;
  transition-duration: 2s;

  &:hover {
    // transform: rotateY(360deg)
  }
`