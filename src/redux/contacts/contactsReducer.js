//import { combineReducers, createReducer } from "@reduxjs/toolkit";//без Slice
//import * as contactsActions from './contactsActions'; // без AsyncThunk
//import { fetchContacts, postContact, deleteContact } from './contactsOperations'; // c AsyncThunk без Slice

// // без AsyncThunk
// const entities = createReducer([], {
//     [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//     [contactsActions.fetchContactsRequest]: () => true,
//     [contactsActions.fetchContactsSuccess]: () => false,
//     [contactsActions.fetchContactsError]: () => false,
// });

// const error = createReducer(null, {
//     [contactsActions.fetchContactsError]: (_, action)=>action.payload,
//     [contactsActions.fetchContactsRequest]: () => null,
// });

// // c AsyncThunk без Slice
// const entities = createReducer([], {
//     [fetchContacts.fulfilled]: (_, action) => action.payload,
//     [postContact.fulfilled]: (state,action) => [...state.entities, action.payload],
//     [deleteContact.fulfilled]: (state, action) => state.entities.filter((item)=>item.id!==action.payload),
// });

// const isLoading = createReducer(false, {
//     [fetchContacts.pending]: () => true,
//     [fetchContacts.fulfilled]: () => false,
//     [fetchContacts.rejected]: () => false,
//     [postContact.pending]: () => true,
//     [postContact.fulfilled]: () => false,
//     [postContact.rejected]:() => false,
//     [deleteContact.pending]: () => true,
//     [deleteContact.fulfilled]:() => false,
//     [deleteContact.rejected]:() => false,
// });

// const error = createReducer(null, {
//     [fetchContacts.rejected]: (_, action)=>action.payload,
//     [fetchContacts.pending]: () => null,
//     [postContact.fulfilled]: () => null,
//     [postContact.pending]: () => null,
//     [postContact.rejected]:() => "ERROR",
//     [deleteContact.pending]: () => null,
//     [deleteContact.fulfilled]:() => null,
//     [deleteContact.rejected]:() =>"ERROR",
// })

// export default combineReducers({
//     entities,
//     isLoading,
//     error,
// });
