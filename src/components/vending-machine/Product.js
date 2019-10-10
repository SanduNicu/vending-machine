import React from 'react';

const Product = ({ info }) => {
  const { name, img } = info;
  return (
    <div>
      {name}
    </div>
  );
};

export default Product;
