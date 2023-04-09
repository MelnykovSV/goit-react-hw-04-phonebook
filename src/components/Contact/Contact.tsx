import React from 'react';
import { Container } from './Contact.styled';
import { BsTrash3 } from 'react-icons/bs';
import { IContactProps } from '../../interfaces';

export const Contact = ({ name, number, id, deleteHandler }: IContactProps) => {
  const handleDeleteClick = () => {
    deleteHandler(id);
  };

  return (
    <Container>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button type="button" onClick={handleDeleteClick}>
        <BsTrash3 size="16px" color="white" />
      </button>
    </Container>
  );
};
