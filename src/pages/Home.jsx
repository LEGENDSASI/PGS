import AboutUs from '@/component/AboutUS'
import Certificates from '@/component/Certificates'
import Footer from '@/component/Footer'
import Hero from '@/component/Hero'
import Navbar from '@/component/Navbar'
import OurProperties from '@/component/OurProperties'
import OurServices from '@/component/OurServices'
import OurTeam from '@/component/OurTeam'
import Reviews from '@/component/Review'

import React, { useEffect } from 'react'

const Home = () => {

     useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      })
    }, [])
  

  return (
    <div className='overflow-x-hidden'>
    
      <Hero/>
      <AboutUs/>
      <OurProperties/>
      {/* <OurServices/> */}
      <Certificates/>
      {/* <OurTeam/> */}
      <Reviews/>
    </div>
  )
}

export default Home
