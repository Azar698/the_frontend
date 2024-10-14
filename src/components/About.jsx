import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({title,index,icon}) => {
   return(
  <Tilt className='xs:w-[250px]  w-full'>
     <motion.div variants={fadeIn("right","spring",0.5*index)} className='green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] sm-w-[80px]  flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-[1o0px] h-[100px] sm:w-[80px] sm:h-[80px] object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
     </motion.div>

  </Tilt>
   )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' varianta={fadeIn("","",0.1,1)}>
        Im a front-end developer who builds clean, responsive websites using React, JavaScript, HTML, and CSS. My focus is on creating great user experiences, with fast and mobile-friendly designs that work well on any device. Im passionate about turning ideas into engaging and visually appealing websites. Lets bring your vision to life!
        </motion.p>
        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service,index)=>(
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(About,"about")