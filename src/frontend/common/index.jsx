import React from 'react';
import '../assets/styles/common/common.scss';

export function Container({ children }) {
  return (
    <div className='container'>
      { children }
    </div>
  );
}

export function Panel({ children, withSpace = false }) {
  const styles = `panel ${withSpace && 'panel--with-space '}`;
  return (
    <div className={styles}>
      { children }
    </div>
  );
}
