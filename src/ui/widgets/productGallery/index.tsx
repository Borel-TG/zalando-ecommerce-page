import React from "react";
import VerticalCarousel from "./verticalCarousel";
import Image, { StaticImageData } from "next/image";

interface Props {
  images: string[] | StaticImageData[];
  mainView: null | string | StaticImageData;
  tags?: string[];
}

export default function ProductGallery({ images, tags, mainView }: Props) {
  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="bg-white cursor-pointer">
      <div className="flex flex-row gap-4">
        <VerticalCarousel
          images={images}
          selectedImage={selectedImage}
          onSelectImage={setSelectedImage}
        />
        <div className="relative aspect-square overflow-hidden">
          <div className="w-[600px]">
            <Image
              src={mainView !== null ? mainView : images[selectedImage]}
              alt={"product-image"}
              style={{ objectFit: "cover" }}
              fill
              priority
            />
          </div>

          {/* tags */}
          {tags && (
            <div className="flex flex-col gap-1 pt-4">
              {tags.map((item, i) => (
                <div
                  key={i}
                  className="w-fit z-10 p-1 text-xs bg-white border text-black font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
