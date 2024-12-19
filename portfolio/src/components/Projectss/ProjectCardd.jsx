import React from 'react'

const ProjectCardd = ({title,main}) => {
  return (
    <div className='p-3  md:p-6 flex flex-col w-80 bg-white shadow-xl shadow-slate-400 rounded-2xl duration-300 hover:scale-105 font-semibold m-10 '>
        <img className='rounded-xl' src='projectlogo.png'></img>
    <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>{title}</h3>
    <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
    <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4 justify-center'>
    
        <button className='md:mt-10 text-white  py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-200 duration-300 hover:scale-105 font-semibold rounded-3xl bg-slate-950 '> Source code  </button>
        
        
    </div>
    </div>
  )
}

export default ProjectCardd
