import { createSlice } from '@reduxjs/toolkit';
import * as contactsOperations from 'redux/contacts/contactsOperations'; // c AsyncThunk

const itemsSlice=createSlice({
  name: 'items',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
  } ,
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled]: (state, action) => {
       return {
        ...state,
        entities: action.payload,
        isLoading: false,
        error: null,
      }
    },

    [contactsOperations.fetchContacts.pending]: (state) => {
      return {...state, isLoading: true, error: null,}
    },

    [contactsOperations.fetchContacts.rejected]: (state) => {
      return {...state, isLoading: false, error: "ERROR",}
    },

    [contactsOperations.postContact.fulfilled]: (state, action) => {
      console.log(`actionP`, action);
      return {...state,
        entities: [...state.entities, action.payload],
        isLoading: false,
        error: null,}
    },

    [contactsOperations.postContact.pending]: (state) => {
      return {...state, isLoading: true, error: null,}
    },

    [contactsOperations.postContact.rejected]: (state, action) => {
      console.log(`actionE`, action);
      return {...state, isLoading: false, error: "ERROR",}
    },

    [contactsOperations.deleteContact.fulfilled]: (state, action) => {
      return {...state,
        entities: state.entities.filter((item)=>item.id!==action.payload),
        isLoading: false,
        error: null,}
    },

    [contactsOperations.deleteContact.pending]: (state) => {
      return {...state, isLoading: true, error: null,}
    },

    [contactsOperations.deleteContact.rejected]: (state) => {
      return {...state, isLoading: false, error: "ERROR",}
    },
  }
});

export default itemsSlice.reducer;


