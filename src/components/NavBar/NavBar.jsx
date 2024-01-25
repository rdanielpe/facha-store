import "./NavBar.css"


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
          <div className="user">
            <img src="/public/img/user.png" alt="" />
          </div>
          <div className="carrito-nav">
            <img src="/public/img/bolsa.png" alt="" />
            <div>0</div>
          </div>
      </div>
    </>

  )
}
export default NavBar
