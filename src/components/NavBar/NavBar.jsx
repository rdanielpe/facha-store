import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <header className="navbar justify-between items-center pr-6 ">
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
        <div className="flex gap-2">
          <nav>
            <ul className="flex items-center gap-10 text-[20px]">
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
            </ul>
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
