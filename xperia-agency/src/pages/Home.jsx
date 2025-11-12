import React from 'react'
import Carousel from '../components/Carrousel'
import About from '../components/About'
import InfoServices from '../components/InfoServices'
import Brands from '../components/Brands'

function Home() {
  return (
    <div className='relative'>
        {/* hero section */}
        <div className='mt-20'>
            <Carousel />
        </div>

        {/* about section */}
        <div className='mt-5'>
            <About />
        </div>

        <div className='mt-10'>
            <InfoServices />
        </div>

        <div className='mt-10'>
          <Brands />
        </div>
    </div>
  )
}

export default Home