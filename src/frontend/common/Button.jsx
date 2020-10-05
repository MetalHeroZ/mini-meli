import React from 'react';
import '../assets/styles/common/Button.scss';

export default function Button({ label, handleClick = () => {}, big = false, fullWidth = true }) {
  const isBig = big ? 'common-button--big' : '';
  const isFullWidth = fullWidth ? 'common-button--fullWith' : '';
  const styles = `common-button ${isBig} ${isFullWidth}`;

  const handleOnClick = (event) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <button
      onClick={handleOnClick}
      type='submit'
      className={styles}
    >
      <span>{label}</span>
    </button>
  );
}
