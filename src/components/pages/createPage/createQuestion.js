import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {createQuestion} from '../../../actions/question'

function CreateQuestion({history, createQuestion, user}) {
  const [formData, setformData] = useState({
    optionA: '',
    optionB: '',
  });
  const { optionA, optionB } = formData;

  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    setformData({
      ...formData,
      [id]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createQuestion(formData, user.user_id, history)
  };

  return (
    <div className='col-md-8 mx-auto py-4 '>
      <Link to="/homepage" className='mb-3 d-inline btn btn-light'>
        <i className='fas fa-arrow-left mr-2'></i> <span>Home</span>
      </Link>
      <div className='border border-dander text-center py-3 px-2 mt-4 '>
        <h2 className="text-weight-bold"> WOULD YOU RATHER </h2>

        <form onSubmit={(e) => onSubmit(e)} className='mt-2'>
          <div className='form-group d-md-flex justify-content-between'>
            <label htmlFor='optionA' className='col-md-3 col-form-label'>
              Option A
            </label>
            <div className='col-md-9'>
              <input
                type='text'
                onChange={(e) => onChangeHandler(e)}
                value={optionA}
                placeholder='Prefer Ghana Jollof Rice'
                className='form-control'
                id='optionA'
              />
            </div>
          </div>

          <p className='font-weight-bold'> OR </p>

          <div className='form-group d-md-flex justify-content-between'>
            <label htmlFor='optionB' className='col-md-3 col-form-label'>
              Option B
            </label>
            <div className='col-md-9'>
              <input
                type='text'
                onChange={(e) => onChangeHandler(e)}
                value={optionB}
                placeholder='Prefer Nigeria Jollof Rice'
                className='form-control'
                id='optionB'
              />
            </div>
          </div>

          <input
            type='submit'
            className='form-control mt-2 btn btn-danger btn-sm w-50 mx-auto'
            disabled ={optionA !== '' && optionB !== '' ? false : true}
            value='Submit'
          />
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, {createQuestion})(CreateQuestion);
