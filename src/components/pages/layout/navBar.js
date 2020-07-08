import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';

const NavBarDiv = styled.div`
  max-height: 10vh;
  height: 10vh;
`;

const VerticalLine = styled.span`
  border-left: 2px solid grey;
  height: 60%;
  margin: auto 10px;
`;

const Badge = styled.span`
  position: absolute;
  top: -3px;
  font-size: 10px;
  right: -10%;
`;

const NavBar = ({
  auth: { user, isAuthenticated, loading },
  questions,
  logout,
}) => {
  let no_q_created,
    no_q_answered = 0;
  if (isAuthenticated) {
    no_q_created = questions.filter((q) => q.creator === user.id).length;
    no_q_answered = questions.filter(({ answers }) =>
      answers.some((item) => [user.id].includes(item))
    ).length;
  }
  return (
    <NavBarDiv className='row justify-content-between p-2 px-4 border-bottom border-danger'>
      <div className='col-2 d-flex justify-content-between'>
        <h2 className='my-auto font-weight-bold'> WYR </h2>
        <VerticalLine />
      </div>
      {!loading && isAuthenticated && (
        <div className='d-flex justify-content-between col-10 my-auto'>
          <div className='d-flex'>
            <p className='p-1 my-auto mx-2 shadow-sm bg-white rounded position-relative'>
              Q-Ans
              <Badge className='badge badge-danger ml-1'>{no_q_answered}</Badge>
            </p>
            <p className='p-1 my-auto mr-2 shadow-sm bg-white rounded position-relative'>
              Q-Crt
              <Badge className='badge badge-danger ml-1'>{no_q_created}</Badge>
            </p>
          </div>
          <div className='d-flex'>
            <p className='my-auto name font-weight-bold'> {user.name}</p>
            <button
              className='btn btn-sm btn-outline-danger bg-white ml-2'
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </NavBarDiv>
  );
};

// NavBar.Proptypes = {
//   auth: Proptypes.object.isRequired
// };

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    questions: state.questions.questions,
  };
};

export default connect(mapStateToProps, { logout })(NavBar);
