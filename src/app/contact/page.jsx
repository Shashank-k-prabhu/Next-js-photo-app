import React from 'react'
import Hero from '../ui/Hero'
import Contact from '../ui/Contact'

const page = () => {
  return (
    <div>
      <Hero heading={'Contact'} message={'Submit the form below for more work and quotes'}/>
      <Contact/>
    </div>
  )
}

export default page
