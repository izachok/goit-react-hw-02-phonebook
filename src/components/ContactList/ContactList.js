import React from 'react';
import FormButton from '../FormButton';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, phoneNumber }) => (
        <li key={id} className={s.item}>
          <span className={s.itemName}>{name}</span>
          <span className={s.itemPhone}>{phoneNumber}</span>
          <FormButton label="Delete" onClick={() => onDeleteContact(id)} />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
