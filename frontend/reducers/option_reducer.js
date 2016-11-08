import merge from 'lodash/merge';

import { CREATE_OPTION,
         REMOVE_OPTION,
         UPDATE_OPTION } from '../actions/option_actions';

const optionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CREATE_OPTION:
      return state;
    case REMOVE_OPTION:
      return state;
    case UPDATE_OPTION:
      return state;
    default:
      return state;
  }
};

export default optionReducer;
