import axios from 'axios';
import contactsActions from './contactsActions';

axios.defaults.baseURL = 'http://localhost:2000';

const addContact = ({ name, number }) => (dispatch, getState) => {
  if (name === '' || number === '') {
    alert('Please, enter name or number');
    return;
  }

  const { contacts } = getState();

  const names = contacts.items.map(contact => contact.name.toLowerCase());

  const isExistingContact = names.includes(name);

  if (isExistingContact) {
    alert(`${name} is alredy in contacts`);
    return;
  }

  dispatch(contactsActions.addContactRequest());

  if (!isExistingContact) {
    axios
      .post('/contacts', { name, number })
      .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
      .catch(error => dispatch(contactsActions.addContactError(error)));
  } else {
    return getState;
  }
};

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch(error => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch(error => dispatch(contactsActions.removeContactError(error)));
};

export default { addContact, fetchContacts, removeContact };
