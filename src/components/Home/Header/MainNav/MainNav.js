import React from 'react';
import styles from './MainNav.module.scss';
import NavItem from './NavItem/NavItem';


const MainNav = () => {

    const menuItems = [
        {
            title: "Start",
            href: "#"
        },
        {
            title: "O co chodzi?",
            href: "#"
        },
        {
            title: "O nas",
            href: "#"
        },
        {
            title: "Fundacja i organizacje",
            href: "#"
        },
        {
            title: "Kontakt",
            href: "#"
        },
    ]

    return <div className={styles.listWrapper}>
        <ul className={styles.list}>
            {menuItems.map((el, i) => <li className={styles.listItem} key={i}><NavItem object={el}/></li>)}
        </ul>
    </div>

}

export default MainNav;