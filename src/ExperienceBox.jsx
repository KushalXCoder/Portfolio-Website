const ExperienceBox = ({logo, title, text, date}) => {
  return (
    <motion.div
        initial={{x: -50, opacity: 0}}
        whileInView={{x: 0, opacity: 1, transition: {duration: 0.5, ease: "easeIn"}}}
        viewport={{once: true, amount: 0.4}}
        className="experience-box w-5/6 border text-white px-5 py-4 flex flex-col gap-5 rounded-md hover:bg-[#27272A] transition-all cursor-pointer max-sm:w-full"
    >
        <div className="top-section w-full flex lg:justify-between lg:items-center max-sm:flex-col max-sm:gap-3 max-lg:flex-col max-lg:gap-2">
            <div className="top-section-left flex gap-3 items-center">
                <img src={logo} alt={`${logo} Image`} className='h-10'/>
                <h1 className='text-xl font-bold max-sm:text-[16px] max-sm:w-full max-lg:w-full'>{title}</h1>
            </div>
            <div className="top-section-right max-sm:px-3 max-lg:px-3">
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