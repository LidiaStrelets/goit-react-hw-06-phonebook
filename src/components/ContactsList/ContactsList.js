import React from 'react';
import { connect } from 'react-redux';
import styles from './ContactsList.module.css';

import actions from '../../redux/contacts/contacts-actions';

const ContactsList = ({ filteredContacts, removeItem }) => (
  <ul className={styles.list}>
    {filteredContacts.map(({ name, id, number }) => (
      <li key={id} className={styles.contact}>
        <p className={styles.text}>
          <span className={styles.name}>{name}</span> <span className={styles.phone}>{number}</span>
        </p>
        <button className={styles.removeBtn} type="button" onClick={() => removeItem(id)}>
          Remove contact
        </button>
      </li>
    ))}
  </ul>
);

const filterContacts = (filter, items) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = ({ contacts }) => {
  return {
    filteredContacts: filterContacts(contacts.filter, contacts.items),
  };
};
const mapDispatchToProps = dispatch => ({
  removeItem: value => dispatch(actions.removeField(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
