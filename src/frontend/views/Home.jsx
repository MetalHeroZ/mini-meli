import React from 'react';
import '../assets/styles/App.scss';
import { Container } from '../common';
import Search from '../components/SearchBar';

const Home = () => {
  return (
    <>
      <Search />
      <Container>
        Aca estaria la grandios HOME
      </Container>
    </>
  );
};

export default Home;
