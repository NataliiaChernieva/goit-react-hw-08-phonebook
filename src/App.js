import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginView from "views/LoginView";
import RegisterView from "views/RegisterView";
import ContactsFormView from "views/ContactsFormView";
import authOperations from 'redux/auth';
import AppBar from 'components/AppBar/AppBar';


export default function App() {
    const dispatch = useDispatch();
    

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar/>
         
      <Switch>
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsFormView} />
      </Switch>
    </>
  );
}