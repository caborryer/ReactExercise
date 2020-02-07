import React from 'react';

const FlashMessage = ({type, message}) => {

  const warning = <div className="warningMessage">{message}</div>
  const error = <div className="errorMessage">{message}</div>
  const info = <div className="successMessage">{message}</div>

  const messageTypes ={error, warning, info}

  return (
    <div>
      {messageTypes[type]}

    </div>
  );
};

export default FlashMessage;