import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import { UserImg, SayHello, UserMenuContainer } from './UserMenu.styled';
import Button from '../Button/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <UserMenuContainer>
      <UserImg src={avatar} alt="" width="32"/>
      <SayHello >Wellcome, {name}</SayHello>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LOG OUT
      </Button>
    </UserMenuContainer>
  );
}