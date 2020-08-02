import React , { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/auth';
import { withRouter } from 'react-router-dom';

const NavBar = ({
  auth: { user, isAuthenticated, loading },
  questions,
  logoutUser,
  history,
}) => {
  const [authToggle, setAuth] = useState(true)
  let no_q_created,
    no_q_answered = 0;

  if (isAuthenticated) {
    no_q_created = questions.filter((q) => q.creator === user.id).length;
    no_q_answered = questions.filter(({ answers }) =>
      answers.some((item) => [user.id].includes(item))
    ).length;
  }

  let toggleRegister = authToggle ? "Register" : "Login"
  const authHandler = () => {
    setAuth(!authToggle)
    history.push(`/${toggleRegister}`)
  }

  const logoutUserHandler = () => {
    setAuth(true)
    logoutUser(history)
  }

  return (
    <NavBarDiv className='m-0 my-auto border-bottom border-danger'>
      <NavContent className= "row justify-content-between m-0 p-2 px-4">
        <div className='col-2 d-flex justify-content-around p-0'>
          <h2 className='my-auto font-weight-bold'> WYR </h2>
          <VerticalLine />
        </div>
        {!loading && isAuthenticated ? (
          <div className='d-flex justify-content-between col-10 my-auto p-0'>
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
              <P className='my-auto name font-weight-bold'> {user.username}</P>
              <button
                className='btn btn-sm btn-outline-danger bg-white ml-2'
                onClick={logoutUserHandler}
              ><span className="pr-1 text-danger"> <i className="fas fa-sign-out-alt"></i></span>
                logout
              </button>
            </div>
          </div>
        ) : <button onClick={authHandler} className="btn btn-sm btn-outline-danger"> {toggleRegister} </button>}
      </NavContent>
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

export default connect(mapStateToProps, { logoutUser })(withRouter(NavBar));



// CSS styling with styled components
const headerDropDown = keyframes`
  from { top: -80% }
  to { top: 13% }
`

const LoginName = keyframes`
  from {opacity: 0};
  to { opacity: 1}
`

const NavContent = styled.div`
  position: relative;
  animation: ${headerDropDown} 4s;
  animation-fill-mode: forwards;
  // animation-iteration-count: infinite
  animation-direction: alternate;
`

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

const P = styled.p`
  opacity: 0;
  animation: ${LoginName} 3s 1;
  // animation-delay: 2s;
  animation-fill-mode: forwards;
`
