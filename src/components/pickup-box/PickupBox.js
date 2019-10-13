import { connect } from 'react-redux';
import React from 'react';
import { isEmpty } from 'ramda';

const PickupBox = ({ boughtProducts }) => {
  if (isEmpty(boughtProducts)) return null;

  return (
    <div>
      {
        boughtProducts.map(item => (
          <span>{item.name}</span>
        ))
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const { boughtProducts } = state.vendingMachine;
  return {
    boughtProducts,
  };
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PickupBox);
