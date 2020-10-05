import React from 'react';
import { useSelector } from 'react-redux';
import { getItemDetails } from '../redux/selectors';
import { numberHumanized, decimalHumanized } from '../utils/index';
import InfoSection from '../common/InfoSection';
import Button from '../common/Button';
import '../assets/styles/components/ItemDetails.scss';

export default function ItemDetails() {
  const details = useSelector(getItemDetails);
  const { title, picture, price, condition, description, sold_quantity: selledQuantity } = details;

  const amountString = numberHumanized(price.amount);
  const decimalsString = decimalHumanized(price.decimals);

  const sold = selledQuantity > 0;
  const selledLabel = `| ${selledQuantity} vendido${selledQuantity > 1 ? 's' : ''}`;
  const subtitle = `${condition ? 'Nuevo' : 'Usado'} ${sold ? selledLabel : ''}`;

  const handleOnClickBuy = () => {
    alert(':D');
  };

  return (
    <div className='item-details'>
      <div className='item-details-main'>
        <div className='item-details-main__picture'>
          <img className='item-details-main__picture-img' src={picture} alt={title} />
        </div>
        <div className='item-details-main__main-info'>
          <div className='main-info__subtitle'>{subtitle}</div>
          <div className='main-info__title'>{title}</div>
          <div className='main-info__price'>
            <div className='main-info__price__amount'>{`$ ${amountString}`}</div>
            <div className='main-info__price__decimals'>{decimalsString}</div>
          </div>
          <Button
            handleClick={handleOnClickBuy}
            label='Comprar'
            fullWidth
            big
          />
        </div>
      </div>
      <InfoSection
        title='Descripción del producto'
        text={description}
        preFormated
      />
    </div>
  );
};
