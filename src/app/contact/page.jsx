import React from 'react'
import Hero from '../ui/Hero'
import Contact from '../ui/Contact'

const page = () => {
  return (
    <div>
      <Hero
        heading={"Contact"}
        message={"Submit the form below for more work and quotes"}
        backImg={
          "https://images.unsplash.com/photo-1483104879057-379b6c2fe5a2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <Contact />
    </div>
  );
}

export default page
