// reducers.js
import { combineReducers } from 'redux';
import { ADD_EVENT, ADD_PARTICIPANT, ASSIGN_PARTICIPANT } from './actions';

const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

const participantsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PARTICIPANT:
      return [...state, action.payload];
    default:
      return state;
  }
};

const participationsReducer = (state = [], action) => {
  switch (action.type) {
    case ASSIGN_PARTICIPANT:
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  events: eventsReducer,
  participants: participantsReducer,
  participations: participationsReducer,
});

export default rootReducer;
