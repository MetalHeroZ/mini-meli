import React from 'react';
import '../assets/styles/components/Item.scss';

export default function Item({ itemData }) {
  const { id, title, price } = itemData;
  const urlDetails = `/items/${id}`;

  return (
    <a href={urlDetails}>
      <div className='item'>
        {title}
        <div>
          {price.amount}
        </div>
      </div>
    </a>
  );
}
