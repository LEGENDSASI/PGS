import Footer from '@/component/Footer'
import AboutUsSection from '@/component/pgsstays/About'
import Ourpartners from '@/component/pgsstays/Ourpartners'
import OurProperties from '@/component/pgsstays/OurProperties'
import Reviews from '@/component/pgsstays/Reviews'
import WhatWeProvideSection from '@/component/pgsstays/WeProvide'
import React, { useEffect } from 'react'

const PGSStays = () => {

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
      <Ourpartners/>
      <Reviews/>
    </div>
  )
}

export default PGSStays
