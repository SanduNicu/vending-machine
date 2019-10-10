import Immutable from 'seamless-immutable';
import { createAction } from 'redux-actions';

export default function reducer(state = Immutable([]), action = {}) {
  switch (action.type) {
    case 'vendingMachine/ALTER_CUSTOMER_MONEY':
      return state.setIn(['customerMoney'], action.payload);
    case 'vendingMachine/ALTER_VENDING_MACHINE_MONEY':
      return state.setIn(['vendingMachineMoney'], action.payload);
    default:
      return state;
  }
}

const alterCustomerMoney = createAction('vendingMachine/ALTER_CUSTOMER_MONEY');
const alterVendingMachineMoney = createAction('vendingMachine/ALTER_VENDING_MACHINE_MONEY');

export const insertAmmountOfMoney = (dispatch, getState) => (ammount) => {
  const { vendingMachine: { customerMoney, vendingMachineMoney } } = getState();
  dispatch(alterCustomerMoney(customerMoney - ammount));
  dispatch(alterVendingMachineMoney(vendingMachineMoney + ammount));
};
