// actions.js
export const ADD_EVENT = 'ADD_EVENT';
export const ADD_PARTICIPANT = 'ADD_PARTICIPANT';
export const ASSIGN_PARTICIPANT = 'ASSIGN_PARTICIPANT';

export const addEvent = (event) => ({
  type: ADD_EVENT,
  payload: event,
});

export const addParticipant = (participant) => ({
  type: ADD_PARTICIPANT,
  payload: participant,
});

export const assignParticipant = (participation) => ({
  type: ASSIGN_PARTICIPANT,
  payload: participation,
});
