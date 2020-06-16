import React from 'react';
import styles from './NavItem.module.scss';

const NavItem = (props) => {
    return <>
        <a className={styles.navItem} href={props.object.href}>{props.object.title}</a>
    </>
}

export default NavItem;