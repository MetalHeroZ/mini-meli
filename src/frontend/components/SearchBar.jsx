import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getQuery } from '../redux/selectors';
import LogoML from '../assets/static/Logo_ML_large.png';
import SearchIcon from '../assets/static/ic_Search_large.png';
import '../assets/styles/components/Search.scss';

const SearchBar = () => {
  const query = useSelector(getQuery) || '';
  const queryInputRef = React.createRef();

  useEffect(() => {
    queryInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanQuery = queryInputRef.current.value.toLowerCase().trim();
    if (cleanQuery) {
      window.location.href = `/items?query=${cleanQuery}`;
    }
  };

  return (
    <div className='search-bar'>
      <a href='/'>
        <img
          className='search-bar__logo search-bar__logo--margin-right'
          src={LogoML}
          alt='MiniMeli'
          title='MiniMeli'
        />
      </a>
      <form onSubmit={handleSubmit} className='search-bar__form'>
        <input
          className='search-bar__input search-bar__input--with-button'
          aria-label='Busca lo que quieras'
          type='text'
          ref={queryInputRef}
          defaultValue={query}
          placeholder='Nunca dejes de buscar'
        />
        <button
          className='search-bar__button'
          type='submit'
        >
          <img className='button__icon' src={SearchIcon} alt='search' />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
