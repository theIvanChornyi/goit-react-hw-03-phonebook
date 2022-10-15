import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section';
import { Box } from './Box';
import { Contacts } from './Contacts';
import { PhonebookForm } from './PhonebookForm';
import { Filter } from './Contacts/Filter';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  name: '',
  number: '',
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const savedContacts = localStorage.getItem('Contacts');
    if (savedContacts) {
      const { contacts } = JSON.parse(savedContacts);
      this.setState({ contacts });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      const contactsString = JSON.stringify({ contacts: this.state.contacts });
      localStorage.setItem('Contacts', contactsString);
    }
  }

  addContact = newContact => {
    const normalizeNewContact = { id: nanoid(), ...newContact };
    this.setState(prev => {
      return { contacts: [...prev.contacts, normalizeNewContact] };
    });
  };

  deleteContact = contactId => {
    this.setState(p => ({
      contacts: p.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  takeFilterRequest = (request = '') => {
    const normalizedRequest = request.toLowerCase();
    this.setState({ filter: normalizedRequest });
  };

  filtredContacts = () => {
    const data = this.state;
    const filtredArr = [...data.contacts].filter(contact => {
      const normalizedName = contact.name.toLowerCase();
      return normalizedName.includes(data.filter);
    });
    return filtredArr;
  };

  render() {
    return (
      <Box as="main">
        <Section tittle="Phonebook">
          <PhonebookForm
            onAddContact={this.addContact}
            initState={this.state}
          />
        </Section>

        <Section tittle="Contacts">
          <Filter onFilterContacts={this.takeFilterRequest} />
          <Contacts
            contacts={this.filtredContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Box>
    );
  }
}
