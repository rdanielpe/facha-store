import { Link } from "react-router-dom";

const ItemList = ({productos}) => {

  return (
    <div className="grid max-w-screen-xl grid-cols-4 gap-6 mx-auto">
      {productos.map((producto) => {
        return (
          <div className="w-64 text-white h-80" key={producto.id}>
            <h2>{producto.nombre}</h2>
            <h2>{producto.precio}</h2>
            <img src={producto.img}></img>
            <p>{producto.stock}</p>
            <Link to={`/item/${producto.nombre}`} className="w-full px-4 py-2 text-white bg-green-500">ver detalle de producto</Link>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
