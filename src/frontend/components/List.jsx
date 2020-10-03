import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../common';
import { getItems } from '../redux/selectors';
import Header from './Header';

const List = () => {
  const items = useSelector(getItems);

  return (
    <>
      <Header />
      <Container>
        <div>{`Total: ${items.length}`}</div>
      </Container>
    </>
  );
};

export default List;
