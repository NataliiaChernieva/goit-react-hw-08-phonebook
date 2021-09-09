import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import {
  Container,
  Title,
  SectionTitle,
} from '../components/Container/Container.styled.jsx';
import Form from '../components/Form/Form.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import Filter from '../components/Filter/Filter.jsx';
import { getContacts } from 'redux/contacts/contactsSelectors';


export default function ContactsFormView() {
  const contacts = useSelector(getContacts);
  //console.log(`contacts`, contacts);
  
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form/>
      {contacts.length > 0 && <SectionTitle>Contacts</SectionTitle>}
      {contacts.length > 0 && <Filter/>}
      <ContactList />
      <Toaster position="top-right" />
    </Container>
  );
}
