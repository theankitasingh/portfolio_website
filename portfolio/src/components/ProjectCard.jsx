import React from 'react'
import { animate, motion } from 'framer-motion';

const ProjectCard = ({title,main}) => {
  return (
    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}  className='p-3  md:p-6 flex flex-col w-80 bg-orange-200 shadow-xl shadow-slate-400 rounded-2xl duration-300 hover:scale-105 font-semibold m-10 '>
        <motion.img whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='rounded-xl' src='projectlogo.png'></motion.img>
        <br/>
    <motion.h3 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='px-4 text-xl md:text-2xl font-bold leading-normal text-center'>{title}</motion.h3>
    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='px-4 text-sm md:text-md leading-tight py-2 text-center'>{main}</motion.p>
    <motion.div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4 justify-center '>
    
        <motion.button whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='md:mt-10 text-white  py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-200 duration-300 hover:scale-105 font-semibold rounded-3xl bg-slate-950 '> Source code  </motion.button>
        
        
    </motion.div>
    </motion.div>
  )
}

export default ProjectCard