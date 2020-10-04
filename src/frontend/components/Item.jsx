import React from 'react';
import '../assets/styles/components/Item.scss';

export default function Item({ itemData }) {
  const { id, title, price } = itemData;
  const urlDetails = `/items/${id}`;

  return (
    <div className='item-container'>
      <div className='item'>
        <a href={urlDetails}>{title}</a>
        <div>
          {price.amount}
        </div>
      </div>
    </div>
  );
}
