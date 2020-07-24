import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';
import styled, { keyframes } from 'styled-components';

const LoginPage = ({ history, auth: { users, isAuthenticated }, login }) => {
  const loginHandler = (id) => {
    login(id, history);
  };
  // if(isAuthenticated){
  //   return history.push('/homePage')
  // }
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
            <H4 className='my-auto'>{user.name}</H4>
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

// styling using styled-component
const loginInfo = keyframes`
  from {left: -170%};
  to { left: 0}
`
const LoginName = keyframes`
  from {opacity: 0};
  to { opacity: 1}
`

const LoginCard = styled.div`
  cursor: pointer;
  position: relative;
  left: -170%;
  animation-name: ${loginInfo};
  animation-duration: 4s;
  animation-iteration-count: 1;
  animation-delay: 1s;
  // animation-direction: alternate;
  animation-fill-mode: forwards;
  &:hover {
    box-shadow: 2px 2px 0px 2px #dae0e5 !important;
  }
`;

const H4 = styled.h4`
  opacity: 0;
  animation: ${LoginName} 3s 1;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`