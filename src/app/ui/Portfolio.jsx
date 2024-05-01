import React from "react";
import Image from "next/image";

const Portfolio = (props) => {
  const {links} = props;
  const ImageLinks=links;
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        {ImageLinks!=undefined && ImageLinks.map((link, index) =>
          index === 0 ? (
            <div className="w-full h-full col-span-3 md:col-span-2 row-span-2">
              <div className="relative" style={{ height: "40%" }}>
                <Image
                  src={link}
                  alt="/"
                  layout="responsive"
                  width="677"
                  height="451"
                  id="main-image"
                />
              </div>
            </div>
          ) : (
            <div key={index} className="w-full h-full">
              <Image
                src={link}
                alt="/"
                width="260"
                height="230"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Portfolio;
