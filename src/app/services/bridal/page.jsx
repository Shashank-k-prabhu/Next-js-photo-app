import React from "react";
import Hero from "../../ui/Hero";
import Portfolio from "../../ui/Portfolio";
const links = [
  "https://images.unsplash.com/photo-1553915632-175f60dd8e36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZ3N8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3N8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmdzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlZGRpbmdzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1597861405049-0b011428568f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmdzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1674065309449-574be96378fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VkZGluZ3N8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdlZGRpbmdzfGVufDB8fDB8fHww",
];
const page = () => {
  return (
    <div>
      <Hero
        heading="Bridal"
        message="These are some of the work realted to Weddings."
        backImg={
          "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3N8ZW58MHx8MHx8fDA%3D"
        }
      />
      <Portfolio links={links} />
    </div>
  );
};

export default page;
