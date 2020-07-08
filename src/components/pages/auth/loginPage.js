import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';

const LoginPage = ({ history, auth: { users, user }, login }) => {
  const loginHandler = (id) => {
    login(id, history);
  };
  return (
    <div className='text-center col-md-8 mx-auto py-3 border-dander'>
      <h2> Login </h2>
      <p>you login by selecting a user below </p>
      {users.map((user) => (
        <div
          key={user.id}
          className='bg-warning p-2 py-3 mb-3 rounded'
          onClick={() => loginHandler(user.id)}
        >
          <div className='d-flex justiify-content-between'>
            <span className='my-auto mr-3 p-1 rounded bg-danger'> Avatar </span>
            <h4 className='my-auto'>{user.name}</h4>
          </div>
        </div>
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
