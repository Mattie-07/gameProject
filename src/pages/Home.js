import React from 'react'
import Header from '../components/layout/Header/Header'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Sidebar from '../components/layout/SideBar'
import HeroSection from '../components/HeroSection/'
import InfoSection from '../components/InfoSection/'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
            <HeroSection/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Services/>
      
    </>
  )
}

export default Home
