import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});