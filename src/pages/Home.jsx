import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default Home