import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <React.Fragment>
            <ul className={styles.menu}>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/page1'>Page1</Link></li>
                <li><Link to='/page2'>Page2</Link></li>
            </ul>
        </React.Fragment>
    )
}

export default Header