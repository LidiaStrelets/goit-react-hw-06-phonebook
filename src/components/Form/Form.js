import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input';
import ButtonAdd from '../ButtonAdd';

import styles from './Form.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

const Form = ({ addItem, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        return;
      case 'number':
        setNumber(event.currentTarget.value);
        return;
      default:
        return;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();

    if (contacts.items.find(contact => contact.name === name)) {
      alert('Attempt to create existing contact!');
      return;
    }

    addItem({ name, id: uuidv4(), number });

    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <Input
        label="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        handleInputChange={handleInput}
        value={name}
      />
      <Input
        label="Phone number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        value={number}
        handleInputChange={handleInput}
      />
      <ButtonAdd />
    </form>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});
const mapDispatchToProps = dispatch => ({
  addItem: value => dispatch(actions.addField(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
