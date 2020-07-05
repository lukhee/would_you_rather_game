import React from 'react';

const PageNotFound = () => {
  return (
    <div className='text-center'>
      <h1> Error 400</h1>
      <p className='text-danger'>
        The page you are trying to visit doesnt exist
      </p>
    </div>
  );
};

export default PageNotFound;
