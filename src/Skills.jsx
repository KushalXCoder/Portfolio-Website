import React from 'react';
import C from "/C.png";
import HTML from "/HTML.png";
import CSS from "/CSS.png";
import JavaScript from "/JavaScript.png";
import ReactJS from "/ReactJS.png";
import NodeJS from "/NodeJS.png";
import MongoDB from "/MongoDB.png";
import Git from "/Git.png";
import NextJS from "/NextJS.svg";
import { motion } from "motion/react";


const Skills = () => {
    
  const skills = [
    {name: "C++", src: C},
    {name: "HTML", src: HTML},
    {name: "CSS", src: CSS},
    {name: "JavaScript", src: JavaScript},
    {name: "ReactJS", src: ReactJS},
    {name: "NextJS", src: NextJS},
    {name: "TailwindCSS"},
    {name: "NodeJS", src: NodeJS},
    {name: "MongoDB", src: MongoDB},
    {name: "GitHub", src: Git},
  ];  

  return (
    <section id='skills' className='skills-container w-full mt-10 mb-3'>
        <div className="flex flex-col w-full font-display items-center px-10">
            <motion.h1 initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: {duration: 1}}} viewport={{once: true, amount: 0.5}} className='text-4xl'>My <span className='font-bold bg-yellow-300 rounded-md px-2'>Skills</span></motion.h1>
            <div className="skill-boxes mt-15 grid grid-cols-5 place-items-center gap-18 max-sm:grid-cols-2 max-sm:gap-5 max-lg:grid-cols-3 max-lg:gap-10">
                {skills.map((item,index) => (
                    <motion.div
                    key={index}
                    className='box h-50 w-50 col-span-1 max-sm:row-span-1 border-2 flex flex-col justify-evenly items-center cursor-pointer max-sm:h-35 max-sm:w-35 max-lg:h-40 max-lg:w-40'
                    initial={{ x: -100, opacity: 0, boxShadow: "6px 6px 0px rgba(0,0,0,1)" }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 1, delay: index * 0.1  }}}
                    viewport={{ once: true, amount: 0.2}}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#000000",
                      color: "#FFFFFF",
                      borderColor: "#000000",
                      boxShadow: "0px 0px 0px rgba(0,0,0,1)",
                    }}
                  >
                    {item.src && (
                      <motion.img src={item.src} alt={`${item.name} Logo`} className='h-15 max-sm:h-12 transition duration-500 image-invert'/>
                    )}
                    <motion.h1 className='font-bold text-lg max-sm:text-sm'>{item.name}</motion.h1>
                  </motion.div>                  
                ))}
            </div>
            <p className='more mt-8 w-full text-end'>and going on ....</p>
        </div>
    </section>
  )
}

export default Skills