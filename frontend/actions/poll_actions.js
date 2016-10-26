export const CREATE_POLL = 'CREATE_POLL';
export const FETCH_POLL = 'FETCH_POLL';
export const FETCH_RESULTS = 'FETCH_RESULTS';
export const RECEIVE_POLL = 'RECEIVE_POLL';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';

export const createPoll = poll => ({
  type: CREATE_POLL,
  poll,
});

export const fetchPoll = id => ({
  type: FETCH_POLL,
  id,
});

export const fetchResults = id => ({
  type: FETCH_RESULTS,
  id,
});

export const receivePoll = poll => ({
  type: RECEIVE_POLL,
  poll,
});

export const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results,
});
