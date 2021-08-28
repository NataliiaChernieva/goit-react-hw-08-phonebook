import { useSelector,  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import ContactListItem from '../ContactListItem/ContactListItem';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  
  const filteredContacts = useSelector(contactsSelectors.getFilteredContact);
  
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onClick={() => {
            dispatch(contactsOperations.deleteContact(id));
            toast.success('Сontact is deleted from the phone book!');
          }}
        />
      ))}
    </ul>
  );
}

