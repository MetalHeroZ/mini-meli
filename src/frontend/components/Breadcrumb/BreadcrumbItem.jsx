import React from 'react';
import '../../assets/styles/components/Breadcrumb.scss';

const BreadcrumbItem = ({ value }) => (
  <li className='breadcrumb__li-item'>{value}</li>
);

export default BreadcrumbItem;
