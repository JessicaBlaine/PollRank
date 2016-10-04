## Poll Cycles

### Poll API Request Actions

* `fetchPoll`
  0. invoked from `NewResponse` `didMount`/`willReceiveProps`
  0. `GET api/polls/:id` is called
  0. `receivePoll` is set as success callback
* `createPoll`
  0. invoked from `NewPoll` `onSubmit`
  0. `POST api/polls` is called
  0. `receiveResults` is set as success callback
* `fetchResults`
  0. invoked from `PollResultsIndex` `didMount`/`willReceiveProps`
  0. `GET api/polls/:id/results` is called
  0. `receiveResults` is set as success callback

### Poll API Response Actions

* `receivePoll`
  0. invoked from an API callback
  0. `PollReducer` updates `poll` in application state
* `receiveResults`
  0. invoked from an API callback
  0. `PollReducer` updates `poll.results` in application state

### PollResponse API Request Actions

* `putResponse`
  0. invoked from `NewResponse` `onSubmit`
  0. `PUT api/poll/:id/response`
  0. `receiveResults` is set as success callback
