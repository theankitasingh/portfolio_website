import React from 'react'
import { SiNumpy } from "react-icons/si";
import { FaPython } from "react-icons/fa"; 
import { SiGeopandas } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { animate, motion } from 'framer-motion';

const iconVarients=(duration)=>({
  initial:{y: -10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType:"reverse",
    }
  }
  }
)


const Technologies = () => {
  return (
    <div className='pb-24' id='Techologies'>
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl font-bold'> Technologies</motion.h2>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}  className='flex flex-wrap items-center justify-center  gap-10'>
        <motion.div initial="initial" animate="animate" variants={iconVarients(2.5)} >
            <FaPython  className='text-7xl '/> Python
        </motion.div>
        
        <motion.div initial="initial" animate="animate" variants={iconVarients(3)} >
        <SiNumpy className='text-7xl' /> Numpy
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVarients(5)} >
        <SiGeopandas className='text-7xl' /> Pandas
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVarients(2)} >
        <FaHtml5  className='text-7xl' /> Html
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVarients(6)} >
        <FaCss3Alt  className='text-7xl' /> CSS
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVarients(4)} >
        <IoLogoJavascript  className='text-7xl' /> Javascript
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVarients(5.5)} >
        <RiReactjsLine  className='text-7xl' /> React Js
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVarients(3)} >
        <DiDjango  className='text-7xl' /> django
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVarients(4.5)} >
        <SiFlask  className='text-7xl' /> Flask
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVarients(2)} >
        <SiMongodb  className='text-7xl' /> Mongodb
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVarients(2.5)} >
        <SiMysql  className='text-7xl' /> MySQL
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVarients(5)} >
        <SiPowerbi  className='text-7xl' /> Powerbi
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVarients(4.5)} >
        <SiTableau  className='text-7xl' /> Tableau
        </motion.div>
       
      </motion.div>

      
      </div>
  )
}

export default Technologies
