import React from 'react';

const Preloader = (style, text) => {
  return (
    <div className={'spinner-border ' + style} role="status">
      <span className="visually-hidden">{text}</span>
    </div>
  );
};

export default Preloader;
