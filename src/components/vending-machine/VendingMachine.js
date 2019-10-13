import React from 'react';
import { connect } from 'react-redux';
import { duplicatedProducts } from 'components/data';
import Product from 'components/vending-machine/Product';
import Numpad from 'components/numpad/Numpad';
// import { alterCustomerMoney } from 'ducks/vending-machine';

const VendingMachine = (props) => {
  const { vendingMachineMoney } = props;
  return (
    <div className="p-3">
      <div>Credit: {vendingMachineMoney} lei</div>
      <div className="row">
        <div className="col-9 row">
          {
            duplicatedProducts.map(product => (
              <Product key={product.id} info={product} />
            ))
          }
        </div>
        <div className='col-3'>
          <Numpad />
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    vendingMachineMoney: state.vendingMachine.vendingMachineMoney,
  };
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VendingMachine);
