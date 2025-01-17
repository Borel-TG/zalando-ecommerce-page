import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: string | StaticImageData;
  selected: boolean;
  alt: string;
  height: number;
  width: number;
  onClick?: () => void; // Callback to handle image selection
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ProductImage: React.FC<Props> = ({
  image,
  selected,
  height,
  width,
  alt,
  onClick = null,
  onMouseEnter = null,
  onMouseLeave = null,
}) => {
  return (
    <>
      <button
        className={`relative mx-auto ${selected ? "ring-1 ring-black" : ""}`}
        onMouseLeave={onMouseLeave ? onMouseLeave : undefined}
        onMouseEnter={onMouseEnter ? onMouseEnter : undefined}
        onClick={onClick ? onClick : undefined}
      >
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          style={{ objectFit: "cover" }}
        />
      </button>
    </>
  );
};

export default ProductImage;
