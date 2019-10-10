import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'seamless-immutable';
import vendingMachine from 'ducks/vending-machine';

const reducers = combineReducers({
  vendingMachine,
});

const initialState = Immutable({
  vendingMachine: {
    customerMoney: 100,
    vendingMachineMoney: 0,
  },
});

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk),
);

export default store;
