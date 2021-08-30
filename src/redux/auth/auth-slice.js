import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFeatchingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled]: (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoggedIn: true,
            }
        },
        // [authOperations.register.pending]:
        // [authOperations.register.rejected]:

        [authOperations.logIn.fulfilled]: (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoggedIn: true,
            }
        },
        // [authOperations.logIn.pending]:
        // [authOperations.logIn.rejected]:

        [authOperations.logOut.fulfilled]: (state, action) => {
            return {
                ...state,
                user: { name: null, email: null },
                token: null,
                isLoggedIn: false,
            }
        },
        // [authOperations.logOut.pending]:
        // [authOperations.logOut.rejected]:
 
        [authOperations.fetchCurrentUser.pending]: (state) => {
            return {
                ...state,
                isFeatchingCurrentUser: true,
            }

        },
    
        [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
            return {
                 ...state,
                user: action.payload,
                isLoggedIn: true,
                isFeatchingCurrentUser: false,
            }
        },
        
        [authOperations.fetchCurrentUser.rejected]: (state) => {
            return {
                ...state,
                isFeatchingCurrentUser: false,
            }
        }
    }
});

const authReducer = authSlice.reducer;

export default authReducer;
