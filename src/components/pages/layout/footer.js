import React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router"

const FooterDiv = styled.div`
  max-height: 10vh;
  height: 10vh;
`;

const SettingIcon = styled.i`
  font-size: 1.5rem;
`;

const Footer = ({ history }) => {
  return (
    <FooterDiv className='bg-danger p-3 my-auto'>
      <div className='d-flex justify-content-between'>
        <button
          onClick={() => history.push('/create_question')}
          className='btn btn-light btn-sm'
        >
          Create Question
        </button>
        <SettingIcon className='text-white my-auto'>
          <i className='fas fa-cogs'></i>
        </SettingIcon>
      </div>
    </FooterDiv>
  );
};

export default withRouter(Footer);
