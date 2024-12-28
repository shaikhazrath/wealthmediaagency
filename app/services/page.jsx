'use client'
import Navbar from '@/components/navbar'
import OurServices from '@/components/OurServices'
import OurWork from '@/components/OurWork'
import PosterGallery from '@/components/PosterGallery'
import React from 'react'

const page = () => {
  return (
   <div>
    <Navbar/>
    <OurServices/>
    <OurWork/>
   </div>
  )
}

export default page