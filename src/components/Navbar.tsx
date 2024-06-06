import Image from "next/image";
import Link from "next/link";

import Cart from "./Cart";
import Search from "./Search";
import UserIcon from "./UserIcon";

import logo from "@/assets/images/logo.png";

const Navbar = () => {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="h-20 flex justify-between items-center px-16 text-lg">
      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="App logo" height="40" width="40" />
        <span className="text-4xl font-bold">Fashion</span>
      </Link>

      <ul className="navLinks flex items-center gap-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Search />
        <Cart />
        <UserIcon />
      </div>
    </nav>
  );
};

export default Navbar;
