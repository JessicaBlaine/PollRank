import merge from 'lodash/merge';

import { CREATE_POLL } from '../actions/poll_actions';

const pollReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CREATE_POLL:
      return action.poll;
    default:
      return state;
  }
};

export default pollReducer;
