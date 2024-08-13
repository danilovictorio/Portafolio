import  { useState } from "react";

import styles from "./NavBar.module.css";
import { getImageUrl } from "../../utils";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.NavBar}>
      <a className={styles.title} href="/">
        Portafolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="/#about">Sobre Mi</a>
          </li>
          <li>
            <a href="/#experience">Experiencia</a>
          </li>
          <li>
            <a href="/#projects">Proyectos</a>
          </li>
          <li>
            <a href="/#Contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
