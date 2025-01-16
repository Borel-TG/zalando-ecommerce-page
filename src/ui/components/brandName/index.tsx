import React from "react";
import Image from "next/image";
import logo from "./zalando.png";

function BrandName() {
  return (
    <div className="h-[50px] overflow-hidden flex items-center justify-center">
      <Image src={logo} className="h-15 w-[150px]" alt="app-logo" />
    </div>
  );
}

export default BrandName;
