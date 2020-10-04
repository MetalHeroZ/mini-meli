import React from 'react';
import '../../assets/styles/components/Breadcrumb.scss';

const BreadcrumbItem = ({ children }) => (
  <li className='breadcrumb__li-item'>{children}</li>
);

export default BreadcrumbItem;
