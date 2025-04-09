import React, { useEffect, useState } from 'react';
import Download from "/Download.png";
import Menu from "/menu.png";
import Cross from "/Cross.png";
import { AnimatePresence, motion, useScroll } from "motion/react";

const Navbar = () => {

  const navLinks = [
    {name: "About", path: "about"},
    {name: "Skills", path: "skills"},
    {name: "Projects", path: "projects"},
    {name: "Contact", path: "contact"}
  ]

  const [hovered, setHovered] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1, transition: {duration: 1.2}}}
        className='w-full fixed top-0 flex justify-between items-center px-28 py-5 bg-white z-100 shadow-md max-sm:px-5 max-lg:px-15'
      >
          <motion.h1 className='font-display font-bold text-2xl cursor-pointer mb-[1px]' whileHover={{scale: 1.05, rotate: "-4deg"}}>TheCodster</motion.h1>
          <div className="nav-options flex justify-between items-center w-3/5 max-sm:hidden max-lg:hidden">
            <ul className="nav-options flex gap-8">
              {navLinks.map((item, index) => (
                <motion.li key={index} className='font-display font-medium text-lg cursor-pointer relative' whileHover={{scale: 1.08}}>
                  <a href={`#${item.path}`} className='nav-links'>{item.name}</a>
                </motion.li>
              ))}
            </ul>
            <motion.div className="download-resume border-2 px-4 py-2.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer *:cursor-pointer"
              whileTap={{scale: 1.01}}
              initial={{ boxShadow: "6px 6px 0px rgba(0,0,0,1)" }}
              whileHover={{
                boxShadow: "0px 0px 0px rgba(0,0,0,1)",
                backgroundColor: "#000000",
                color: "#FFFFFF",
                borderColor: "#000000"
              }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              <button className='font-display font-medium flex items-center gap-3' disabled>
                <a href="/Resume.pdf" download="Resume">Resume</a>
                <img src={Download} alt="Download Image" className='h-5 transition duration-400 image-invert'/>
              </button>
            </motion.div>
          </div>
          <div className="menu-icon lg:hidden">
            <img src={Menu} alt="Menu Image" className='menu h-7' onClick={() => setMenuOpen(!isMenuOpen)}/>
          </div>
      </motion.nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{y: -200, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 1}}} exit={{y: -200, opacity: 0, transition: {duration: 0.5}}} className="nav-options flex flex-col justify-center items-center h-full w-full gap-8 fixed bg-white z-100">
            <div className="cross absolute top-5 right-5">
              <img src={Cross} alt="Cross Image" className='h-6' onClick={() => setMenuOpen(false)}/>
            </div>
            <ul className="nav-options flex flex-col gap-8">
              {navLinks.map((item, index) => (
                <motion.li key={index} className='font-display font-medium text-lg cursor-pointer relative' whileHover={{scale: 1.08}}>
                  <a href={`#${item.path}`} className='nav-links'>{item.name}</a>
                </motion.li>
              ))}
            </ul>
            <motion.div className="download-resume border-2 px-4 py-2.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer *:cursor-pointer"
              whileTap={{scale: 1.01}}
              initial={{ boxShadow: "6px 6px 0px rgba(0,0,0,1)" }}
              whileHover={{
                boxShadow: "0px 0px 0px rgba(0,0,0,1)",
                backgroundColor: "#000000",
                color: "#FFFFFF",
                borderColor: "#000000"
              }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              <button className='font-display font-medium flex items-center gap-3'>
                Resume
                <img src={Download} alt="Download Image" className='h-5'/>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar