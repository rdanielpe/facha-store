import "./CardWidget.css"


const CardWidget = () => {
  return (
    <>
      <h2 className="top-card">LO MAS VENDIDO</h2>

      <div className="section-card">
        <div className="card-producto">
          <img src="/public/img/polo1.png" alt="" />
          <p className="nombre-producto">M A U I</p>
          <p className="precio-producto">$65</p>
          <select className="talla" name="talla" id="talla">
            <option className="tallas">TALLA</option>
            <option className="tallas" value="">
              M
            </option>
            <option className="tallas" value="">
              L
            </option>
          </select>
          <button className="carrito">
            <img src="/public/img/carrito.png" alt="" />
          </button>
        </div>

        <div className="card-producto">
          <img src="/public/img/polo2.png" alt="" />
          <p className="nombre-producto">M A U I</p>
          <p className="precio-producto">$65</p>
          <select className="talla" name="talla" id="talla">
            <option className="tallas">TALLA</option>
            <option className="tallas" value="">
              M
            </option>
            <option className="tallas" value="">
              L
            </option>
          </select>
          <button className="carrito">
            <img src="/public/img/carrito.png" alt="" />
          </button>
        </div>

        <div className="card-producto">
          <img src="/public/img/polo3.png" alt="" />
          <p className="nombre-producto">M A U I</p>
          <p className="precio-producto">$65</p>
          <select className="talla" name="talla" id="talla">
            <option className="tallas">TALLA</option>
            <option className="tallas" value="">
              M
            </option>
            <option className="tallas" value="">
              L
            </option>
          </select>
          <button className="carrito">
            <img src="/public/img/carrito.png" alt="" />
          </button>
        </div>

        <div className="card-producto">
          <img src="/public/img/polo4.png" alt="" />
          <p className="nombre-producto">M A U I</p>
          <p className="precio-producto">$65</p>
          <select className="talla" name="talla" id="talla">
            <option className="tallas">TALLA</option>
            <option className="tallas" value="">
              M
            </option>
            <option className="tallas" value="">
              L
            </option>
          </select>
          <button className="carrito">
            <img src="/public/img/carrito.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
export default CardWidget;
