import React from 'react';
import { Container, Panel } from '../common';
import Header from '../components/Header';
import ItemDetails from '../components/ItemDetails';

export default function ProductDetails() {
  return (
    <>
      <Header />
      <Container>
        <Panel withSpace>
          <ItemDetails />
        </Panel>
      </Container>
    </>
  );
}
