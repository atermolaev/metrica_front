import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authRequest } from '../../ducks/auth/actions';
import { KEY_ENTER_NAME } from '$constants';

import { Button, FormControl, InputGroup, Input, InputRightElement, Box, Heading, Flex } from '@chakra-ui/react';

const Auth: React.FC = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    const handleShowPass = () => setShow(!show);
    const handleOnChangeLogin = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }, []);
    const handleOnChangePass = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    }, []);

    const handleOnSubmit = () => {
        dispatch(authRequest({ login, pass }));
    }

    const handleKeyDown: React.KeyboardEventHandler = (event) => {
        if(event.key != KEY_ENTER_NAME) return;

        handleOnSubmit();
    }

    return <Box maxW='sm' borderWidth='1px' borderRadius='lg' p={4} m="20px auto 0" onKeyDown={handleKeyDown}>
        <Flex justifyContent="space-around" p={0} pl={4} pb={4} pr={4}>
            <Heading as='h4' size='md'>Авторизация</Heading>
        </Flex>
        <FormControl pb={4}>
            <Input placeholder='Логин' value={login} onChange={handleOnChangeLogin} />
        </FormControl>
        <FormControl pb={4}>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Пароль'
                    value={pass}
                    onChange={handleOnChangePass}
                />
                <InputRightElement width='6rem'>
                    <Button w='5rem' h='1.75rem' size='sm' onClick={handleShowPass}>
                        {show ? 'Скрыть' : 'Показать'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button style={{ width: '100%' }} onClick={handleOnSubmit}>Войти</Button>
    </Box>;
}

export default Auth;
