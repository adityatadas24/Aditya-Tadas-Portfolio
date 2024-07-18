import React from 'react'
import About from './components/About/About'
import "./App.css"
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Portfolio from './MyPortfolio/Portfolio'
// import Navbar from './Navbar'


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Portfolio/>
         
    </div>
  )
}

export default App
