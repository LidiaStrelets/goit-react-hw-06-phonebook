import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './contacts-actions';
const itemsReducer = createReducer([], {
  [actions.addField]: (state, { payload }) => [...state, payload],
  [actions.removeField]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.setUpFilter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
