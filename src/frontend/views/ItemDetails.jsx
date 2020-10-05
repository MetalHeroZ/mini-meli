import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Panel } from '../common';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Header from '../components/Header';
import ItemDetails from '../components/ItemDetails';
import { getCategoriesFronItemDetails } from '../redux/selectors';

export default function ProductDetails() {
  const categories = useSelector(getCategoriesFronItemDetails);
  return (
    <>
      <Header />
      <Container>
        <Breadcrumb levels={categories} />
        <Panel withSpace>
          <ItemDetails />
        </Panel>
      </Container>
    </>
  );
}
