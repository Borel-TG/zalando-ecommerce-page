import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  label: string;
  active?: boolean;
};

function NavLink(props: Props) {
  const { label = "", active = false, url = "#" } = props;
  return (
    <Link
      href={url}
      className={`p-2 bg-white hover:bg-[#d8d8d8] transition-colors ease-out ${
        active ? "!text-white !bg-black" : ""
      }`}
    >
      <span className="font-bold text-md">{label}</span>
    </Link>
  );
}

export default NavLink;
