import React from 'react';
import { connect } from 'react-redux';
import { products } from 'components/data';
import Product from 'components/vending-machine/Product';
import { range } from 'ramda';
import { shuffle, withCodes } from 'lib/helpers';
// import { alterCustomerMoney } from 'ducks/vending-machine';

const VendingMachine = (props) => {
  const { vendingMachineMoney } = props;
  return (
    <div className="p-3">
      <div>Money: {vendingMachineMoney} lei</div>
      {
        range(0, 3).map((index) => (
          <div className="row" key={index}>
            {
              withCodes(shuffle(products), index).map(product => (
                <Product key={product.id} info={product} />
              ))
            }
          </div>
        ))
      }
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
