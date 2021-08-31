import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./contactsList/ContactsList";
import Container from "./container/Container";
import CreateContactForm from "./createContactForm/CreateContactForm";
import FilterContacts from "./filterContacts/FilterContacts";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onHandleChange = (e) => {
    setFilter( e.target.value) 
  };

  const onSubmit = (number, name) => {
    const find = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (find) return alert(`${name} is already in contacts`);
    const contactsArr = [...contacts];
    contactsArr.push({
      id: uuidv4(),
      name,
      number,
    });
    setContacts( contactsArr );
  };

  const deleteContact = (id) => {
    const newContactsList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactsList);
  };

  let newFilter = contacts;
  console.log(newFilter);
  if (filter) {
    newFilter = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  console.log(newFilter);
  return (
    <Container>
      <h1>Phonebook</h1>
      <CreateContactForm onChange={onSubmit} />
      <h2>Contacts</h2>
      <FilterContacts onHandleChange={onHandleChange} />
      <ContactsList contacts={newFilter} deleteContact={deleteContact} />
    </Container>
  );
};

export default App;
