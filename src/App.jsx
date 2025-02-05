import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div>
       <ToastContainer /> 
        <Navbar />
        <div style={{ marginTop: "80px" }}> {/* Prevents content overlap */}
        <Hero />
        <About />
        <Services />
        <Mywork />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
