import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola Soy Danilo</h1>
            <p className={styles.description}>
                Desarrollador web Full Stack, apasionado por la tecnología y el aprendizaje continuo.
            </p>
            <a href="mailto:danilovictorio777@gmail.com" className={styles.contactBtn} >Contactame</a>
        </div>
        <img src={getImageUrl("hero/fotoDanilo.jpg")} alt="Hero Image of me" className={styles.Img}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero