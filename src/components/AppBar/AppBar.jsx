import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import { authSelectors } from 'redux/auth';
import { Header } from './AppBar.styled';
import { NavLink } from 'react-router-dom';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
    return (
      <Header>
        <NavLink to="/" exact>Home</NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </Header>
  );
}