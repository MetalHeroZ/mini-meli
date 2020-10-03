import React from 'react';
import { useParams } from 'react-router';

export default function ProductDetails() {
  const todo = useParams();
  console.log(todo);

  return (
    <div>Detalles </div>
  );
}
