import { useState } from 'react'
import './App.css'

import Navbar from './pages/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Hero from './pages/Hero'
import Ingregients from './pages/Ingregients'
import Main from './pages/Main'
import MainDish from './pages/MainDish'
import Offer from './pages/Offer'



function App() {
  

  return (
    <section className="bg-bgone h-screen overflow-x-hidden text-second font-serif ">
      <Navbar/>
      <Hero/>
      <About/>
      <MainDish/>
      <Offer/>
      <Main/>
      <Ingregients/>
     
      
      <Contact/>
      <Footer/>
    </section>
     
    
  )
}

export default App
