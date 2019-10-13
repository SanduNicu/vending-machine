import Immutable from 'seamless-immutable';
import { createAction } from 'redux-actions';
import { toast } from 'react-toastify';

export default function reducer(state = Immutable([]), action = {}) {
  switch (action.type) {
    case 'vendingMachine/ALTER_CUSTOMER_MONEY':
      return state.setIn(['customerMoney'], action.payload);
    case 'vendingMachine/ALTER_VENDING_MACHINE_MONEY':
      return state.setIn(['vendingMachineMoney'], action.payload);
    case 'vendingMachine/ALTER_PRODUCT':
      return state.setIn(['products', action.payload.code, 'remaining'], action.payload.remaining);
    case 'vendingMachine/ALTER_BOUGHT_PRODUCTS':
      return state.setIn(['boughtProducts'], action.payload);
    default:
      return state;
  }
}

const alterCustomerMoney = createAction('vendingMachine/ALTER_CUSTOMER_MONEY');
const alterVendingMachineMoney = createAction('vendingMachine/ALTER_VENDING_MACHINE_MONEY');
const alterProduct = createAction('vendingMachine/ALTER_PRODUCT');
const alterBoughtProducts = createAction('vendingMachine/ALTER_BOUGHT_PRODUCTS');

export const insertAmmountThunk = (dispatch, getState) => (ammount) => {
  const { vendingMachine: { customerMoney, vendingMachineMoney } } = getState();
  if (customerMoney < ammount) {
    return toast.error('You don\'t have enough cash');
  }
  dispatch(alterCustomerMoney(customerMoney - ammount));
  dispatch(alterVendingMachineMoney(vendingMachineMoney + ammount));
  return null;
};

export const buyProductThunk = (dispatch, getState) => (productCode) => {
  const state = getState();
  const { vendingMachineMoney, products, boughtProducts } = state.vendingMachine;
  const product = products[productCode];

  if (!product) {
    return toast.error('Product not found!');
  }

  if (product.price > vendingMachineMoney) {
    return toast.error('Insufficient credit!');
  }

  if (product.remaining === 0) {
    return toast.error('Out of stock!');
  }

  dispatch(alterVendingMachineMoney(vendingMachineMoney - product.price));
  dispatch(alterProduct({ code: productCode, remaining: product.remaining - 1 }));
  dispatch(alterBoughtProducts([...boughtProducts, product]));
  return toast.success('Product bought!');
};
