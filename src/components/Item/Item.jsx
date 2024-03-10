import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <Link to={`/detalle/${producto.id}`}>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <img
          className="p-8 rounded-t-lg"
          src={producto.img}
          alt={producto.marca}
        />
        <div className="px-5 pb-5">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900" >
            {producto.nombre}
          </h3>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 capitalize">
            {producto.marca}
          </h5>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 ">
              ${producto.precio}
            </span>
            <span className="text-base font-normal text-gray-900 ">
              {producto.stock} restantes
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
