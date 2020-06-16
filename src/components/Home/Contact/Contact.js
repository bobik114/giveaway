import React from 'react'
import styles from './Contact.module.scss'
import decoration from '../../../assets/Decoration.svg'
import bg from '../../../assets/Background-Contact-Form.jpg'
import fbLogo from '../../../assets/Facebook.svg'
import insLogo from '../../../assets/Instagram.svg'

const Contact = () => {
    return (
        <div className={styles.contactSection} >
            <div className={styles.contactBackground} style={{backgroundImage: `url(${bg})`}}></div>
            <div className={styles.formContainer}>
                <h1>Skontaktuj się z nami</h1>
                <img src={decoration} />
                <form className={styles.form}>
                    <div className={styles.twoInputsContainer}>
                        <div className={styles.twoInputs}>
                            <label htmlFor={styles.name}>Wpisz swoje imię</label>
                            <input type="text" id={styles.name} placeholder="Krzysztof"/>
                        </div>
                        <div className={styles.twoInputs}>
                            <label htmlFor={styles.name}>Wpisz swój email</label>
                            <input type="email" id={styles.name} placeholder="abc@xyz.pl"/>
                        </div>
                    </div>
                    <div className={styles.messageContainer}>
                        <label for={styles.message}>Wpisz swoją wiadomość</label>
                        <textarea id={styles.message} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    </div>
                    <div className={styles.submitBtnContainer}>
                        <input className={styles.submitBtn} type="submit" value="Wyślij"/>
                    </div>
                </form>
            </div>
            <div className={styles.footerContainer}>
                <div></div>
                <p>Copyright by Coders Lab</p>
                <div className={styles.socialContainer}>
                    <img src={fbLogo} />
                    <img src={insLogo} />
                </div>
            </div>
        </div>
    )
}

export default Contact
