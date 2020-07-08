import React, { useState } from 'react';
import styled from 'styled-components';

const OptionDiv = styled.div`
  cursor: pointer;
  background: ${(p) => (p.selectedOption === true ? '#dc3545c2 !important' : null)};
  &:hover {
    background: lightgrey;
  }
`;

const QuestionCard = ({
  updateQuestion,
  ques: {
    userId,
    id,
    questionTag,
  },
}) => {
  const [isSelected, setIsSelected] = useState(false)

  const selectHandler = (e) => {
    const option = e.target.id
    if(!isSelected){
      setIsSelected(`${id}_${option}`)
      updateQuestion({questID : id, option})
    }
  }

  return (
    <div className='shadow p-3 bg-light mb-5 border rounded-sm'>
      <OptionDiv
        selectedOption={`${id}_optionA` === isSelected ? true : false}
        onClick={(e)=>selectHandler(e)}
        className='d-flex justify-content-between mb-2 p-1 px-2 shadow rounded-sm'
        id="optionA"
      >
        <span className='p-1 px-2 rounded-circle border'>A</span>
        <p className='my-auto'> {questionTag && questionTag.optionA} </p>
        <div className='my-auto'>
          <input type='radio' />
        </div>
      </OptionDiv>
      <p className='text-weight-bold mb-1'> OR </p>
      <OptionDiv
        selectedOption={`${id}_optionB` === isSelected ? true : false}
        onClick={(e)=>selectHandler(e)}
        className='d-flex justify-content-between mb-2 p-1 px-2 shadow rounded-sm'
        id="optionB"
      >
        <span className='p-1 px-2 rounded-circle border'>B</span>
        <span className='my-auto'> {questionTag && questionTag.optionB} </span>
        <div className='my-auto'>
          <input type='radio' />
        </div>
      </OptionDiv>
    </div>
  );
};

export default QuestionCard;
