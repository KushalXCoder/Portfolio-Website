import React from 'react';
import { motion } from "motion/react";
import Project1 from "/Project1.png";
import Visit from "/Visit.png";

const Projects = () => {
  return (
    <section className='my-projects-container w-full bg-black'>
        <div className="flex flex-col px-20 w-full font-display items-center max-sm:px-5">
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
                className="project-1 flex my-10 max-sm:flex-col max-sm:items-center"
              >
                <img src={Project1} alt="Project1 Image" className='w-2/4 rounded-md border-2 border-white max-sm:w-full'/>
                <div className="project-1-content flex flex-col ps-20 max-sm:ps-0 max-sm:mt-10">
                  <h1 className='project-title text-white text-2xl font-bold'>Los Santos Elite</h1>
                  <p className='text-gray-500 mt-5'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolore rerum aliquid unde repellendus, praesentium ducimus minima nemo commodi! Labore, rerum! Ipsam tenetur corporis at natus sed odit molestias? Sed.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolore rerum aliquid unde repellendus, praesentium ducimus minima nemo commodi! Labore, rerum! Ipsam tenetur corporis at natus sed odit molestias? Sed.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolore rerum aliquid unde repellendus, praesentium ducimus minima nemo commodi! Labore, rerum! Ipsam tenetur corporis at natus sed odit molestias? Sed.
                  </p>
                  <div className="visit-and-comment flex items-center gap-5 mt-5 w-full">
                    <motion.div className="visit-project flex bg-white rounded-full p-2 cursor-pointer max-sm:w-11" whileHover={{scale: 1.1}}>
                      <a href=""><img src={Visit} alt="Visit Image" className='h-6'/></a>
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
                className="project-2 flex my-10 max-sm:flex-col-reverse"
              >
                <div className="project-2-content flex flex-col pe-20 max-sm:pe-0 max-sm:mt-10">
                  <h1 className='project-title text-white text-2xl font-bold'>Los Santos Elite</h1>
                  <p className='text-gray-500 mt-5'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolore rerum aliquid unde repellendus, praesentium ducimus minima nemo commodi! Labore, rerum! Ipsam tenetur corporis at natus sed odit molestias? Sed.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolore rerum aliquid unde repellendus, praesentium ducimus minima nemo commodi! Labore, rerum! Ipsam tenetur corporis at natus sed odit molestias? Sed.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolore rerum aliquid unde repellendus, praesentium ducimus minima nemo commodi! Labore, rerum! Ipsam tenetur corporis at natus sed odit molestias? Sed.
                  </p>
                  <div className="visit-and-comment flex items-center gap-5 mt-5 w-full">
                    <motion.div className="visit-project flex bg-white rounded-full p-2 cursor-pointer max-sm:w-11" whileHover={{scale: 1.1}}>
                      <a href=""><img src={Visit} alt="Visit Image" className='h-6'/></a>
                    </motion.div>
                    <div className="comment w-full">
                      <input type="text" className='bg-white rounded-md text-sm px-3 py-2 w-2/5 max-sm:w-4/5' placeholder='Leave your feedback'/>
                    </div>
                  </div>
                </div>
                <img src={Project1} alt="Project1 Image" className='w-2/4 rounded-md border-2 border-white max-sm:w-full'/>
              </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Projects