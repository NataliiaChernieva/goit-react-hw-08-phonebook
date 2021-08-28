import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3003';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
};

export async function postContact(newContact) {
    const { data } = await axios.post('/contacts', (newContact));
    return data;
};

export async function deleteContact(deleteContact) {
    const { data } = await axios.delete(`/contacts/${deleteContact}`);
    return data;
 };

