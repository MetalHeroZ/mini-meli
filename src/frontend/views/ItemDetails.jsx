import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../common';
import Header from '../components/Header';
import { getItemDetails } from '../redux/selectors';

export default function ProductDetails() {
  const details = useSelector(getItemDetails);
  const { id, title, price } = details;

  return (
    <>
      <Header />
      <Container>
        {`${id} | ${title}`}
        <div>
          {price.amount}
          <small>
            {' '}
            {price.decimals}
          </small>
        </div>
      </Container>
    </>
  );
}
