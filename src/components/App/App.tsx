import React, { useState, useEffect } from 'react';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/Contactslist';
import { Contact } from '../Contact/Contact';
import { ModernNormalize } from 'emotion-modern-normalize';

import { Container } from './App.styled';
import { IContact } from '../../interfaces';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  ///Gets initial contacts value from local storage
  const [contacts, setContacts] = useState(
    localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts')!)
      : []
  );
  const [filter, setFilter] = useState('');

  /// Saves contacts to local storage on its change

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  ///Saves contact to contacts if there is no contact with such name
  const formSubmitHandler = (data: IContact): boolean => {
    const normalizedName = data.name.toLowerCase();
    if (
      !contacts.some(
        (item: IContact) => item.name.toLowerCase() === normalizedName
      )
    ) {
      setContacts((prevContacts: IContact[]) => [data, ...prevContacts]);
      return true;
    } else {
      toast(`${data.name} is already in contacts.`);

      return false;
    }
  };

  ///Deletes contact
  const contactDeleteHandler = (id: string): void => {
    setContacts((prevContacts: IContact[]) =>
      prevContacts.filter((item: IContact): boolean => item.id !== id)
    );
  };

  /// Sets contacts filter
  const contactsFilter = (value: string): void => {
    setFilter(value.toLowerCase());
  };

  const filteredContacts = contacts.filter((item: IContact): boolean =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <Container>
      <ModernNormalize />
      <h2>Phonebook</h2>

      <Form formSubmit={formSubmitHandler}></Form>
      <ContactsList contactsFilter={contactsFilter}>
        {filteredContacts.map(({ name, number, id }: IContact) => (
          <Contact
            name={name}
            number={number}
            id={id}
            key={id}
            deleteHandler={contactDeleteHandler}
          />
        ))}
      </ContactsList>
      <ToastContainer />
    </Container>
  );
};
