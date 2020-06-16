import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './UserNav.module.scss';

const UserNav = () => {
    return <>
        <div className={styles.listWrapper}>
            <ul className={styles.list}>
                <li><NavItem linkTo="/login" title="Zaloguj" /></li>
                <li><NavItem linkTo="/register" title="Załóż konto" /></li>
            </ul>
        </div>
    </>
}

export default UserNav;