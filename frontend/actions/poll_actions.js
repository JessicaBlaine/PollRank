export const CREATE_POLL = 'CREATE_POLL';

export const createPoll = poll => ({
  type: CREATE_POLL,
  poll,
});
