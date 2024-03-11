import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const [terminar, setTerminar] = useState(false);
  const { addToCart } = useContext(CartContext);
  const onAdd = (count) => {
    setTerminar(true);
    addToCart(producto, count);
  };

  return (
    <div className="w-11/12 max-w-screen-lg p-2 mx-auto mt-16 shadow-md">
      <div className="flex flex-col lg:hero-content md:flex-row ">
        <img
          src={producto.img}
          className="w-full max-w-sm mx-auto rounded-lg shadow-xl md:max-w-md aspect-square"
          alt={`${producto.nombre} de ${producto.marca}`}
        />
        <div className="flex flex-col items-center justify-center h-full gap-3">
          <h1 className="text-xl font-bold capitalize lg:text-3xl">{producto.marca}</h1>
          <h2 className="text-3xl font-bold lg:text-4xl">{producto.nombre}</h2>
          <p className="max-w-sm py-6">{producto.descripcion}</p>
          <div className="justify-center inline-block mx-auto align-bottom">
            <span className="text-3xl font-bold leading-none text-center align-baseline lg:text-5xl">
              ${producto.precio}
            </span>
            <div className="flex gap-2 mt-4">
              {terminar ? (
                <>
                  <Link to="/cart" className="p-3 text-white bg-blue-500 rounded-md">
                    Terminar Compra
                  </Link>
                  <Link to="/all" className="p-3 text-white bg-blue-500 rounded-md">
                    Seguir Comprando
                  </Link>
                </>
              ) : (
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
