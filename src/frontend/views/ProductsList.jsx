import React from 'react';
import { useParams } from 'react-router';
import List from '../components/List';

export default function ProductsList() {
  const todo = useParams();
  console.log(todo);

  return (
    <div className='hola'>
      Lista de productos
      <List />
    </div>
  );
}
