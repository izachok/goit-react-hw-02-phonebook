// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v1 as uuid } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, phoneNumber }) => {
    if (this.isInContacts(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = { id: uuid(), name, phoneNumber };
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  isInContacts = name => {
    name = name.toLowerCase();
    return (
      this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(name),
      ).length > 0
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
