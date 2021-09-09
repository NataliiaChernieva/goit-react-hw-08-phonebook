import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import { authSelectors } from 'redux/auth';
import { Header, Menu } from './AppBar.styled';
import { NavLink } from 'react-router-dom';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
    return (
      <Header>
        <Menu>
          <NavLink to="/" exact>Home</NavLink>
          {isLoggedIn && <NavLink to="/contacts">My contacts</NavLink>}
        </Menu>
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </Header>
  );
}