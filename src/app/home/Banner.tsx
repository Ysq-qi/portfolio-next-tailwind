"use client";

import * as React from "react";
import Image from "next/image";
import { Carousel, CarouselItem } from "@/components/ui/data-display/carousel";

// 橫幅區塊
const Banner: React.FC = () => {
  const bannerImages = [
    "/images/carousel001.jpg",
    "/images/carousel002.jpg",
    "/images/carousel003.jpg",
    "/images/carousel004.jpg",
    "/images/carousel005.jpg",
  ];

  return (
    <>
      {/* 手機版 */}
      <section className="sm:hidden w-full h-[200px]">
        <Carousel
          arrowDesign="roundWhite"
          showDots
          autoPlay
          className="w-full h-full"
        >
          {bannerImages.map((src, index) => (
            <CarouselItem key={index} className="w-full h-full relative">
              <Image
                src={src}
                alt={`Carousel Image ${index + 1}`}
                width={500}
                height={200}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </Carousel>
      </section>

      {/* 桌機版 */}
      <section className="hidden sm:flex w-screen overflow-hidden mt-5">
        <Carousel
          arrowDesign="roundWhite"
          showDots
          autoPlay
          className="w-full h-full"
        >
          {bannerImages.map((src, index) => (
            <CarouselItem key={index}>
              <Image
                src={src}
                alt={`Carousel Image ${index + 1}`}
                width={1200}
                height={400}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
