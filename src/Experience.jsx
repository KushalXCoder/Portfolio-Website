import React from 'react';
import ExperienceBox from './ExperienceBox.jsx';
import { motion } from "motion/react";

const Experience = () => {
    
  const details = [
    {logo: "", title: "Lead Software Engineer at Google", text: "Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience.",
    date: "Nov 2019 - Present"},
    {logo: "", title: "Lead Software Engineer at Google", text: "Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience.",
    date: "Nov 2019 - Present"},
  ];

  return (
    <section className='section-container w-full bg-black py-20'>
        <div className="flex flex-col w-full items-center font-display">
            <motion.h1 initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: {duration: 1}}} viewport={{once: true, amount: 0.5}} className='text-white text-4xl mb-10'>My <span className='bg-yellow-300 rounded-md px-2 font-bold'>Experience</span></motion.h1>
            <div className="experience-boxes w-full flex flex-col items-center gap-15 mt-5">
                {details.map((item, index) => (
                    <ExperienceBox key={index} logo={item.logo} title={item.title} text={item.text} date={item.date}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Experience