import React from 'react';
import { imgsByTag } from 'components/data';

const Product = ({ info }) => {
  const {
    name, img, price, code,
  } = info;
  return (
    <div className="col-3 py-3 text-center">
      <img src={imgsByTag[img]} className="product-img" alt={name} />
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
