import React from 'react'
import Carousel from '../../Components/Carousel'
import Footer from '../../Components/Footer'

const HomePage = () => {
  return (
    <div className='bg-gray-800 flex-col flex-1'>
      <Carousel />
      <Footer />
    </div>
  )
}

export default HomePage