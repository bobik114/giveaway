import React from 'react'
import styles from './AboutUs.module.scss'
import peopleImg from '../../../assets/People.jpg'
import decoration from '../../../assets/Decoration.svg'
import signature from '../../../assets/Signature.svg'

const bg = {
    backgroundImage: `url(` + peopleImg + `)`
}

const Decorbg = {
    backgroundImage: `url(` + peopleImg + `)`
}


const AboutUs = () => {
    return (
        <section className={styles.container}>

            <div className={styles.section}>
                <h1>O nas</h1>
                <img src={decoration} />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className={styles.signatureContainer}> 
                    <img src={signature} />
                </div>
            </div>
            <div className={styles.photo} style={bg}></div>
        </section>
    )
}

export default AboutUs
