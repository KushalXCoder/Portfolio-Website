import React from 'react';
import ExperienceBox from './ExperienceBox.jsx';
import { motion } from "motion/react";
import ACM from "/ACM.png";
import Volunteer from "/volunteer.png";

const Experience = () => {
    
  const details = [
    {logo: ACM, title: "Web Dev and Investigation Team - ACM AU", text: "Developing and designing the frontend for ACM AU’s official website as part of the Web Development and Investigation team, contributing to its structure and user experience. Participated as a volunteer from ACM in the GRAINS 2024, conference held at AU and hosted by ACM AU in October 2024. Additionally, conducted a basic web development workshop for ACM members, helping them understand fundamental web technologies.",
    date: "Oct 2024 - Present"},
    {logo: Volunteer, title: "Volunteer at Gyan Prakash", text: "Volunteered at Gyan Prakash NGO in Ahmedabad for a month, teaching Maths and English to students from grades 1 to 8, who come from economically weaker backgrounds. Focused on making learning interactive and engaging by incorporating activities and games. Conducted two informative sessions on environmental protection and pollution, raising awareness among students about sustainability. Also organized playful learning sessions to enhance their understanding of concepts in a fun and effective way.",
    date: "Jun 2024 - Jul 2024"},
  ];

  return (
    <section className='section-container w-full bg-black py-20 max-sm:py-12 max-lg:py-15'>
        <div className="flex flex-col w-full items-center font-display">
            <motion.h1 initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1, transition: {duration: 1}}} viewport={{once: true, amount: 0.5}} className='text-white text-4xl mb-10'>My <span className='bg-yellow-300 rounded-md px-2 font-bold'>Experience</span></motion.h1>
            <div className="experience-boxes w-full flex flex-col items-center gap-15 mt-5 max-sm:px-5">
                {details.map((item, index) => (
                    <ExperienceBox key={index} logo={item.logo} title={item.title} text={item.text} date={item.date}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Experience