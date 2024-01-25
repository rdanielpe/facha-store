import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <button className="menu">
          <div className="line-ab">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="menu__text">
            <span>Menú</span>
          </div>
        </button>
        <div>
          <ul className="flex items-center gap-8 text-white py-2 px-4 text-[20px]">
            <li><a className="text-white cursor-pointer" href="#"></a>Inicio</li>
            <li><a className="text-white cursor-pointer" href="#"></a>Contacto</li>
          </ul>
        </div>
        <div className="user">
          <img src="/img/user.png" alt="" />
        </div>
        <CartWidget />
      </div>
    </>
  );
};
export default NavBar;
