import React from 'react';
import styled, {keyframes} from 'styled-components';
import { withRouter } from "react-router";
import {connect} from 'react-redux'

const Footer = ({ history, isAuthenticated }) => {
  return (
    <FooterDiv className='bg-danger p-3 my-auto'>
      {/* <SettingContainer className='bg-light p-4 shadow-lg shadow-danger'>
        Update and Delete field
      </SettingContainer> */}
      <div className='d-flex justify-content-between'>
        <button
          onClick={() => history.push('/create_question')}
          className='btn btn-sm btn-light'
          disabled = {!isAuthenticated && true}
        >
          Create Question
        </button>
        <SettingIcon className='text-white my-auto fas fa-cogs btn' />
      </div>
    </FooterDiv>
  );
};

const mapStateToProp = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProp) (withRouter(Footer));


// styling with css
const FooterDiv = styled.div`
  max-height: 10vh;
  height: 10vh;
`;

const SettingIcon = styled.i`
  font-size: 1.5rem;
`;

const showSetting = keyframes`
  from { right: -10 }
  to { right: 0 }
`

const SettingContainer = styled.div`
  position: absolute;
  bottom: 10vh;
  z-index: 100;
  right: 0;
  animation: ${showSetting} 4s 1;
  animation-fill-mode: forwards
`
