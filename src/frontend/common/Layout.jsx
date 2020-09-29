import React from 'react';
import SearchBar from '../components/SearchBar';

const Layout = ({ children }) => (
  <>
    <SearchBar />
    {children}
  </>
);

export default Layout;
