import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import icon from '../src/assets/icon.jpg'
import WhatsAppButton from './component/WhatsAppButton'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import PGSStays from './pages/PGSStays'
import PGSHolidays from './pages/PGSHolidays'
import PGSEvents from './pages/PGSEvents'
import ContactUs from './pages/ContactUs'
import Footer from './component/Footer'
import OurTeam from './component/OurTeam'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pgs-stays" element={<PGSStays />} />
          <Route path="/pgs-holidays" element={<PGSHolidays />} />
          <Route path="/pgs-events" element={<PGSEvents />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-team" element={<OurTeam />} />


        </Routes>
        <WhatsAppButton />
        <Footer/>
      </Router>
    </>
  )
}

export default App
