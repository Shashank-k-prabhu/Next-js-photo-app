import React from 'react'
import Hero from '../ui/Hero'
import Portfolio from '../ui/Portfolio';
const page = () => {
  return (
    <div>
      <Hero
        heading="Services and Work"
        message="These are some of the work we have done for our clients."
      />
      <Portfolio/>
    </div>
  );
}

export default page
