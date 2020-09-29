import React from 'react';
import '../assets/styles/common/common.scss';

export function Container({ children }) {
  return (
    <div className='container'>
      { children }
    </div>
  );
}

export function Panel({ children }) {
  return (
    <div className='panel'>
      { children }
    </div>
  );
}
