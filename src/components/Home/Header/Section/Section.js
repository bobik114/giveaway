import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Section.module.scss';

const Section = () => {
    return <div className={styles.container}>
        <div className={styles.sectionWrapper}>
            <h1>Zacznij pomagać!</h1> 
            <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <div className={styles.decoration}/>
            <div className={styles.linkItems}>
                <div><Link to='login'>ODDAJ RZECZY</Link></div>
                <div><Link to='login'>ZORGANIZUJ ZBIÓRKĘ</Link></div>
            </div>
        </div>
    </div>
}

export default Section;