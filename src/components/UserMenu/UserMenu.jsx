import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import { UserImg, SayHello, UserMenuContainer } from './UserMenu.styled';
import Button from '../Button/Button';
import { useHistory } from 'react-router';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;
  const history = useHistory();
  // console.log(`history`, history);

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
    history.push('/');

  };

  return (
    <UserMenuContainer>
      <UserImg src={avatar} alt="" width="32"/>
      <SayHello >Wellcome, {name}</SayHello>
      {/* <Button type="button" text="LOG OUT" onClick={() => dispatch(authOperations.logOut())}/> */}
      <Button type="button" text="LOG OUT" onClick={() => handleLogOut()}/>  
    </UserMenuContainer>
  );
}