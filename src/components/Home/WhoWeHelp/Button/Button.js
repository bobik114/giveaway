import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {
    return  <>
        <div onClick={props.onClick} value={props.buttonData.value} className={styles.button}>{props.buttonData.label}</div>
        </>
    
}

export default Button


