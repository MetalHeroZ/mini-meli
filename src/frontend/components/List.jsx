import React from 'react';
import { useSelector } from 'react-redux';
import { getItems } from '../redux/selectors';

const List = () => {
  const items = useSelector(getItems);

  return (
    <div>{`Total: ${items.length}`}</div>
  );
};

export default List;
