import React, { useEffect, useState } from 'react';
import '../assets/styles/components/Search.scss';

const SearchBar = () => {
  const [isBlocked, setIsBlocked] = useState(false);
  const searchInputRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setIsBlocked(true);
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <>
      <div className='logo-main'> MELI </div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          ref={searchInputRef}
          placeholder='Nunca dejes de buscar'
          disabled={isBlocked}
        />
      </form>
    </>
  );
};

export default SearchBar;
