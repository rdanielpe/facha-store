import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative z-50 flex flex-wrap items-center justify-between p-4 bg-[#03465E] lg:sticky">
        <div className="z-auto block cursor-pointer md:hidden">
          <button
            onClick={() => setOpen(!open)}
            id="button"
            className="flex items-center px-3 py-2 text-white border-white rounded hover:border "
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <li className="ml-8 text-xl text-left text-white normal-case list-none">
            <Link to={"/"}>
              <img className="h-16" src="/img/logo.png" alt="logo" />
            </Link>
          </li>
        </div>

        <div
          id="menu"
          className={`w-full left-0 bg-z-dark-blue z-10 absolute md:static flex-grow block md:flex md:items-center md:w-auto transition-all duration-500 ease-in ${
            open
              ? "top-[96px] opacity-100"
              : "top-[-490px] md:top-0 md:opacity-100 opacity-0"
          }`}
        >
          <li className="block px-3 py-2 text-base font-medium text-center text-white rounded-md btn-ghost hover:text-white">
            <Link to="/category/maui">M A U I</Link>
          </li>
          <li className="block px-3 py-2 text-base font-medium text-center text-white rounded-md btn-ghost hover:text-white">
            <Link to="/category/billabong">BILLABONG</Link>
          </li>
          <li className="block px-3 py-2 text-base font-medium text-center text-white rounded-md btn-ghost hover:text-white">
            <Link to="/category/ripcurl">RIP CURL</Link>
          </li>
          <li className="block px-3 py-2 text-base font-medium text-center text-white rounded-md btn-ghost hover:text-white">
            <Link to="/all">ALL</Link>
          </li>
        </div>
        <div className="inline-block px-4 py-2 text-sm leading-none text-white rounded hover:border-transparent lg:mt-0">
          <CartWidget />
        </div>
        <div></div>
      </div>
    </>
  );
};
export default NavBar;
