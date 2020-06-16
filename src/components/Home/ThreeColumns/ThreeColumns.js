import React from 'react'
import styles from './ThreeColumns.module.scss'
import bgImg from '../../../assets/bg.png'

const bg = {
    backgroundImage: `url(` + bgImg + `)`
  };

const ThreeColumns = () => {
    return (
        <section className={styles.threeColumnsContainer} style={bg}>
            <div className={styles.threeColumnsContainerBox}>
                <h2>10</h2>
                <h3>ODDANYCH WORKÓW</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className={styles.threeColumnsContainerBox}>
                <h2>5</h2>
                <h3>WSPARTYCH ORGANIZACJI</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className={styles.threeColumnsContainerBox}>
                <h2>7</h2>
                <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    );
}

export default ThreeColumns
