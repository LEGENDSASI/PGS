import Footer from '@/component/Footer'
import AboutUsSection from '@/component/pgsholidays/About'
import OurPartners from '@/component/pgsholidays/OurPartners'
import OurProperties from '@/component/pgsholidays/OurProperties'
import Reviews from '@/component/pgsholidays/Review'
import WhatWeProvideSection from '@/component/pgsholidays/WeProvide'
import React, { useEffect } from 'react'

const PGSHolidays = () => {

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
      <OurPartners/>
      <Reviews/>
    </div>
  )
}

export default PGSHolidays
