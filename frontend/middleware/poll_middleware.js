// actions
import { receivePoll,
         receiveResults,
         FETCH_POLL,
         FETCH_RESULTS,
         CREATE_POLL } from '../actions/poll_actions';

// api utils
import { fetchPoll,
         fetchResults,
         createPoll } from '../util/poll_api_util';

export default ({ getState, dispatch }) => next => action => {
  const pollSuccess = data => dispatch(receivePoll(data));
  const resultsSuccess = data => dispatch(receiveResults(data));

  switch (action.type) {
    case FETCH_POLL:
      fetchPoll(action.id, pollSuccess);
      return next(action);
    case FETCH_RESULTS:
      fetchResults(action.id, resultsSuccess);
      return next(action);
    case CREATE_POLL:
      createPoll(action.poll, pollSuccess);
      return next(action);
    default:
      return next(action);
  }
};
