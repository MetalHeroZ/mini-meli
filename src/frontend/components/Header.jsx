import React from 'react';
import SearchBar from './SearchBar';
import '../assets/styles/components/Header.scss';
import { Container } from '../common';

export default function Header() {
  return (
    <header className='header'>
      <Container>
        <SearchBar />
      </Container>
    </header>
  );
}
