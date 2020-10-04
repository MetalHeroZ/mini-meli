import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Panel } from '../common';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Header from '../components/Header';
import Item from '../components/Item';
import { getCategoriesFronSearchResults, getItems } from '../redux/selectors';

export default function ProductsList() {
  const itemsResult = useSelector(getItems);
  const categories = useSelector(getCategoriesFronSearchResults);

  const items = itemsResult.map(item => (
    <Item key={item.id} itemData={item} />
  ));

  return (
    <>
      <Header />
      <Container>
        <Breadcrumb levels={categories} />
        <Panel>
          {items}
        </Panel>
      </Container>
    </>
  );
}
