import React from "react";
import Link from "next/link";

interface Props {
  icon?: React.ReactNode;
  label: string;
  url: string;
  color?: string;
}

function NavLink(props: Props) {
  const { icon, label = "", url = "#", color = "text-black" } = props;

  return (
    <div className="relative">
      <Link
        href={url}
        className={`flex flex-row items-center gap-3 ${color} hover:underline decoration-2 underline-offset-2`}
      >
        {icon ? icon : null}
        <span>{label}</span>
      </Link>
    </div>
  );
}

export default NavLink;
