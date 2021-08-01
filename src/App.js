import './App.css';
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';

import { connect } from 'react-redux';
import * as actions from './redux/contacts/contacts-actions';

const App = ({ contacts, addItem, setFilter }) => {
  useEffect(() => {
    localStorage.setItem('contactsList', JSON.stringify(contacts.items));
  }, [contacts.items]);

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };
  const filterContacts = () => {
    const { filter, items } = contacts;
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };
  const addContact = (name, number) => {
    if (contacts.items.find(contact => contact.name === name)) {
      alert('Attempt to create existing contact!');
      return;
    }

    addItem({ name, id: uuidv4(), number });
  };

  const { items } = contacts;
  return (
    <div className="App">
      <Section title="Phonebook">
        <Form addContact={addContact} />
        {items.length > 0 && (
          <Contacts handleFilter={handleFilter} title="Contacts" filterFunction={filterContacts} />
        )}
      </Section>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  addItem: value => dispatch(actions.addField(value)),
  removeItem: value => dispatch(actions.removeField(value)),
  setFilter: value => dispatch(actions.setUpFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
