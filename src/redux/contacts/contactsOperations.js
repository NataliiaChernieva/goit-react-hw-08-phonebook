import { createAsyncThunk } from '@reduxjs/toolkit'; // c AsyncThunk 
// import * as contactsActions from './contactsActions'; // без AsyncThunk 
import * as contactsAPI from 'services/contacts-api';

// //без AsyncThunk
// export const fetchContacts = () => async dispatch => {
//     dispatch(contactsActions.fetchContactsRequest());
//     try {
//         const contacts = await contactsAPI.fetchContacts();
//         console.log(`cont`, contacts)
//         dispatch(contactsActions.fetchContactsSuccess(contacts));
//     } catch (error) {
//         dispatch(contactsActions.fetchContactsError);
//     }
    
// };

// //c AsyncThunk 
export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const contactsFromDB = await contactsAPI.fetchContacts();
            return contactsFromDB;   
        } catch (error) {
            return rejectWithValue(error);
        }
    
});

export const postContact = createAsyncThunk('contacts/postContacts',
    async (newContact) => {
        try {
            const contactsFromDB = await contactsAPI.postContact(newContact);
            return contactsFromDB;   
        } catch (error) {
            return (error);
        }
    
    });

export const deleteContact = createAsyncThunk('contacts/deleteContacts',
    async (idContact) => {
        try {
            await contactsAPI.deleteContact(idContact);
            return idContact;   
        } catch (error) {
            return (error);
        }
    
});