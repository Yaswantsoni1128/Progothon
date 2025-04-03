import React from 'react'
import Review from '../../components/LandingPage/Review'
import AboutUsSection from '../../components/LandingPage/About'
import GrevionEnergyTrade from '../../components/LandingPage/GrevionEnergyTrade'
import LandingImage from '../../components/LandingPage/LandingImage'
import WhoWeAreComp from '../../components/LandingPage/WhoWeAreComp'
import FAQs from '../../components/LandingPage/FAQs'
import Comp3 from '../../components/LandingPage/Comp3'

const LandingPage = () => {
  return (
    <div>
      <GrevionEnergyTrade/>
      <LandingImage/>
      <AboutUsSection />
      <WhoWeAreComp/>
      <Comp3/>
      <FAQs/>
    </div>
  )
}

export default LandingPage