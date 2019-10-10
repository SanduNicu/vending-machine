import React from 'react';

const Product = ({ info }) => {
  const {
    name, img, price, code,
  } = info;
  return (
    <div className="product col-3 py-3 text-center">
      <img src={img} alt={name} />
      <div>
        {name}: {code}
      </div>
      <div>
        {price} lei
      </div>
    </div>
  );
};

export default Product;
