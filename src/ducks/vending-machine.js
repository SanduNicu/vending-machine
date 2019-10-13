import Immutable from 'seamless-immutable';
import { createAction } from 'redux-actions';

export default function reducer(state = Immutable([]), action = {}) {
  switch (action.type) {
    case 'vendingMachine/ALTER_CUSTOMER_MONEY':
      return state.setIn(['customerMoney'], action.payload);
    case 'vendingMachine/ALTER_VENDING_MACHINE_MONEY':
      return state.setIn(['vendingMachineMoney'], action.payload);
    case 'vendingMachine/ALTER_PRODUCT':
      return state.setIn(['products', action.payload.id, 'remaining'], action.payload.remaining);
    default:
      return state;
  }
}

const alterCustomerMoney = createAction('vendingMachine/ALTER_CUSTOMER_MONEY');
const alterVendingMachineMoney = createAction('vendingMachine/ALTER_VENDING_MACHINE_MONEY');
const alterProduct = createAction('vendingMachine/ALTER_PRODUCT');

export const insertAmmountThunk = (dispatch, getState) => (ammount) => {
  const { vendingMachine: { customerMoney, vendingMachineMoney } } = getState();
  dispatch(alterCustomerMoney(customerMoney - ammount));
  dispatch(alterVendingMachineMoney(vendingMachineMoney + ammount));
};

export const buyProductThunk = (dispatch, getState) => (productId) => {
  const state = getState();
  const { vendingMachineMoney, products } = state.vendingMachine;
  const product = products[productId];

  if (!product) {
    return alert('Product not found!');
  }

  if (product.price > vendingMachineMoney) {
    return alert('Insufficient credit');
  }

  if (product.remaining === 0) {
    return alert('Out of stock!');
  }

  dispatch(alterVendingMachineMoney(vendingMachineMoney - product.price));
  dispatch(alterProduct({ id: productId, remaining: product.remaining - 1 }));
  return alert('Bought!');
};
