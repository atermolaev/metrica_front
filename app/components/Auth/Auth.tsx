import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRequest } from '../../ducks/auth/actions';
import { EMPTY, KEY_ENTER_NAME, COOKIE_AUTH_NAME, COOKIE_AUTH_TIME } from '$constants';
import Icon from './images/loading.svg';
import classes from './Auth.module.css';
import { authDataSelector } from '$selectors';
import { useCookies } from 'react-cookie';

import { Button, FormControl, InputGroup, Input, InputRightElement, Box, Heading, Flex } from '@chakra-ui/react';

const Auth: React.FC = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const authData = useSelector(authDataSelector);
    const [cookie, setCookie] = useCookies();

    const token = authData.token;

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

    useEffect(() => {
        if (token !== EMPTY && token !== cookie[COOKIE_AUTH_NAME] && authData.auth) {
            setCookie(COOKIE_AUTH_NAME, token, { sameSite: 'strict', maxAge: COOKIE_AUTH_TIME });   
        }
    }, [token]);

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
        <Button style={{ width: '100%' }} onClick={handleOnSubmit}>
            Войти
            <Icon className={classes.loadIcon} />
        </Button>
    </Box>;
}

export default Auth;
