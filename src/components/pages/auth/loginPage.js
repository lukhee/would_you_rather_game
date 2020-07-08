import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';
import styled from 'styled-components';

const LoginCard = styled.div`
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 0px 2px #dae0e5 !important;
  }
`;

const LoginPage = ({ history, auth: { users, user }, login }) => {
  const loginHandler = (id) => {
    login(id, history);
  };
  return (
    <div className='text-center col-md-8 mx-auto py-3 border-dander'>
      <h2> Login </h2>
      <p>you login by selecting a user below </p>
      {users.map((user) => (
        <LoginCard
          key={user.id}
          className='bg-white shadow-sm p-2 py-3 mb-3 rounded'
          onClick={() => loginHandler(user.id)}
        >
          <div className='d-flex justiify-content-between'>
            <span className='my-auto mr-3 p-1 mx-4 rounded bg-danger text-white px-2'>
              {' '}
              Avatar{' '}
            </span>
            <h4 className='my-auto'>{user.name}</h4>
          </div>
        </LoginCard>
      ))}
    </div>
  );
};

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login })(LoginPage);
