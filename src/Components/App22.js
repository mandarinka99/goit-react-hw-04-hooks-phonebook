import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactsList from "./contactsList/ContactsList";
import Container from "./container/Container";
import CreateContactForm from "./createContactForm/CreateContactForm";
import FilterContacts from "./filterContacts/FilterContacts";


class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  componentDidMount() { 
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts && this.setState({ contacts: contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !==  prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (number, name) => {
    const find = this.state.contacts.find(contact =>
        contact.name.toLowerCase() === name.toLowerCase())
    if (find) return alert(`${name} is already in contacts`)
    const contactsArr = [...this.state.contacts];
    contactsArr.push({
      id: uuidv4(),
      name,
      number
    });
    this.setState({ 
      contacts: contactsArr,
    });
  };

  deleteContact = (id) => {
    const newContactsList = this.state.contacts.filter(contact =>
      contact.id !== id)
      this.setState({ 
        contacts: newContactsList,
      });
  }

  render() {
    let newFilter = this.state.contacts
    if (this.state.filter) {
      newFilter = this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
     }

    return (
      <Container>
        <h1>Phonebook</h1>
        <CreateContactForm 
          onChange={this.onSubmit} 
        />
        <h2>Contacts</h2>
        <FilterContacts onHandleChange={this.onHandleChange}/>
        <ContactsList 
          contacts={newFilter}
          deleteContact ={this.deleteContact}
        />
      </Container>
    );
  }
}
export default App;
