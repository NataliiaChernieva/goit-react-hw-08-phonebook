import { createSelector } from "reselect";

export const getContacts = (state) => state.items.entities;
export const getFilter = (state) => state.filter;
export const getIsLoading = (state) => state.items.isLoading;

export const getFilteredContact = createSelector(
    [getContacts, getFilter],
    (contacts, filterValue) => contacts.filter(contact =>
         contact.name.toLowerCase().includes(filterValue)),)