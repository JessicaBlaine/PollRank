import { combineReducers } from 'redux';

import pollReducer from './poll_reducer';

const RootReducer = combineReducers({
  pollReducer,
  optionReducer,
});

export default RootReducer;
