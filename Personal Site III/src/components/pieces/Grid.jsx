import React from 'react';

import './css/Grid.css';

export function Grid({ id, className, children, dark }) {
  return (
    <div
      id={id ? id : ''}
      className={`grid ${dark ? 'grid--dark' : ''}${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
}

export function GridItem({ id, className, children, subtitle }) {
  return (
    <div
      id={id ? id : ''}
      className={`grid-item ${className ? className : ''}`}
    >
      {children}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
