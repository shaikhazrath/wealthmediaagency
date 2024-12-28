'use client'
import AboutSection from '@/components/AboutSection'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import OurServices from '@/components/OurServices'
import OurWork from '@/components/OurWork'
import PosterGallery from '@/components/PosterGallery'
import TestimonialCount from '@/components/TestimonialCount '
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TestimonialCount />
      <PosterGallery/>
      <OurServices />
      <OurWork />
    
    </div>
  )
}

export default page