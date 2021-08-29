import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Container, Title } from '../components/Container/Container.styled';
import { CustomForm } from '../components/Form/Form.styled';
import Input from 'components/Input/Input';
import Button from '../components/Button/Button';

export default function LoginView () {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            
            case 'password':
                setPassword(value);
                break;
            
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ email, password }));
        reset();
    }

    const reset = () => {
    setEmail('');
    setPassword('');
    };
    
    return (
        <Container>
            <Title>Autorization Page</Title>
            <CustomForm onSubmit={handleSubmit} autoComplete="off">
                <Input
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    value={password}
                    required
                    onChange={handleChange}
                />
                <Button type="submit" text="LOG IN" />
            </CustomForm>
        </Container>
    );

}