import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <React.Fragment>
            <ul className={styles.menu}>
                <li><Link to='/main/home'>Home</Link></li>
                <li><Link to='/main/page1'>Page1</Link></li>
                <li><Link to='/main/page2'>Page2</Link></li>
            </ul>
        </React.Fragment>
    )
}

export default Header