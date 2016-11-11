

export default ({ getState, dispatch }) => next => action => {
  const optionSuccess = data => dispatch(receivePoll(data));
};
