import { React, useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { motion } from "motion/react";
import Skills from './Skills';
import Experience from './Experience';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Footer from './Footer';

function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY + window.scrollY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12
    }
  }

  return (
    <div className="app h-screen w-screen relative overflow-x-hidden">
      <motion.div className="cursor fixed top-0 left-0 h-10 w-10 bg-black rounded-full z-100 pointer-events-none" variants={variants} animate="default"></motion.div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Experience/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App