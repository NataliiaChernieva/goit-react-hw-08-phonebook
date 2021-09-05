import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Container, Title } from '../components/Container/Container.styled';
import { CustomForm } from '../components/Form/Form.styled';
import Input from 'components/Input/Input';
import Button from '../components/Button/Button';

export default function RegisterView () {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;

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
        dispatch(authOperations.register({ name, email, password }));
        reset();
    }

    const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
    };
    
    return (
        <Container>
            <Title>Registration</Title>
            <CustomForm onSubmit={handleSubmit} autoComplete="off">
                <Input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleChange}
                />
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
                    pattern="[0-9a-fA-F]{4,8}"
                    title="Длина пароля 4-8 символов"
                    required
                    onChange={handleChange}
                />
                <Button type="submit" text="SING UP" />
            </CustomForm>
        </Container>
    );

}
