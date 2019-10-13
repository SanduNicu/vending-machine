import {
  createStore, compose, applyMiddleware, combineReducers,
} from 'redux';
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

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
