import React from 'react';
import UserNav from '../Home/Header/UserNav/UserNav'
import MainNav from '../Home/Header/MainNav/MainNav'
import styles from './Logout.module.scss'
import {Link} from 'react-router-dom'
import decoration from '../../assets/Decoration.svg'

const Logout = () => {
    return (
        <>
            <div className={styles.container}>
                <div >
                    <UserNav />
                    <MainNav />
                </div>
                <section className={styles.login_container}>
                    <h2 className={styles.login_title}>Wylogowanie nastąpiło pomyślnie!</h2>
                    <img src={decoration} />
                    
                        <div className={styles.login_btn_content}>
                            <Link exact to='/'>Strona główna</Link>
                        </div>
                    
                </section>
            </div>
        </>
    ) 
};

export default Logout;