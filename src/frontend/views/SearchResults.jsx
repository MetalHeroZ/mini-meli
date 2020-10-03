import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../common';
import Header from '../components/Header';
import Item from '../components/Item';
import { getItems } from '../redux/selectors';

export default function ProductsList() {
  const itemsResult = useSelector(getItems);
  const items = itemsResult.map(item => (
    <Item key={item.id} itemData={item} />
  ));

  return (
    <>
      <Header />
      <Container>
        {items}
      </Container>
    </>
  );
}
