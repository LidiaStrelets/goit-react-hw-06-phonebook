import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import ContactsList from '../ContactsList';
import styles from './Contacts.module.css';
import { connect } from 'react-redux';
import * as actions from './../../redux/contacts/contacts-actions';

const Contacts = ({ title, filterFunction, handleFilter, contacts, removeItem }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <Input
        label="Find contacts by name:"
        type="text"
        name="filter"
        value={contacts.filter}
        handleInputChange={handleFilter}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
      <ContactsList contacts={filterFunction()} removeContact={removeItem} />
    </>
  );
};

Contacts.defaultProps = {
  title: '',
};
Contacts.propTypes = {
  title: PropTypes.string,
  filterFunction: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};
const mapDispatchToProps = dispatch => ({
  removeItem: value => dispatch(actions.removeField(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
