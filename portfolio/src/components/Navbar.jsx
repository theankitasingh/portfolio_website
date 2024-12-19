import React from 'react'
import { animate, motion } from 'framer-motion';
import { useState } from 'react'
import { RiCloseLine,RiMenu2Line} from "react-icons/ri";
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState(false)
  const [showmenu, setShowmenu] = useState(true)

  return (
    <nav className='flex items-center justify-between py-6 '>
        
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <ul className={`${menu? "block bg-transparent place-items-baseline  " : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-gray-300 px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 `}>
            
                
      <a href='#intro'>
        <li className='transition-all duration-300 p-1 md:p-0 hover:text-blue-600 text-2xl'>Home</li>
        </a>
       <a href ='#about'>
        <li className='text-2xl transition-all duration-300 p-1 md:p-0 hover:text-blue-600 '>About Me</li>
        </a>
        <a href ='#experience'>
        <li className='text-2xl transition-all duration-300 p-1 md:p-0 hover:text-blue-600'>Experience</li>
        </a>
        <a href='#projects'>
        <li className='text-2xl transition-all duration-300 p-1 md:p-0 hover:text-blue-600'>Projects</li>
        </a>
        {/* <a href='#technologies'>
        <li className='text-2xl transition-all duration-300 p-1 md:p-0 hover:text-blue-600'>Technologies</li>
        </a> */}
        <a href='#contact'>
        <li className='text-2xl transition-all duration-300 p-1 md:p-0 hover:text-blue-600'>Contact Me</li>
        </a>
        
        
      </ul>
      {showmenu ? (
        <RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300 " onClick={()=>{setMenu(!menu); setShowmenu(!showmenu);}}  / >
      ):( <RiCloseLine  size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300 " onClick={()=>{setMenu(!menu); setShowmenu(!showmenu);}} />)}
        </div>
    </nav>
  )
}

export default Navbar




  
