import { combineReducers } from 'redux';

import pollReducer from './poll_reducer';
import optionReducer from './option_reducer';


const RootReducer = combineReducers({
  pollReducer,
  optionReducer,
});


export default RootReducer;
