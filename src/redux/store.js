import {configureStore } from '@reduxjs/toolkit';
import items from './slices/items.js';
import filter from './slices/filter.js';

const rootReducer = {
    items,
    filter,
    
};

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV!== 'prodaction',
});

export default store;


 

