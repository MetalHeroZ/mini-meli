import React from 'react';
import '../assets/styles/common/InfoSection.scss';

export default function InfoSection({ title, text, preFormated }) {
  return (
    <div className='info-section'>
      <div className='info-section__title'>{title}</div>
      <p className={`info-section__text ${preFormated && 'info-section__preformated'}`}>
        {text}
      </p>
    </div>
  );
}
