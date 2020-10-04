import React from 'react';
import '../assets/styles/common/Button.scss';

export default function Button({ label, handleClick = () => {}, big = false, fullWith = true }) {
  const styles = `common-button ${big && 'common-button--big'} ${fullWith && 'common-button--fullWith'}`;

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
