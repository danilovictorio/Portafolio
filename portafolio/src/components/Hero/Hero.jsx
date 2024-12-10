import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola, Soy Danilo</h1>
            <h1 className={styles.subTitle}>Desarrollador Web Full Stack</h1>
            <p className={styles.description}>
            Apasionado por la tecnología y el aprendizaje continuo. Me especializo en construir experiencias web intuitivas, eficientes y atractivas. Mi objetivo es combinar la lógica del backend con el diseño del frontend para crear aplicaciones completas y funcionales.
            </p>
            <a href="mailto:danilovictorio777@gmail.com" className={styles.contactBtn} >Contactame</a>
        </div>
        <img src={getImageUrl("hero/fotoDanilo.jpg")} alt="Hero Image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero