import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Projects from './components/Projects.jsx'
import Intro from './components/Intro.jsx'
import Technologies from './components/Technologies.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'


// const router= createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<Intro />}/>
//       <Route path='about' element={<About />}/>
//       <Route path='experience' element={<Experience />}/>
//       <Route path='projects' element={<Projects />}/>
//       <Route path='contact' element={<Contact />}/>
//       <Route path='technologies' element={<Technologies />}/>
      

      
//     </Route>
    
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}> */}
    <App />
    
    {/* </RouterProvider> */}
  </StrictMode>,
)
