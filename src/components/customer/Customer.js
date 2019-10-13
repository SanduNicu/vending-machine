import React from 'react';
import { ammounts } from 'components/data';
import { connect } from 'react-redux';
import { insertAmmountThunk } from 'ducks/vending-machine';

const Customer = (props) => {
  const { customerMoney, insertAmmount } = props;
  return (
    <div>
      <div>
        Total money: {customerMoney} lei.
      </div>
      <div>
        <span>
          Insert money:
        </span>
        {
          ammounts.map((ammount) => (
            <button
              key={ammount.id}
              type="button"
              className="mx-2"
              onClick={() => insertAmmount(ammount.value)}
            >
              {ammount.label}
            </button>
          ))
        };
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    customerMoney: state.vendingMachine.customerMoney,
  };
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line
  return {
    insertAmmount: dispatch(insertAmmountThunk),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Customer);
