import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'seamless-immutable';
import vendingMachine from 'ducks/vending-machine';
import { serializedProducts } from 'components/data';

const reducers = combineReducers({
  vendingMachine,
});

const initialState = Immutable({
  vendingMachine: {
    customerMoney: 100,
    vendingMachineMoney: 0,
    boughtProducts: [],
    products: serializedProducts,
  },
});

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk),
);

export default store;
