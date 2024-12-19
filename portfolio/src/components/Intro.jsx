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

const Intro = () => {
  return (
  <>
    <div className='flex flex-shrink-0 items-center  flex-wrap justify-between md:items-center'>
            <a href="/" aria-label='Home'>
            <img  src='portfolio-high-resolution-logo-transparent.png' className='mx-2' width={200} height={160} alt='Logo'/>
            </a>
        </div>
    <div className='pb-4 lg:mb-36' id='intro' >
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:p-8'>
                <motion.img src='woman.png ' alt='Ankita Singh' className='border border-stone-900 rounded-full'  initial={{x: 100,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.5}} />
            </div>
            </div>
            <div className='w-full lg:w-1/2'>
             
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className='flex flex-col items-center lg:items-start mt-10'>
                <motion.h2
                variants={childVarients}
                className='pb-2 text-4xl tracking-tighter lg:text-8xl '>Ankita Singh </motion.h2>
                <motion.span variants={childVarients} className='bg-gradient-to-r from-orange-300 to-orange-800 bg-clip-text text-3xl tracking-tight text-transparent'>Data Analyst with Front-end Web Developer</motion.span>
                <motion.p variants={childVarients} className='my-2 max-w-lg py-6 text-xl leading-relaxed'>I’m a data enthusiast and Front-end developer with a versatile skill set spanning Excel, Power BI, Tableau, and Google Analytics for data analysis and reporting, along with MySQL and MongoDB for efficient database management. I’m proficient in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React for building dynamic, responsive web applications. On the back-end, I leverage Python, Django, and Flask to develop robust, scalable solutions. With a keen interest in Machine Learning and Data Visualization, I’m passionate about turning complex data into actionable insights.</motion.p>
                <motion.a variants={childVarients} href='/AnkitaSinghResume.pdf' target='_blank' rel='noopener noreferrer' download className='bg-orange-950 rounded-full p-4  text-white mb-10'>Download Resume</motion.a>
                </motion.div>
            
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Intro
