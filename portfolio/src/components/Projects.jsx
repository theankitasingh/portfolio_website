import React from 'react'
import ProjectCard from './ProjectCard'
import { animate, motion } from 'framer-motion';
const Projects = () => {
  return (
    <div className='pb-4' id='projects'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl font-bold'>Projects</motion.h2>
        <div className='py-12 px-8 flex flex-wrap gap-5 justify-center'>
      <a href='https://github.com/theankitasingh/blog_writing_app_with_django' target='_blank'>
      <ProjectCard  title="BLOGGING SITE" main="Blogging site with django and python.You can create, delete, update and see blogs "/>
      </a>

      <a  href='https://github.com/theankitasingh/Credit-card-reports-with-Power-Bi' target='_blank'>
      <ProjectCard title="Credit Card report" main=" Credit Card report with Power bi tool."/>
      </a>

      <a href='https://github.com/theankitasingh/sale_insights_with_tabelau' target='_blank'>
      <ProjectCard title="Sales insights." main=" Sales insights with tableau."/>
      </a>

      <a href='https://github.com/theankitasingh/Staff_management_system_with_python' target='_blank'>
      <ProjectCard title="Staff management system" main=" Staff management system with python and data visualization tools."/>
      </a>
      </div> 
      
    </div>
  )
}

export default Projects
