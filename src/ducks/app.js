import Immutable from 'seamless-immutable';
import { createAction } from 'redux-actions';

export default function app(state = Immutable([]), action = {}) {
  switch (action.type) {
    case 'app/LOADING':
      return state.setIn(['app', 'loading'], true);
    case 'app/LOADED':
      return state.setIn(['app', 'loading'], false);
    default:
      return state;
  }
}

const appLoading = createAction('app/LOADING');
const appLoaded = createAction('app/LOADED');

export function setAppLoading() {
  return (dispatch) => {
    dispatch(appLoading);
  };
}

export function setAppLoaded() {
  return (dispatch) => {
    dispatch(appLoaded);
  };
}
