import React from 'react';

import './css/Mask.css';

const Mask = ({ onClickHandler, show }) => (
    <div onClick={onClickHandler} className={`page-mask ${show ? 'shown' : ''}`} />
);

export default Mask;
