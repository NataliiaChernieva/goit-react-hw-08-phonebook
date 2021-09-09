import React, {useEffect, Suspense, lazy} from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {authOperations, authSelectors} from 'redux/auth';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import {MainContainer} from 'components/Container/Container.styled'

const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "home-view" */));
const RegisterView = lazy(() => import('./views/RegisterView' /* webpackChunkName: "register-view" */));
const LoginView = lazy(() => import('./views/LoginView' /* webpackChunkName: "login-view" */));
const ContactsFormView = lazy(() => import('./views/ContactsFormView' /* webpackChunkName: "contactForm-view" */));
// const UploadView = lazy(() => import('./views/UploadView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  console.log(`isFetchingCurrentUser`, isFetchingCurrentUser)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
      isFetchingCurrentUser ? (
        <h2>Loading...</h2>
      ) : (
        <MainContainer>
          <AppBar />
         
          <Switch>
            <Suspense fallback={<h2>Loading...</h2>}>
            <PublicRoute path="/"  exact >
              <HomeView />
            </PublicRoute>
              
            <PublicRoute path="/register"  exact restricted redirectTo="/contacts" >
              <RegisterView />
            </PublicRoute>
        
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsFormView />
            </PrivateRoute>
            </Suspense>
          </Switch>
        </MainContainer>
      )
    
  );
};