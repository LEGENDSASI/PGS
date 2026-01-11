import Footer from '@/component/Footer'
import AboutUsSection from '@/component/pgsevents/About'
import OurProperties from '@/component/pgsevents/OurProperties'
import Reviews from '@/component/pgsevents/Review'
import WhatWeProvideSection from '@/component/pgsevents/WeProvide'
import React, { useEffect } from 'react'

const PGSEvents = () => {

     useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      })
    }, [])
  

  return (
    <div>
      <AboutUsSection/>
      <OurProperties/>
      <WhatWeProvideSection/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default PGSEvents
