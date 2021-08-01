import counterTypes from './contacts-types';

export const addField = value => ({
  type: counterTypes.ADD,
  payload: value,
});
export const removeField = value => ({
  type: counterTypes.REMOVE,
  payload: value,
});
export const setUpFilter = value => ({
  type: counterTypes.SETFILTER,
  payload: value,
});
