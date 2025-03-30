import React from 'react';
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section className='my-projects-container w-full bg-black'>
        <div className="flex px-20 w-full font-display justify-center">
            <motion.h1 initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: {duration: 1}}} viewport={{once: true, amount: 0.5}} className='text-white text-4xl my-10'>My <span className='font-bold bg-yellow-300 px-2 rounded-md'>Projects</span></motion.h1>
        </div>
    </section>
  )
}

export default Projects