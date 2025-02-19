"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselItem } from "@/components/ui/data-display/carousel";

// 橫幅區塊
const Banner: React.FC = () => {
  const bannerImages = [
    { src: "/images/carousel/carousel001.jpg", link: "/activity/sale1" },
    { src: "/images/carousel/carousel002.jpg", link: "/activity/sale2" },
    { src: "/images/carousel/carousel003.jpg", link: "/activity/sale3" },
    { src: "/images/carousel/carousel004.jpg", link: "/activity/sale4" },
    { src: "/images/carousel/carousel005.jpg", link: "/activity/sale5" },
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
          {bannerImages.map((item, index) => (
            <CarouselItem key={index} className="w-full h-full relative">
              <Link href={item.link}>
                <Image
                  src={item.src}
                  alt={`Carousel Image ${index + 1}`}
                  width={500}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </Link>
            </CarouselItem>
          ))}
        </Carousel>
      </section>

      {/* 桌機版 */}
      <section className="hidden sm:flex w-screen overflow-hidden my-4">
        <Carousel
          arrowDesign="roundWhite"
          showDots
          autoPlay
          className="w-full h-full"
        >
          {bannerImages.map((item, index) => (
            <CarouselItem key={index}>
              <Link href={item.link}>
                <Image
                  src={item.src}
                  alt={`Carousel Image ${index + 1}`}
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </Link>
            </CarouselItem>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
