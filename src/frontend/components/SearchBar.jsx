import React from 'react';
import '../assets/styles/components/Search.scss';

const SearchBar = () => {
  return (
    <>
      <div className='logo-main'> MELI </div>
      <form>
        <input
          type='text'
          placeholder='Nunca dejes de buscar'
        />
      </form>
    </>
  );
};

export default SearchBar;
