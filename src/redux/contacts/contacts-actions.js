import { createAction } from '@reduxjs/toolkit';

const addField = createAction('phonebook/add');
const removeField = createAction('phonebook/remove');
const setUpFilter = createAction('phonebook/filter');

const actions = { addField, removeField, setUpFilter };
export default actions;
