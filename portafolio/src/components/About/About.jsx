import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

const About = () => {
  const aboutData = [
    {
      id: 1,
      icon: 'about/cursorIcon.png',
      alt: 'Icono de cursor',
      title: 'Desarrollador Frontend',
      description:
        'Tengo experiencia creando sitios web responsive, optimizados y con una experiencia de usuario intuitiva.',
    },
    {
      id: 2,
      icon: 'about/serverIcon.png',
      alt: 'Icono de servidor',
      title: 'Desarrollador Backend',
      description:
        'Desarrollo y despliego APIs rápidas y eficientes, asegurando el rendimiento y la escalabilidad del servidor.',
    },
    {
      id: 3,
      icon: 'about/herramienta.png',
      alt: 'Icono de herramientas',
      title: 'Herramientas',
      description: (
        <>
          Utilizo <strong>GitHub</strong> para el control de versiones y colaboración en proyectos. <br />
          Con <strong>Docker</strong>, gestiono contenedores para asegurar que las aplicaciones funcionen en distintos entornos de manera consistente. <br />
          Prefiero <strong>Visual Studio Code</strong> como mi editor de código por su versatilidad y amplia gama de extensiones.
        </>
      ),
    },
    {
      id: 4,
      icon: 'about/cohete.png',
      alt: 'Icono de cohete',
      title: '¿Por qué Trabajar Conmigo?',
      description: (
        <ul className={styles.whyList}>
          <li><strong>Resolución de problemas:</strong> Disfruto enfrentando desafíos y encontrando soluciones prácticas.</li>
          <li><strong>Adaptabilidad:</strong> Aprendo nuevas tecnologías rápidamente y me adapto a distintos proyectos.</li>
          <li><strong>Trabajo en equipo:</strong> Colaboro efectivamente con otros desarrolladores y diseñadores.</li>
        </ul>
      ),
    },
  ];

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre Mí</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          {aboutData.map((item) => (
            <li key={item.id} className={styles.aboutItem}>
              <img
                src={getImageUrl(item.icon)}
                alt={item.alt}
                className={styles.icon}
              />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;