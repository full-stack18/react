import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';


function App() {
  
  return (
    <>
      <Navbar />
      <main className="main-content">
        <AboutMe />
        <Projects />

      </main>
      <Footer />
    </>
  )
}

export default App


