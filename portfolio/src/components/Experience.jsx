import React from 'react'
import { motion } from 'framer-motion'


const containerVariants={
    hidden:{opacity: 0 , x: -100},
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5,
            staggerChildern:0.5,
        }
    }
}

const childVarients={
    hidden:{opacity: 0 , x: -100},
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5
            
        }
    }

}
const Experience = () => {
  return (
    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='pt-4' id='experience'>
      <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='bg-orange-700 rounded-xl  text-white text-center py-16  mx-4  bg-opacity-100 md:px-16'>
      
      <motion.h1 variants={childVarients} className=' text-4xl font-bold  text-white '> 
        Experience 
      </motion.h1>
      <br/>
      <br/>
      <motion.h1 variants={childVarients} className=' text-2xl font-bold  text-white md:flex-row md:space-x-12 md:p-4'> 
        
       Intership
        <br/>
        <br/>
      <motion.span variants={childVarients} className='mt-4 text-lg text-vlack font-bold '> Team Leader - 2024 <motion.div variants={childVarients} className='font-normal ml-12'>
        E-gain Software Education, Agra.
        <ol type='1' className='mr-9'>
        <motion.li variants={childVarients} >
        1. Supervised and managed a team of 6 members (data analyst and web developers) to develop, and deploy scalable web applications.</motion.li>
        <motion.li variants={childVarients}>
      2.Managed project timelines, resources to ensure successful project delivery. </motion.li>
      <motion.li variants={childVarients}>
      3.Implemented robust testing, debugging, and deployment strategies to ensure high-quality deliverables.</motion.li>
      <motion.li variants={childVarients}>
      4.Mentored juniors in technologies of web-development and data analysis, frameworks, and best practices.</motion.li>
      <motion.li variants={childVarients}>
      5.Coordinated team meetings, workshops, and training sessions to promote knowledge sharing and growth.
      </motion.li>
      </ol>
        </motion.div></motion.span>
      
      
      <motion.p variants={childVarients}  className='mt-4 text-lg text-vlack font-bold'> Contact details </motion.p>
      
        <motion.div variants={childVarients} className='text-xl font-normal'> email- eduxgain@gmail.com <br/>
        Ph. - 9639091201 </motion.div>
      </motion.h1>
      
    </motion.div>
    </motion.div>
  )
}

export default Experience
