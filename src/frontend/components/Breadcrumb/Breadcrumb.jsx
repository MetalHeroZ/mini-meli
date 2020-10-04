import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import { ChevronRight } from '../../common/Icons';
import '../../assets/styles/components/Breadcrumb.scss';

export default function Breadcrumb({ levels = [] }) {
  const breadcrumbItems = levels.reduce((acc, act, index) => {
    const notLast = index < levels.length - 1;
    if (notLast) {
      acc.push(
        <BreadcrumbItem key={act} value={act} />,
        <ChevronRight className='breadcrumb__separator' />,
      );
    } else {
      acc.push(<BreadcrumbItem key={act} value={act} />);
    }
    return acc;
  }, []);

  return (
    <div className='bredcrumb'>
      <ol className='breadcrumb__ol'>
        {breadcrumbItems}
      </ol>
    </div>
  );
};

