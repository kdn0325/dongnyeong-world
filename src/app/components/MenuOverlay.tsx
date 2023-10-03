import React from "react";
import NavLink from "./NavLink";
import { INavigationLinks } from "../Interface";

const MenuOverlay = ({ navLinks }: any) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {navLinks.map((link: INavigationLinks, index: number) => (
        <li key={index}>
          <NavLink path={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
