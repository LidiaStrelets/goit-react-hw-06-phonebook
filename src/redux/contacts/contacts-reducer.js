import { combineReducers } from 'redux';
import counterTypes from './contacts-types';
const itemsReducer = (
  state = localStorage.getItem('contactsList')
    ? JSON.parse(localStorage.getItem('contactsList'))
    : [],
  { type, payload },
) => {
  switch (type) {
    case counterTypes.ADD:
      return [...state, payload];
    case counterTypes.REMOVE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};
const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case counterTypes.SETFILTER:
      return payload;
    default:
      return state;
  }
};

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
