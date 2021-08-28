import { createAsyncThunk } from '@reduxjs/toolkit'; // c AsyncThunk 
import * as contactsAPI from 'services/contacts-api';

//c AsyncThunk 
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