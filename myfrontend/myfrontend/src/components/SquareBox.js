import React from 'react';

const SquareBox = ({ title, image, text }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{text}</p>
    </div>
  );
};

export default SquareBox;
