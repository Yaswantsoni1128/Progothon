import React from 'react'
import SpocProfileHeroSection from '../../components/spocComponets/SpocProfileHeroSection'
import SpocPersonalInfo from '../../components/spocComponets/SpocPersonalInfo'
import ParaliInfo from '../../components/spocComponets/ParaliInfo'

function SpocProfilePage() {
  return (
    <>
      <SpocProfileHeroSection/>
      <div className="flex flex-col lg:flex-row justify-center items-center md:items-start gap-4">
        <ParaliInfo/>
        <SpocPersonalInfo/>
      </div>
    </>
  )
}

export default SpocProfilePage