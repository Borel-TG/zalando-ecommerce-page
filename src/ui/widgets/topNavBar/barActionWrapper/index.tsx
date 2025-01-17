import React from "react";

interface Props {
  icon: React.ReactNode;
  children?: React.ReactNode;
}

function BarAction({ icon, children }: Props) {
  return (
    <div className={`relative group cursor-pointer`}>
      {/* action icon */}
      <div
        className={`
          p-2 z-40 relative border-2 border-white 
          ${children ? "group-hover:border-black" : ""}
          !border-b-green-white
          after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:right-0
          after:h-[5px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100
         
        `}
      >
        {icon}
      </div>
      {/* children drop-down */}
      {children && (
        <div className="z-30 h-fit bg-white border-2 border-black min-w-[300px] absolute top-full bottom-0 right-0 group-hover:block hidden">
          {children}
        </div>
      )}
    </div>
  );
}

export default BarAction;
