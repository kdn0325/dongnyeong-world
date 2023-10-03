import Link from "next/link";
import { INavigationLinks } from "../Interface";

const NavLink = ({ path, title }: INavigationLinks) => {
  return (
    <Link
      href={path}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
