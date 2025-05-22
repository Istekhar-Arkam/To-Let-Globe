import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
 import App from './App'
import Home from "./Pages/Home"
import About from './Pages/About'   
import Contact from './Pages/Contact'
import Github from './Pages/Github'
import Layout from './Layout'


const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="github" element={<Github />} />
  </Route>
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} /> 
    </StrictMode>,
)
