import React from 'react';
import Gmail from "/Gmail.svg";
import Linkedin from "/Linkedin.svg";
import GitHub from "/GitHub.svg";
import Phone from "/Phone.png";
import { motion } from "motion/react";

const ContactMe = () => {

  const connect = [
    {name: "LinkedIn", src: Linkedin},
    {name: "Gmail", src: Gmail},
    {name: "GitHub", src: GitHub}
  ];  

  return (
    <section className='contact-me-container w-full'>
        <div className="flex flex-col px-28 w-full font-display items-center mb-10">
            <motion.h1 initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: {duration: 1}}} viewport={{once: true, amount: 0.5}} className='text-4xl my-15'>Contact <span className='font-bold bg-yellow-300 px-2 rounded-md'>Me</span></motion.h1>
            <div className="bottom-content flex justify-between items-center">
                <motion.div initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: {duration: 1}}} viewport={{once: true, amount: 0.3}} className="contact-me-form w-[40%]">
                    <form className='flex flex-col gap-5'>
                        <div className="your-name">
                            <input type="text" placeholder='Your name' className='h-12 w-full border-2 rounded-md px-5'/>
                        </div>
                        <div className="email">
                            <input type="email" placeholder='Email' className='h-12 w-full border-2 rounded-md px-5'/>
                        </div>
                        <div className="website">
                            <input type="text" placeholder='Your website (If exists)' className='h-12 w-full border-2 rounded-md px-5'/>
                        </div>
                        <div className="help">
                            <textarea placeholder='How can I help ?' className='h-40 w-full border-2 rounded-md px-5 py-2'/>
                        </div>
                        <div className="other-buttons flex gap-5 w-full">
                            <button className='w-1/2 bg-black py-3 rounded-md text-white cursor-pointer'>Get in Touch</button>
                            <div className="connect-boxes flex w-1/2 justify-evenly">
                                {connect.map((item,index) => (
                                    <div key={index} className="box h-15 w-15 border-2 flex justify-center items-center rounded-md cursor-pointer">
                                        <img src={item.src} alt={item.name} className='h-8'/>  
                                    </div>
                                ))}
                            </div>
                        </div>
                    </form>
                </motion.div>
                <motion.div initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: {duration: 1}}} viewport={{once: true, amount: 0.3}} className="contact-me-info w-1/2 flex flex-col items-center">
                    <div className="headings w-full flex flex-col gap-1">
                        <h1 className='text-6xl font-bold'>Let's <span className='new-outline'>talk</span> for</h1>
                        <h1 className='text-6xl font-bold'>Something special</h1>
                    </div>
                    <p className='text-lg text-gray-500 mt-8'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    <div className="other-contact-details w-full text-xl font-bold mt-8 flex flex-col gap-2">
                        <div className="my-email flex gap-3 items-center">
                            <img src={Gmail} alt="Gmail Image" className='h-5'/>
                            <h1>kushalrathod044@gmail.com</h1>
                        </div>
                        <div className="my-number flex gap-3 items-center">
                            <img src={Phone} alt="Phone Image" className='h-5'/>
                            <h1>+91 xxxxxxxxxx</h1>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default ContactMe