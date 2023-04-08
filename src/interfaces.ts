export interface IContact {
  name: string;
  number: string;
  id: string;
}

export interface IState {
  contacts: IContact[];
}

export interface IContactProps {
  name: string;
  number: string;
  id: string;
  deleteHandler: (id: string) => void;
}

export interface IContactsListProps {
  children: JSX.Element[];
  contactsFilter: (value: string) => void;
}

export interface IFormProps {
  formSubmit: (data: IContact) => void;
}

export interface IContact {
  name: string;
  number: string;
  id: string;
}
