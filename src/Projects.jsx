import React from 'react';
import { motion } from "motion/react";
import Project1 from "/Project1.png";
import Project2 from "/Project2.png";
import Project3 from "/Project3.png";
import Visit from "/Visit.png";

const Projects = () => {
  return (
    <section id='projects' className='my-projects-container w-full bg-black'>
        <div className="flex flex-col px-20 w-full font-display items-center max-sm:px-5 max-lg:px-15">
            <motion.h1
              initial={{y: -50, opacity: 0}}
              whileInView={{y: 0, opacity: 1, transition: {duration: 1}}}
              viewport={{once: true, amount: 0.5}}
              className='text-white text-4xl my-10'
            >
              My <span className='font-bold bg-yellow-300 px-2 rounded-md'>Projects</span>
            </motion.h1>
            <div className="projects-container flex flex-col">
              <motion.div
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1, transition: {duration: 1}}}
                viewport={{once: true, amount: 0.3}}
                className="project-1 flex my-10 relative max-sm:flex-col max-sm:items-center max-lg:flex-col max-lg:items-center"
              >
                <img src={Project1} alt="Project1 Image" className='w-2/4 rounded-md border-2 border-white max-sm:w-full max-lg:w-full'/>
                <div className="project-1-content flex flex-col ps-20 max-sm:ps-0 max-sm:mt-10 max-lg:ps-0 max-lg:mt-10">
                  <h1 className='project-title text-white text-2xl font-bold'>Los Santos Elite <span className='text-blue-500'>(Best Website Award @ WMC 5.0)</span></h1>
                  <p className='text-gray-500 mt-5'>
                    Los Santos Elite, my first ever big project and an e-commerse platform, based on the GTA-V theme, which was developed in a month, during my colleg's programming club event, WMC 5.0. It is developed using the classic web dev technologies, like HTML, CSS, JavaScript, BootStrap, NodeJS and MongoDB. This website, enable's the people of GTA-V to buy or sell (list) their properties on our site. Alongside, this they can also sell their vehicles and cars. It includes features like, buying and listing different items, google authentication and payment gateway. Not flexing, but this website led to the first victory of my web dev journey.
                  </p>
                  <div className="visit-and-comment flex items-center gap-5 mt-5 w-full">
                    <motion.div className="visit-project flex bg-white rounded-full p-2 cursor-pointer max-sm:w-11 max-lg:w-11" whileHover={{scale: 1.1}}>
                      <a href="https://github.com/KushalXCoder/Los-Santos-Elite" target='_blank'><img src={Visit} alt="Visit Image" className='h-6'/></a>
                    </motion.div>
                    <div className="comment w-full">
                      <input type="text" className='bg-white rounded-md text-sm px-3 py-2 w-2/5 max-sm:w-4/5' placeholder='Leave your feedback'/>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{x: 100, opacity: 0}}
                whileInView={{x: 0, opacity: 1, transition: {duration: 1}}}
                viewport={{once: true, amount: 0.3}}
                className="project-2 flex my-10 max-sm:flex-col-reverse max-lg:flex-col-reverse max-lg:items-center"
              >
                <div className="project-2-content flex flex-col pe-20 max-sm:pe-0 max-sm:mt-10 max-lg:pe-0 max-lg:mt-10">
                  <h1 className='project-title text-white text-2xl font-bold'>Bored.exe</h1>
                  <p className='text-gray-500 mt-5'>
                    A timepass website made for timepass while doing timepass. Bored.exe is a first stage website made in ReactJS + TailwindCSS and MongoDB (for storage), which aims at making the boring lectures more fun, rather than just playing the same car game always. This website randomly travels you to other website, based on the option you selected and makes your boring time fun. There are many things, that can still be added to this project, aiming to make it a more good timepass website. 
                  </p>
                  <div className="visit-and-comment flex items-center gap-5 mt-5 w-full">
                    <motion.div className="visit-project flex bg-white rounded-full p-2 cursor-pointer max-sm:w-11 max-lg:w-11" whileHover={{scale: 1.1}}>
                      <a href="https://github.com/KushalXCoder/Bored.exe" target='_blank'><img src={Visit} alt="Visit Image" className='h-6'/></a>
                    </motion.div>
                    <div className="comment w-full">
                      <input type="text" className='bg-white rounded-md text-sm px-3 py-2 w-2/5 max-sm:w-4/5' placeholder='Leave your feedback'/>
                    </div>
                  </div>
                </div>
                <img src={Project2} alt="Project1 Image" className='w-2/4 rounded-md max-sm:w-full max-lg:w-full'/>
              </motion.div>
              <motion.div
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1, transition: {duration: 1}}}
                viewport={{once: true, amount: 0.3}}
                className="project-1 flex my-10 relative max-sm:flex-col max-sm:items-center max-lg:flex-col max-lg:items-center"
              >
                <img src={Project3} alt="Project1 Image" className='w-2/4 rounded-md border-2 border-white max-sm:w-full max-lg:w-full'/>
                <div className="project-1-content flex flex-col ps-20 max-sm:ps-0 max-sm:mt-10 max-lg:ps-0 max-lg:mt-10">
                  <h1 className='project-title text-white text-2xl font-bold'>Research Perfect</h1>
                  <p className='text-gray-500 mt-5'>
                    One of my latest project, which was going to be an extension, which converted to a website, is a tool, which helps researchers or students find the H-index, of the author or publisher. Originally, user needed to go to google scholar, then search for the name, and then find the name from the list of other names. But, making it easier and simpler, Research Perfect, requires just the name, and then web scrapes the data from google scholar and give the matched output with your input. It is one of the part of the multiverse of a website, thought to make researching easier for students and researchers. Made using ReactJS + TailwindCSS and PuppeteerJS (for web scrapping). 
                  </p>
                  <div className="visit-and-comment flex items-center gap-5 mt-5 w-full">
                    <motion.div className="visit-project flex bg-white rounded-full p-2 cursor-pointer max-sm:w-11 max-lg:w-11" whileHover={{scale: 1.1}}>
                      <a href="https://github.com/KushalXCoder/Perfect-Research" target='_blank'><img src={Visit} alt="Visit Image" className='h-6'/></a>
                    </motion.div>
                    <div className="comment w-full">
                      <input type="text" className='bg-white rounded-md text-sm px-3 py-2 w-2/5 max-sm:w-4/5' placeholder='Leave your feedback'/>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Projects