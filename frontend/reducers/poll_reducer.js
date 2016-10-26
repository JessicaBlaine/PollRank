import merge from 'lodash/merge';

import { RECEIVE_POLL, RECEIVE_RESULTS } from '../actions/poll_actions';

const pollReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POLL:
      return action.poll;
    case RECEIVE_RESULTS:
      return merge({}, state, { results: action.results });
    default:
      return state;
  }
};

export default pollReducer;
