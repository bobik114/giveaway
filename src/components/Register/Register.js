import React from 'react';
import UserNav from '../Home/Header/UserNav/UserNav'
import MainNav from '../Home/Header/MainNav/MainNav'
import styles from './Register.module.scss'
import {Link} from 'react-router-dom'
import decoration from '../../assets/Decoration.svg'

const Register = () => {
    return (
        <>
            <div className={styles.container}>
                <div >
                    <UserNav />
                    <MainNav />
                </div>
                <section className={styles.register_container}>
                    <h2 className={styles.register_title}>Zarejestruj się</h2>
                    <img src={decoration} />
                    <form className={styles.register_form} >
                        <div className={styles.register_form_content}>
                            <div className={styles.register_input_container}>
                                <label htmlFor={styles.email} className={styles.register_input_label}>
                                    Email
                                </label>
                                <input id={styles.email} type="text" name="email" />
                            </div>
                            <div className={styles.register_input_container}>
                                <label htmlFor={styles.password} className={styles.register_input_label}>
                                    Hasło
                                </label>
                                <input id={styles.password} type="password" name="password" />
                            </div>
                            <div className={styles.register_input_container}>
                                <label htmlFor={styles.password} className={styles.register_input_label}>
                                    Powtórz hasło
                                </label>
                                <input id={styles.password} type="password" name="password" />
                            </div>
                            
                        </div>
                        <div className={styles.register_btn_content}>
                            <Link exact to='/Login'>Zaloguj się</Link>
                            
                            <Link exact to='/Register'>Załóż konto</Link>
                        </div>
                    </form>
                </section>
            </div>
        </>
    ) 
};

export default Register;