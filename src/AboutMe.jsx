import React from 'react';
import Aboutme from "/AboutMe.svg";
import Heart from "/Heart.png";
import Like from "/Like.png";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <section className='aboutme-container w-full'>
        <div className="flex w-full px-28 font-display mt-15 mb-10">
            <div className="bottom-content w-full flex">
                <motion.div initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: {duration: 1}}} viewport={{once: true, amount: 0.3}} className="left-container w-[50%]">
                    <img src={Aboutme} alt="About Me Image" className='w-4/5'/>
                </motion.div>
                <div className="right-container w-[50%] flex flex-col">
                    <motion.h1 initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: {duration: 1}}} viewport={{once: true, amount: 0.5}} className='text-4xl'>About <span className='font-bold bg-yellow-300 px-2 rounded-md'>Me</span></motion.h1>
                    <motion.div initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: {duration: 1}}} viewport={{once: true, amount: 0.3}} className="about-me-para w-full text-lg flex flex-col gap-6 mt-12 *:text-gray-500 overflow-x-hidden">
                        <p>I'm a passionate full-stack developer specializing in <span>React.js</span> & <span>Node.js</span>. I thrive on blending technical expertise with according to sleek UI/UX design to build high-performing, user-friendly applications.</p>
                        <p>My web development journey started in <span>2023</span>, and since then, I've continuously evolved, taking on new challenges and keeping up with the latest technologies. Today, I build <span>cutting-edge web applications</span> using <span>ReactJS, TailwindCSS, MongoDB and more.</span></p>
                        <p>Beyond coding, I enjoy sharing insights on <span>LinkedIn</span>, engaging with <span>other connections</span>. Feel free to follow me on <span>LinkedIn</span> or check out my projects on <span>GitHub</span>.</p>
                    </motion.div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1}}} viewport={{once: true, amount: 0.3}} className="review flex items-center gap-5 mt-8 *:cursor-pointer">
                        <motion.img src={Heart} alt="Heart Image" className='h-8' whileHover={{scale: 1.2}}/>
                        <motion.img src={Like} alt="Like Image" className='h-8' whileHover={{scale: 1.2}}/>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe