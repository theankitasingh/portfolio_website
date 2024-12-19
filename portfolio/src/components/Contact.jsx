import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'


const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20 justify-items-center' id='contact'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <ul className='text-sm md:text-xl justify-items-center '>
        <li className='flex gap-3 font-bold  ' ><MdOutlineEmail size={40}/> ankitasingh07040@gmail.com</li>
        <br/>
        <a href='https://www.linkedin.com/in/the-ankita-singh-/' 
            target='_blank' 
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
        <li className='flex  gap-3 font-bold '><CiLinkedin size={40}/>  linkedin.com/in/the-ankita-singh-/ </li></a>
        <br/>
        <a href='https://github.com/theankitasingh' 
            target='_blank' 
            rel='noopener noreferrer'
            aria-label='GitHub'>
        <li className='flex gap-3 font-bold '><FaGithub size={40}/> github.com/theankitasingh</li></a>
        <br/>
        
      </ul>
    </div>
  )
}

export default Contact


                

                
                