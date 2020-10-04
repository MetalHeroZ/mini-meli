import React from 'react';
import { numberHumanized } from '../utils/index';
import ShippingIcon from '../assets/static/ic_shipping.png';
import '../assets/styles/components/Item.scss';

export default function Item({ itemData }) {
  const {
    id,
    title,
    price,
    picture,
    free_shipping: freeShipping,
    owner_address: address,
  } = itemData;
  const urlDetails = `/items/${id}`;
  const priceFormated = numberHumanized(price.amount);

  return (
    <div className='item-wrapper'>
      <a href={urlDetails}>
        <img
          className='item-wrapper__img'
          loading='lazy'
          src={picture}
          alt={title}
        />
      </a>
      <div className='item-wrapper__data'>
        <div className='item'>
          <div className='price'>
            <span className='price__amount price__amount--padding-rigth'>
              {`$ ${priceFormated}`}
            </span>
            {freeShipping && (
              <img
                className='free-shipping'
                src={ShippingIcon}
                alt='Envio gratis'
              />
            )}
          </div>
          <div className='item__title item__title--clamp-2'>
            <a
              href={urlDetails}
              className='title__link title__link--decoration-off'
            >
              {title}
            </a>
          </div>
        </div>
        <span className='item-wrapper__location'>
          {address}
        </span>
      </div>
    </div>
  );
}
