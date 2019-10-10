import React from 'react';
import { products } from 'components/vending-machine/data';
import Product from 'components/vending-machine/Product';

const VendingMachine = () => {
  console.log(products);
  return (
    <div className="p-3">
      {
        products.map(product => (
          <Product key={product.id} info={product} />
        ))
      }
    </div>
  );
};

export default VendingMachine;
