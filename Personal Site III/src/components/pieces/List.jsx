import React from 'react';

import './css/List.css';

export function List({ children, heading, className, light }) {
  return (
    <ul className={`ui-list${className ? ` ${className}` : ''}`}>
      {heading && <h4 className={light ? 'light' : ''}>{heading}</h4>}
      {children}
    </ul>
  );
}

export function ListItem({ children }) {
  return <li className={'list-item__container'}>{children}</li>;
}
