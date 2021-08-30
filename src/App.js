import React, {useEffect, Suspense, lazy} from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { authSelectors } from 'redux/auth';
// import {Container} from 'components/Container/Container.styled'

const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsFormView = lazy(() => import('./views/ContactsFormView'));
// const UploadView = lazy(() => import('./views/UploadView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
      isFetchingCurrentUser ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <AppBar />
         
          <Switch>
            <Suspense fallback={<h2>Loading...</h2>}></Suspense>
            <PublicRoute path="/register" restricted >
              <RegisterView />
            </PublicRoute>
        
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsFormView />
            </PrivateRoute>
          </Switch>
        </>
      )
    
  );
};