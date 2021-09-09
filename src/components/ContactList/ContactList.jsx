import { useSelector,  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import ContactListItem from '../ContactListItem/ContactListItem';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
// import { v4 as uuidv4 } from 'uuid';

export default function ContactList() {
  const dispatch = useDispatch();
  // const id = uuidv4();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  
  const filteredContacts = useSelector(contactsSelectors.getFilteredContact);
  const sortedContacts = filteredContacts.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  
  return (
    <ul>
      {filteredContacts && sortedContacts.map(({name, number, id }) => (
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

// {filteredContacts.map(({name, number}) => {
//           const id = uuidv4();
//           return (<ContactListItem
//           key={id}
//           name={name}
//           number={number}
//           onClick={() => {
//             dispatch(contactsOperations.deleteContact(id));
//             toast.success('Сontact is deleted from the phone book!');
//           }}
//         />)
//       }
        
//       )}

