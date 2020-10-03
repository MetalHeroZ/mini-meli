import React from 'react';
import { useParams } from 'react-router';

export default function ProductsList() {
  const todo = useParams();
  console.log(todo);

  return (
    <div className='hola'> Lista de productos</div>
  );
}
