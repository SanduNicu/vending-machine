import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import app from 'ducks/app';

const reducers = combineReducers({
  app,
});

const initialState = {
  app: {
    loading: false,
  }
};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk),
);

export default store;
