import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import { authSelectors } from 'redux/auth';
import { Header } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
    return (
    <Header>
          {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </Header>
  );
}