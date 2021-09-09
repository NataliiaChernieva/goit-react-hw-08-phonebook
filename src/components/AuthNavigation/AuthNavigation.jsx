import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './AuthNavigation.styled';

const styles = {
  activeLink: {
    color: '#E84A5F',
  },
};

export default function AuthNav() {
  return (
    <Navigation>
      <NavLink
        to="/register"
        exact
        activeStyle={styles.activeLink}
      >
        Sing Up
      </NavLink>
      <NavLink
        to="/login"
        exact
        activeStyle={styles.activeLink}
      >
        Log In
      </NavLink>
    </Navigation>
  );
}
