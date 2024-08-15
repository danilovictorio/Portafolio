import React from 'react'
import { getImageUrl } from "../../utils";
import styles from './About.module.css'

const About = () => {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>Sobre Mi</h2>
    <div className={styles.content}>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>Soy Frontend developer con experiencia con building, responsive y sitios optimizados </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div>
                <h3>Backend Developer</h3>
                <p>Tengo experiencia desplegando, rapido y optimizados con apis </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
                <h3> UI Designer</h3>
                <p>
                Me gusta crear interfaces limpias y atractivas para los usuarios
                </p>
            </div>
            </li>
        </ul>
        
    </div>
  </section>
  );
}

export default About