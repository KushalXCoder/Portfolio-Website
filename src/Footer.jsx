import React from 'react';
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{opacity: 0, scale: 0.5}}
      whileInView={{opacity: 1, scale: 1, transition: {duration: 0.5}}}
      viewport={{once: true, amount: 0.3}}
      className='footer-container w-full bg-black px-28 py-8 flex font-display justify-between items-center max-sm:px-5 max-lg:px-15'
    >
        <motion.h1 className='text-white text-4xl font-bold cursor-pointer max-sm:text-2xl max-lg:text-3xl' whileHover={{rotate: "-4deg"}}>Kushal Rathod</motion.h1>
        <div className="website-details flex flex-col text-white font-bold">
            <p className='max-sm:text-end'>@2025 Personal Portfolio</p>
            <p className='text-end'>Made by - Me</p>
            <a href="https://www.figma.com/@jhanvishah" target='_blank' className='underline text-end'>Design Credits</a>
        </div>
    </motion.footer>
  )
}

export default Footer