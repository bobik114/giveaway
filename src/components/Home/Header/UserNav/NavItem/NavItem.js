import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NavItem.module.scss';

const NavItem = (props) => {
    return <div className={styles.linkWrapper}>
        <Link  to={props.linkTo}>{props.title}</Link>
    </div>
}

export default NavItem;