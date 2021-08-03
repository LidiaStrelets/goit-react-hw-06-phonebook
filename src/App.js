import './App.css';
import React from 'react';

import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';

import { connect } from 'react-redux';

const App = ({ contacts }) => {
  const { items } = contacts;
  return (
    <div className="App">
      <Section title="Phonebook">
        <Form />
        {items.length > 0 && <Contacts title="Contacts" />}
      </Section>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
