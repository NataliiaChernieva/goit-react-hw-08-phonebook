import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import items from './slices/items.js';
import filter from './slices/filter.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
    key: 'auth/user',
    storage,
    whitelist: ['token'],
}

const rootReducer = {
    auth: persistReducer(authPersistConfig, authReducer),
    items,
    filter,  
};

export const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV!== 'prodaction',
});

export const persistor = persistStore(store);


 

