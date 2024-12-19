import { useState } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Technologies from './components/Technologies'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Outlet } from 'react-router-dom'
import Projjects from './components/Projectss/Projjects'


function App() {
  

  return (
    <>
      <div className='overflow-x-hidden text-pink-950 antialiased'>
        <div className='fixed inset-0 -z-10'>
          <div className='relative h-full w-full bg-orange-100'>
            <div className="absolute  z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>

          </div>
        </div>
        <div className='container mx-auto px-0'>
          
          <Navbar/>
          
          
          <Intro/>
          <About/>
          <Technologies/>
          <Projects/>
          <Experience/>
          <Contact/>
        </div>
      </div>
    </>
  )
}

export default App
