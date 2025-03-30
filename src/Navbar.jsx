import React, { useEffect, useState } from 'react';
import Logo from "/Logo.svg";
import Download from "/Download.png";
import { motion, useScroll } from "motion/react";

const Navbar = () => {

  const navLinks = [
    {name: "About", path: "about"},
    {name: "Skills", path: "skills"},
    {name: "Projects", path: ""},
    {name: "Contact", path: ""}
  ]

  const [hovered, setHovered] = useState(false);

  return (
    <motion.nav initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 1.2}}} className='w-full fixed top-0 flex items-center justify-between px-28 py-5 bg-white z-100 shadow-md'>
        {/* <motion.img src={Logo} alt="Logo" className='h-10 cursor-pointer' whileHover={{scale: 1.05, rotate: "-5deg"}}/> */}
        <motion.h1 className='font-display font-bold text-2xl cursor-pointer' whileHover={{scale: 1.05, rotate: "-4deg"}}>Kushal Rathod</motion.h1>
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
          <button className='font-display font-medium flex items-center gap-3'>
            Resume
            <img src={Download} alt="Download Image" className='h-5'/>
          </button>
        </motion.div>     
    </motion.nav>
  )
}

export default Navbar