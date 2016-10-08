# Schema Information

## polls
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question        | string    | not null

## options
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
poll_id         | integer   | not null, foreign key (references polls), indexed
image_url       | string    |
name            | string    | not null, indexed, unique[poll_id]
description     | text      |

## responses
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
poll_id         | integer   | not null, foreign key (references polls), indexed
user_id         | integer   | not null, foreign key (references users), indexed, unique[poll_id]

## rankings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
response_id     | integer   | not null, foreign key (references responses), indexed, unique[option_id]
option_id       | integer   | not null, foreign key (references options), indexed, unique[response_id]
position        | integer   | not null

## results
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
poll_id         | integer   | not null, foreign key (references polls), indexed
option_id       | integer   | not null, foreign key (references options), indexed
votes           | integer   | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
cookie_token    | string    | not null, indexed, unique
