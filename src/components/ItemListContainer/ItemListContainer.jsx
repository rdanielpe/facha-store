import "./ItemListContainer.css"


// eslint-disable-next-line react/prop-types
const ItemListContainer = ({greeting}) => {
  return (
    <>
      <h2 className="top-card">{greeting}</h2>

      <div className="section-card">
        <div className="card-producto">
          <img src="/img/polo1.png" alt="" />
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
            <img src="/img/carrito.png" alt="" />
          </button>
        </div>

        <div className="card-producto">
          <img src="/img/polo2.png" alt="" />
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
            <img src="/img/carrito.png" alt="" />
          </button>
        </div>

        <div className="card-producto">
          <img src="/img/polo3.png" alt="" />
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
            <img src="/img/carrito.png" alt="" />
          </button>
        </div>

        <div className="card-producto">
          <img src="/img/polo4.png" alt="" />
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
            <img src="/img/carrito.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
export default ItemListContainer;
