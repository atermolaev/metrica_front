import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { authRequest, authReset } from '../../ducks/auth/actions';
import { EMPTY, KEY_ENTER_NAME, COOKIE_AUTH_NAME, COOKIE_AUTH_TIME } from '$constants';
import Icon from './images/loading.svg';
import classes from './Auth.module.css';
import { authTokenSelector, authStatusSelector, authFetchingSelector } from '$selectors';
import { useCookies } from 'react-cookie';

import { Button, FormControl, InputGroup, Input, InputRightElement, Box, Heading, Flex } from '@chakra-ui/react';

const Auth: React.FC = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const authToken = useSelector(authTokenSelector);
    const authFetching = useSelector(authFetchingSelector);
    const authStatus = useSelector(authStatusSelector);

    const [cookie, setCookie] = useCookies();

    const showError = authStatus === false && authToken !== EMPTY;

    const handleShowPass = () => setShow(!show);
    const handleOnChangeLogin = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }, []);
    const handleOnChangePass = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    }, []);

    const handleOnSubmit = () => {
        dispatch(authReset());
        dispatch(authRequest({ login, pass }));
    }

    const handleKeyDown: React.KeyboardEventHandler = (event) => {
        if (showError) dispatch(authReset());
        if (event.key != KEY_ENTER_NAME) return;

        handleOnSubmit();
    }

    useEffect(() => {
        if (authToken !== EMPTY && authToken !== cookie[COOKIE_AUTH_NAME] && authStatus) {
            setCookie(COOKIE_AUTH_NAME, authToken, { sameSite: 'strict', maxAge: COOKIE_AUTH_TIME });   
        }
    }, [authToken, authStatus]);

    const classesErrorBox = classNames({
        [classes.errorBox]: true,
        [classes.errorBoxVisible]: showError,
    });

    return <Box maxW='sm' borderWidth='1px' borderRadius='lg' p={4} m="20px auto 0" onKeyDown={handleKeyDown}>
        <Flex justifyContent="space-around" p={0} pl={4} pb={12} pr={4}>
            <Heading as='h4' size='md'>Авторизация2</Heading>
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
        <Flex className={classesErrorBox} justifyContent="space-around" pb={6}>Неправильно введен логин или пароль!</Flex>
        <Button style={{ width: '100%' }} onClick={handleOnSubmit}>
            {!authFetching && <>Войти</>}
            {authFetching && <Icon className={classes.loadIcon} />}
        </Button>
    </Box>;
}

export default Auth;
