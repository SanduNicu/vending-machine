import React from 'react';
import { connect } from 'react-redux';
import Product from 'components/vending-machine/Product';
import Numpad from 'components/numpad/Numpad';
import { buyProductThunk } from 'ducks/vending-machine';
import { values, sortBy } from 'ramda';
// import { alterCustomerMoney } from 'ducks/vending-machine';

const VendingMachine = (props) => {
  const { vendingMachineMoney, products, buyProduct } = props;
  const vendingProducts = sortBy(product => product.code, values(products));
  return (
    <div className="p-3">
      <div>Credit: {vendingMachineMoney} lei</div>
      <div className="row">
        <div className="col-9 row">
          {
            vendingProducts.map(product => (
              <Product key={product.id} info={product} />
            ))
          }
        </div>
        <div className="col-3 align-items-center justify-content-center d-flex">
          <Numpad buyProduct={buyProduct} />
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  const { vendingMachineMoney, products } = state.vendingMachine;
  return {
    vendingMachineMoney,
    products,
  };
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line
  return {
    buyProduct: dispatch(buyProductThunk),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VendingMachine);
