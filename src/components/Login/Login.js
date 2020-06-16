import React from 'react';
import UserNav from '../Home/Header/UserNav/UserNav'
import MainNav from '../Home/Header/MainNav/MainNav'
import styles from './Login.module.scss'
import {Link} from 'react-router-dom'
import decoration from '../../assets/Decoration.svg'

const Login = () => {
    return (
        <>
            <div className={styles.container}>
                <div >
                    <UserNav />
                    <MainNav />
                </div>
                <section className={styles.login_container}>
                    <h2 className={styles.login_title}>Zaloguj się</h2>
                    <img src={decoration} />
                    <form className={styles.login_form} >
                        <div className={styles.login_form_content}>
                            <div className={styles.login_input_container}>
                                <label htmlFor={styles.email} className={styles.login_input_label}>
                                    Email
                                </label>
                                <input id={styles.email} type="text" name="email" />
                            </div>
                            <div className={styles.login_input_container}>
                                <label htmlFor={styles.password} className={styles.login_input_label}>
                                    Hasło
                                </label>
                                <input id={styles.password} type="password" name="password" />
                            </div>
                            
                            
                        </div>
                        <div className={styles.login_btn_content}>
                            <Link exact to='/login'>Zaloguj się</Link>
                            
                            <Link exact to='/Register'>Załóż konto</Link>
                        </div>
                    </form>
                </section>
            </div>
        </>
    ) 
};

export default Login;