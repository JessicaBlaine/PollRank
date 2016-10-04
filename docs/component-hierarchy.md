## Component Hierarchy

**NewPoll**
  - NewOptionsIndex
    - NewPollOption

**NewResponseContainer**
  - NewResponse
    - OptionsRanking
      - PollOption
    - newOptionsRanking
      - RanksIndex
        - Rank
      - OptionsIndex
        - PollOption

**Poll**
  - PollResultsIndex
    - PollResult

## Routes

|Path   |Component |
|-------|----------|
| "new-poll" | "NewPoll" |
| "poll/:pollId" | "Poll" |
| "poll/:pollId/respond" | "NewResponseContainer" |
