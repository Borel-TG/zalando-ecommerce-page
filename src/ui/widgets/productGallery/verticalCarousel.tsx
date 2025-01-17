import React, { useRef, useState, useEffect } from "react";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { StaticImageData } from "next/image";
import ProductImage from "@/ui/components/product/image";

interface VerticalCarouselProps {
  images: string[] | StaticImageData[]; // List of image URLs
  selectedImage: number; // Index of the currently selected image
  onSelectImage: (index: number) => void; // Callback to handle image selection
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  images,
  selectedImage,
  onSelectImage,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showUpButton, setShowUpButton] = useState(false);
  const [showDownButton, setShowDownButton] = useState(false);

  // Scroll up function
  const scrollUp = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: -200, // Scroll up by 200px
        behavior: "smooth",
      });
    }
  };

  // Scroll down function
  const scrollDown = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 200, // Scroll down by 200px
        behavior: "smooth",
      });
    }
  };

  // Check scroll position to show/hide buttons
  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const scrollTop = carouselRef.current.scrollTop;
      const scrollHeight = carouselRef.current.scrollHeight;
      const clientHeight = carouselRef.current.clientHeight;

      // Show the up button only if not at the bottom
      setShowUpButton(scrollTop + clientHeight < scrollHeight);

      // Show the down button only if not at the top
      setShowDownButton(scrollTop > 0);
    }
  };

  // Listen scroll event
  useEffect(() => {
    checkScrollPosition();
    const container = carouselRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
    }
    return () => {
      if (container) {
        // clear event listener
        container.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, [images.length]); // Re-run when ever image changes

  return (
    <div className="relative border border-red-400">
      {/* Up Button */}
      {showDownButton && (
        <Button
          icon={<UpOutlined />}
          className="!absolute !rounded-none -top-0 left-1/2 transform -translate-x-1/2 z-10"
          onClick={scrollUp}
        />
      )}

      {/* Scrollable Container */}
      <div
        className="z-0  relative flex flex-col h-[600px] space-y-4 scrollbar-hide overflow-auto"
        ref={carouselRef}
      >
        {/* images */}
        {images.map((image, index) => (
          <ProductImage
            key={index}
            image={image}
            onMouseEnter={() => onSelectImage(index)}
            selected={selectedImage === index}
            alt={`item-${index}`}
            width={80}
            height={120}
          />
        ))}
      </div>

      {/* Down Button */}
      {showUpButton && (
        <Button
          icon={<DownOutlined />}
          className="!absolute !rounded-none bottom-0 left-1/2 transform -translate-x-1/2 z-40"
          onClick={scrollDown}
        />
      )}
    </div>
  );
};

export default VerticalCarousel;
