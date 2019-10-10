import React from 'react';
import { products } from 'components/data';
import Product from 'components/Product';

const VendingMachine = () => {
  return (
    <div>
      {
        products.map(product => (
          <Product key={product.id} info={product} />
        ))
      }
    </div>
  );
};

export default VendingMachine;
