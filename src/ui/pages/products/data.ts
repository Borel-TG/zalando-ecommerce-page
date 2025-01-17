import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img11 from "./assets/img11.png";
import img22 from "./assets/img22.png";
import img33 from "./assets/img33.png";
import img44 from "./assets/img44.png";
import img55 from "./assets/img55.png";
import img66 from "./assets/img66.png";

const productData = [
  {
    id: "product-12345",
    seller: "ASICS SportStyle",
    name: "JOG 100S UNISEX - Baskets basses",
    price: 129.99,
    originalPrice: 149.99,
    includedTax: true,
    currency: "£",

    sizes: ["ONE SIZE"],
    available: true,
    description:
      "Elegant and timeless, this watch features a minimalist design with premium materials.",
    details: [
      "Case Material: Stainless Steel",
      "Band Material: Stainless Steel",
      "Water Resistance: 3 ATM",
      "Movement: Quartz",
      "Case Diameter: 33mm",
    ],
    categories: ["Clothing", "T-Shirts", "Unisex"],
    tags: ["casual", "summer", "unisex"],
    variants: [
      {
        id: "variant-1",
        color: "oatmeal",
        hexCode: "#FF0000",
        stock: 50,
        size: ["S", "M", "L", "XL"],
        images: [
          {
            url: img1,
            alt: "Sneaker - Front View",
          },
          {
            url: img2,
            alt: "Sneaker - 3/4 View",
          },
          {
            url: img3,
            alt: "Sneaker - Back View",
          },
          {
            url: img4,
            alt: "Sneaker - Top View",
          },
          {
            url: img5,
            alt: "Sneaker - Bottom View",
          },
          {
            url: img6,
            alt: "Sneaker - Side View",
          },
          {
            url: img1,
            alt: "Sneaker - Front View",
          },
        ],
      },
      {
        id: "variant-2",
        color: "pure silver",
        hexCode: "#0000FF",
        stock: 30,
        size: ["M", "L", "XL"],
        images: [
          {
            url: img11,
            alt: "Sneaker - Front View",
          },
          {
            url: img22,
            alt: "Sneaker - 3/4 View",
          },
          {
            url: img33,
            alt: "Sneaker - Back View",
          },
          {
            url: img44,
            alt: "Sneaker - Top View",
          },
          {
            url: img55,
            alt: "Sneaker - Bottom View",
          },
          {
            url: img66,
            alt: "Sneaker - Side View",
          },
          {
            url: img11,
            alt: "Sneaker - Front View",
          },
        ],
      },
    ],
  },
];

export default productData;
