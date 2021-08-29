import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

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
 
export async function patchContact(contactId) {
    const { data } = await axios.patch(`/contacts/${contactId}`);
    return data;
};

