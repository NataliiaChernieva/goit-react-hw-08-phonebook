import { createAsyncThunk } from '@reduxjs/toolkit'; // c AsyncThunk 
import * as contactsAPI from 'services/contacts-api';

//c AsyncThunk 
export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const contactsFromDB = await contactsAPI.fetchAllContacts();
            console.log(`contactsFromDB`, contactsFromDB);
            return contactsFromDB;   
        } catch (error) {
            return rejectWithValue(error.message);
        }
    
});

export const postContact = createAsyncThunk('contacts/postContacts',
    async (newContact, { rejectWithValue }) => {
        console.log(`newContact`, newContact);
        try {
            const contactsFromDB = await contactsAPI.postContact(newContact);
           console.log(`contactsFromDB`, contactsFromDB);
            return contactsFromDB;   
        } catch (error) {
            return rejectWithValue(error.message);
        }
    
    });

export const deleteContact = createAsyncThunk('contacts/deleteContacts',
    async (idContact, { rejectWithValue }) => {
        try {
            await contactsAPI.deleteContact(idContact);
            return idContact;   
        } catch (error) {
            return rejectWithValue(error.message);
        }
    
});