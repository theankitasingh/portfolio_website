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

const About = () => {
  return (
    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='pt-4 rounded-3xl' id='about'>
        
      <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className=' bg-orange-700 rounded-xl  text-white text-center py-16  mx-4  bg-opacity-100 md:px-16'>
      
      <motion.h1 variants={childVarients} className=' text-4xl font-bold  text-white '> 
        About me 
      </motion.h1>
      <br/>
      <br/>
      <motion.h1 variants={childVarients} className=' text-2xl font-bold  text-white md:flex-row md:space-x-12'> 
        
       Educational Degree 
        <br/>
        <br/>
      <motion.span variants={childVarients} className='mt-4 text-lg text-vlack font-bold'> Master of Computer Applications  <motion.div variants={childVarients} className='font-normal ml-14'> July,2025(Expected Completion)</motion.div></motion.span>
      
      
      <motion.p variants={childVarients} className='mt-4 text-lg text-vlack font-bold'> Bachelor of Business Administration</motion.p>
      
      </motion.h1>
      <br/>
      <br/>
      
      <motion.h1 variants={childVarients} className=' text-2xl font-bold  text-white '> 
        Languages -
        <motion.span variants={childVarients} className='text-xl font-normal'> English , Hindi </motion.span>
      </motion.h1>
      <br/>
      <br/>
      <motion.h1 variants={childVarients} className=' text-2xl font-bold  text-white '> 
        Courses -
        <motion.span variants={childVarients} className='text-xl font-normal'> Data Analyst 
            <br/>
            
        </motion.span>
      </motion.h1>
      <br/>
      <br/>
      <motion.h1 variants={childVarients} className=' text-2xl font-bold  text-white '> 
        Project Certificates -
        <motion.span variants={childVarients} className='text-xl font-normal'>  1. Stock Management System (Python, MySQL) 
            <br/>
            
            <br/>
        </motion.span>
        <motion.span variants={childVarients} className='text-xl font-normal ml-14'> 2. Blog Project (Django, Python)  <br/>  
            
            <br/>
        </motion.span>
      </motion.h1>

      
        
      </motion.div>
      
    </motion.div>
    
  )
}

export default About
