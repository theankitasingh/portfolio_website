import React from 'react'
import ProjectCardd from './ProjectCardd'
import { Link } from 'react-router-dom'
const Projjects = () => {
  return (
    <div className='pt-4' id='projects'>
      <div className='bg-gray-100 rounded-xl  text-gray-900 text-center py-16  mx-4  bg-opacity-100 md:px-16'>
      <img src='woman.png' alt='' className='mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
      <h1 className=' text-4xl font-bold  text-gray-900 '> 
        Projects 
      </h1>
      <br/>
      <br/>
      <div className='py-12 px-8 flex flex-wrap gap-5 justify-center'>
      <a href='https://github.com/theankitasingh/blog_writing_app_with_django' target='_blank'>
      <ProjectCardd title="BLOGGING SITE" main="Blogging site with django and python.You can create, delete, update and see blogs "/>
      </a>

      <a  href='https://github.com/theankitasingh/Credit-card-reports-with-Power-Bi' target='_blank'>
      <ProjectCardd title="Credit Card report" main=" Credit Card report with Power bi tool."/>
      </a>

      <a href='https://github.com/theankitasingh/sale_insights_with_tabelau' target='_blank'>
      <ProjectCardd title="Sales insights." main=" Sales insights with tableau."/>
      </a>

      <a href='https://github.com/theankitasingh/Staff_management_system_with_python' target='_blank'>
      <ProjectCardd title="Staff management system" main=" Staff management system with python and data visualization tools."/>
      </a>
      </div>
      <div className='mt-8 space-x-4'>
      <a href='/contact'>
        <button className='bg-gradient-to-r from-gray-400 to-gray-900 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full text-2xl'> Contact Me </button>
        </a>
        <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full text-2xl'> RESUME </button>
      </div>
    </div>
    </div>
  )
}

export default Projjects
