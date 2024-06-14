import React from 'react';

const Tradutor = ({ changeLanguage }) => {
  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pt')}>Português</button>
    </div>
  );
};

export default Tradutor;