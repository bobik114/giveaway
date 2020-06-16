import React, {useState, useEffect} from 'react'
import styles from './WhoWeHelp.module.scss'
import decoration from '../../../assets/Decoration.svg'
import Foundation from './Foundation/Foundation'
import Organization from './Organization/Organization'
import Gathering from './Gathering/Gathering'
import Button from './Button/Button'

const WhoWeHelp = () => {

    const buttons = [
        {
            value: "foundation",
            label: "Fundacjom",
        },
        {
            value: "organization",
            label: "Organizacjom pozarządowym",
        },
        {
            value: "gathering",
            label: "Lokalnym zbiórkom",
        },
    ]

    const [selected, setSelected] = useState("foundation")


    const handleClick = (event) => {
        setSelected(event.target.getAttribute("value"))
    }

    return (
        <div>
            <div className={styles.header}>
                <h1>Komu pomagamy?</h1>
                <img className={styles.decoration} src={decoration}/>
                <div className={styles.containerButton}>
                    {buttons.map((e, i) =>  <div onClick={handleClick} value={e.value} className={styles.button + " " + (e.value === selected ? (styles.active):(""))}>{e.label}</div>)}
                </div>
            </div>
            {(selected === "foundation")? (
                <Foundation />
            ) : (null)}
            {(selected === "organization")? (
                <Organization />
            ) : (null)}
            {(selected === "gathering")? (
                <Gathering />
            ) : (null)}
        </div>
    )
}

export default WhoWeHelp
