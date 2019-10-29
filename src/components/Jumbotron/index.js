import React from 'react';
import './style.css';

function Jumbotron({ children }) {
  return (
    <div
      className='jumbotron'
      style={{ textAlign: 'center', height: 300, clear: 'both' }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
