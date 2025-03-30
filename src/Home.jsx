import React from 'react';
import Studing from "/Studing.svg";
import Gmail from "/Gmail.svg";
import Linkedin from "/Linkedin.svg";
import GitHub from "/GitHub.svg";
import { motion } from "motion/react";

const Home = () => {

  const connect = [
    {name: "LinkedIn", src: Linkedin, path: "https://www.linkedin.com/in/kushal-rathod-90b800297/"},
    {name: "Gmail", src: Gmail},
    {name: "GitHub", src: GitHub, path: "https://github.com/KushalXCoder"}
  ];

  return (
    <section id='about' className='home-container h-full w-full pt-20'>
        <div className="flex flex-row px-28 py-14 justify-between items-center">
            <div className="left-content lg:w-[45%] font-display">
                <motion.div initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 1}}} className="my-intro text-6xl gap-5 flex flex-col text-nowrap">
                    <h1>Hello, <span className='name font-bold relative pe-4'>I am Kushal Rathod</span></h1>
                    <h1><span className='font-bold bg-yellow-300 rounded-md px-2'>Fullstack</span><span className='new-outline font-bold'> Developer</span></h1>
                    <h1>Based in <span className='font-bold'>India.</span></h1>
                </motion.div>
                <motion.p initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 1}}} className='mt-8 text-gray-700'>Passionate about technology, I specialize in Full Stack Web Development with a strong interest in integrating Generative AI into web applications. I enjoy collaborating with friends and teams to build innovative solutions. Committed to continuous learning, I aim to grow as a developer and contribute to impactful projects in the tech industry.</motion.p>
                <motion.ul initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 1, delay: 0.5}}} className='connect-with-me flex gap-5 mt-14'>
                    {connect.map((item,index) => (
                        <motion.div key={index} className="box h-15 w-15 border flex justify-center items-center rounded-md cursor-pointer" whileHover={{scale: 1.05, borderWidth: "3px"}}>
                            <a href={item.path} target='_blank'><img src={item.src} alt={item.name} className='h-8'/></a>
                        </motion.div>
                    ))}
                </motion.ul>
            </div>
            <motion.div initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1, transition: {duration: 1}}} className="right-content w-[55%]">
                <img src={Studing} alt="Studing Image" className='h-full w-full'/>
            </motion.div>
        </div>
    </section>
  )
}

export default Home