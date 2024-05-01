import React from "react";
import Hero from "../../ui/Hero";
import Portfolio from "../../ui/Portfolio";
const links = [
  "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxhbmltYWx8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1495366821225-0a3d30d20b5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxhbmltYWx8ZW58MHx8MHx8fDA%3D",
];
const page = () => {
  return (
    <div>
      <Hero
        heading="Animals"
        message="These are some of the work realted to Animals."
        backImg={
          "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <Portfolio links={links}/>
    </div>
  );
};

export default page;
