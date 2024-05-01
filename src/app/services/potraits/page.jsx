import React from "react";
import Hero from "../../ui/Hero";
import Portfolio from "../../ui/Portfolio";
const links = [
  "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682096302447-5dfacd25cb70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1638727295415-286409421143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1524159730786-4e74a1b78d7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
];
const page = () => {
  return (
    <div>
      <Hero
        heading="Portraits"
        message="These are some of the work realted to Portraits."
        backImg={
          "https://images.unsplash.com/photo-1558730234-d8b2281b0d00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <Portfolio links={links} />
    </div>
  );
};

export default page;
