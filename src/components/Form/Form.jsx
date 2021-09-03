import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast';
import { CustomForm } from './Form.styled';
import { Spinner } from '../Spinner/Spinner';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import {postContact} from 'redux/contacts/contactsOperations';
import { getContacts, getIsLoading } from 'redux/contacts/contactsSelectors';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  
  
    
  const handleSetInfo = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = e => {
    e.preventDefault();
    // const id = uuidv4();
    
    contacts.find(savedContact => savedContact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(postContact({ name, number}));
                
    reset();
    toast.success('Сontact is added to the phone book!');
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <CustomForm onSubmit={handleAddContact}>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleSetInfo}
      />
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleSetInfo}
      />
      <Button type="submit" text="Add contact" disabled={isLoading}>
        {isLoading && <Spinner size={12} />}
        
      </Button>
    </CustomForm>
  );
}
