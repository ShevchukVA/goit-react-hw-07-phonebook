import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactOperations from '../../redux/contacts/contactOperations';
import contactsSelector from '../../redux/contacts/contactsSelector';
import styles from './ContactItem.module.css';

const ContactItem = ({ name, number, onRemoveContact }) => (
  <li className={styles.item}>
    <p className={styles.text}>{name}:</p>
    <p className={styles.text}>{number}</p>
    <button className={styles.button} type="button" onClick={onRemoveContact}>
      X
    </button>
  </li>
);

ContactItem.defaultProps = {
  name: '',
  number: '',
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelector.getContactsById(state, ownProps.id);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () => dispatch(contactOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
