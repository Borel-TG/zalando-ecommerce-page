"use client";
import React, { useRef } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface Props {
  children: React.ReactNode;
}

export default function ProductCarousel(props: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <Button
        icon={<LeftOutlined />}
        className="absolute left-2 !rounded-none border !border-black top-[150px] transform -translate-y-1/2 z-10"
        onClick={scrollLeft}
      />
      <Button
        icon={<RightOutlined />}
        className="absolute !rounded-none border !border-black top-[150px] left-[calc(100%-70px)] md:left-[calc(100%-70px)]  transform -translate-y-1/2 z-10"
        onClick={scrollRight}
      />
      <div
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
        ref={carouselRef}
      >
        {props.children}
      </div>
    </div>
  );
}
