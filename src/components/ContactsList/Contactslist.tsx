import React from 'react';
import { Container, StyledSearchIcon } from './Contactslist.styled';

import { IContactsListProps } from '../../interfaces';
import shortid from 'shortid';

export const ContactsList = ({
  contactsFilter,
  children,
}: IContactsListProps) => {
  const formId = shortid.generate();
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    contactsFilter(e.target.value);
  };
  ///_______
  return (
    <Container>
      <h2>Contacts</h2>

      <label htmlFor={formId}>Find contacts by name</label>
      <div>
        <input
          type="text"
          name=""
          id={formId}
          onChange={searchHandler}
          placeholder="Type to find..."
        />
        <StyledSearchIcon />
      </div>

      <ul>{children}</ul>
    </Container>
  );
};
