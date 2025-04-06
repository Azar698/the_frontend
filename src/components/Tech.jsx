import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <Tilt
          key={technology.name}
          className='w-24 h-24'
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <motion.div 
            variants={fadeIn("left", "spring", 0.2 * index, 0.55)} 
            className='w-full h-full bg-tertiary rounded-full flex justify-center items-center'
          >
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className='w-3/4 h-3/4 object-contain m-auto'
            />
          </motion.div>
        </Tilt>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")
