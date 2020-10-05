import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from '../common';
import Header from '../components/Header';
import '../assets/styles/App.scss';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mini Meli</title>
        <meta name='description' content='Nunca pares de buscar!' />
      </Helmet>
      <Header />
      <Container>
        Aca estaria la grandios HOME
      </Container>
    </>
  );
}
