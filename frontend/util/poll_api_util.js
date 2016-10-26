export const fetchPoll = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/polls/${id}`,
    success,
  });
};

export const fetchResults = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/polls/${id}/results`,
    success,
  });
};

export const createPoll = (poll, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/polls',
    data: { poll },
    success,
  });
};
