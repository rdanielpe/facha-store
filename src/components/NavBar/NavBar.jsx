import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <header className="items-center justify-between px-6 navbar">
        {/* <button className="menu">
          <div className="line-ab">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="menu__text">
            <span>Menú</span>
          </div>
        </button> */}
        <Link to={"/"}><img className="h-16" src="/img/logo.png" alt="logo" /></Link>

        <div className="flex gap-2">
          <nav>
            {/* <ul className="flex items-center gap-10 text-[20px]">
              <li>
                <a className="text-white hover:bg-[#25252599] hover:scale-105  py-7 px-4 " href="#">
                  Inicio
                </a>
              </li>
              <li>
                <a className="text-white hover:bg-[#252525ad] hover:scale-105  py-7 px-4" href="#">
                  Contacto
                </a>
              </li>
            </ul> */}
          </nav>
          <div className="user">
            <img src="/img/user.png" alt="" />
          </div>
          <CartWidget />
        </div>
      </header>
    </>
  );
};
export default NavBar;
