import React from 'react';
import { motion } from "motion/react";

const ExperienceBox = ({logo, title, text, date}) => {
  return (
    <motion.div initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: {duration: 0.5, ease: "easeIn"}}} viewport={{once: true, amount: 0.4}} className="experience-box w-5/6 border text-white px-5 py-4 flex flex-col gap-5 rounded-md hover:bg-[#27272A] transition-all cursor-pointer">
        <div className="top-section w-full flex justify-between items-center">
            <div className="top-section-left flex gap-3 items-center">
                <img src={logo} alt={`${logo} Image`} className='h-10'/>
                <h1 className='text-xl font-bold'>{title}</h1>
            </div>
            <div className="top-section-right">
                <h1>{date}</h1>
            </div>
        </div>
        <div className="bottom-section">
            <p className='text-gray-400 text-lg'>{text}</p>
        </div>
    </motion.div>
  )
}

export default ExperienceBox