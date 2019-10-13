import { connect } from 'react-redux';
import React from 'react';
import { isEmpty } from 'ramda';
import { imgsByTag } from 'components/data';

const PickupBox = ({ boughtProducts }) => {
  if (isEmpty(boughtProducts)) return null;

  return (
    <div className="mt-5">
      PickUp box:
      <div className="mt-3">
        {
          boughtProducts.map((product, index) => (
            <img
              className="product-img px-3"
              src={imgsByTag[product.img]}
              alt={product.name}
              key={index}
            />
          ))
        }
      </div>
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
