import React from 'react'
import HeroHeading from './HeroHeading'
import HeroImage from './HeroImage'
import HeroCards from './HeroCards'

function HeroSection() {
  return (
    <div className='mx-60 mt-36'>
        <HeroHeading />
        <HeroImage />
        <HeroCards />
    </div>
    
  )
}

export default HeroSection