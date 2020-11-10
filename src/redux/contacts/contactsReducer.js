import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contactsActions';

const handleAddContact = (state, action) => {
  if (action.payload.name === '' || action.payload.number === '') {
    return state;
  } else if (state.length === 0) {
    return [...state, action.payload];
  } else {
    const names = state.map(contact => contact.name.toLowerCase());
    if (names.includes(action.payload.name.toLowerCase())) {
      alert(`${action.payload.name} is alredy in contacts`);
    } else {
      return [...state, action.payload];
    }
  }
};

const handleRemoveContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContactSuccess]: handleAddContact,
  [contactsActions.removeContactSuccess]: handleRemoveContact,
});

const filter = createReducer('', {
  [contactsActions.filterContacts]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

export default combineReducers({ items, filter, loading });
