import React from 'react'
import styles from './SimpleSteps.module.scss'
import {Link} from 'react-router-dom'
import IconTshirt from '../../../assets/Icon-1.svg'
import IconBag from '../../../assets/Icon-2.svg'
import IconLens from '../../../assets/Icon-3.svg'
import IconRecycling from '../../../assets/Icon-4.svg'

const SimpleSteps = () => {
    return (
        <section className={styles.simpleStepsContainer}>
            <h2>Wystarczą 4 proste kroki</h2>
            <div className={styles.decoration}/>
            <div className={styles.simpleStepsMain}>
                <div className={styles.simpleStepsBoxContainer}>
                    <div className={styles.simpleStepsBox}>
                        <img src={IconTshirt} alt='T-shirt'/>
                        <h3>Wybierz rzeczy</h3>
                        <hr/>
                        <p>ubrania, zabawki,<br/> sprzęt i inne</p>
                    </div>
                    <div className={styles.simpleStepsBox}>
                        <img src={IconBag} alt='Bag'/>
                        <h3>Spakuj je</h3>
                        <hr/>
                        <p>skorzystaj z<br/> worków na śmieci</p>
                    </div>
                    <div className={styles.simpleStepsBox}>
                        <img src={IconLens} alt='Magnifier'/>
                        <h3>Zdecyduj komu <br/>chcesz pomóc</h3>
                        <hr/>
                        <p>wybierz zaufane <br/> miejsce</p>
                    </div>
                    <div className={styles.simpleStepsBox}>
                        <img src={IconRecycling} alt='Recycling'/>
                        <h3>Zamów kuriera</h3>
                        <hr/>
                        <p>kurier przyjedzie<br/> w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div className={styles.linkWrapper}><Link to='login'>ODDAJ <br/>RZECZY</Link></div>
        </section>
    );
}

export default SimpleSteps
