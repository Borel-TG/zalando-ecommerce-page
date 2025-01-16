import React from "react";
import BarLink from "./index";

type Props = {
  links: {
    url: string;
    label: string;
    active?: boolean;
  }[];
};

function NavList(props: Props) {
  const { links } = props;
  return (
    <div className="flex items-center gap-2">
      {links.map((item, i) => (
        <BarLink
          url={item.url}
          label={item.label}
          active={item.active}
          key={i}
        />
      ))}
    </div>
  );
}

export default NavList;
