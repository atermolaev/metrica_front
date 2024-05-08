import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { authReset } from '$ducks/auth/actions';
import classes from './Menu.module.css';
import { UnorderedList, ListItem, ListIcon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useCookies } from 'react-cookie';
import { COOKIE_AUTH_NAME } from '$constants';
 
const MenuComponent: React.FC = () => {
    const dispatch = useDispatch();
    const [,, removeCookie] = useCookies()
    const handleOnExit = () => {
        dispatch(authReset());
        removeCookie(COOKIE_AUTH_NAME);
    };

    return (
        <>
            <UnorderedList className={classNames(classes.menu, classes.menuLine)} pt={4} pb={5}>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Link to='/home'>Home</Link>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Link to='/page1'>Page1</Link>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Link to='/page2'>Page2</Link>
                </ListItem>
            </UnorderedList>
            <UnorderedList className={classes.menu} pt={4} pb={5}>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <span className={classes.exitItem} onClick={handleOnExit}>Выход</span>
                </ListItem>
            </UnorderedList>
        </>        
    )
}

export default MenuComponent