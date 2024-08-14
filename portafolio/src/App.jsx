import React from "react";
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
function App() {
  return  (
  <div className={styles.App}>
    <NavBar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    
    </div>
  );
}

export default App
