"use client";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import Image from "next/image";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-3xl font-bold text-center p-4 ">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowAltCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[40px] text-white/90 z-[2] cursor-pointer"
                size={50}
              />

              {index === current && (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width="1440"
                  height="720"
                  objectFit="cover"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 0 10px #000",
                    height: "660px",
                  }}
                />
              )}

              <FaArrowAltCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[40px] text-white/90 z-[2] cursor-pointer"
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
