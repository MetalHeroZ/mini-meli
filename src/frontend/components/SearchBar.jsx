import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/styles/components/Search.scss';
import { getQuery } from '../redux/selectors';

const SearchBar = () => {
  const query = useSelector(getQuery) || '';
  const queryInputRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanQuery = queryInputRef.current.value.toLowerCase().trim();
    if (cleanQuery) {
      window.location.href = `/items?query=${cleanQuery}`;
    }
  };

  return (
    <>
      <div className='logo-main'>
        <a href='/'>MELI</a>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          ref={queryInputRef}
          defaultValue={query}
          placeholder='Nunca dejes de buscar'
        />
      </form>
    </>
  );
};

export default SearchBar;
