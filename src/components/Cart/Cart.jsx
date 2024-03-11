import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Icon } from "@iconify/react";


const Cart = () => {
  const { cart } = useContext(CartContext);
  const { deleteItem } = useContext(CartContext)
  const { emptyCart, totalCart } = useContext(CartContext)

  return (
    <div className="mt-32">
    {/* Carrito = vacío */}
    {cart.length === 0 ? (
      <div className="min-h-[300px] grid place-content-center my-6 bg-white w-11/12 md:w-3/4 lg:w-3/4 mx-auto pb-7">
        <div className="mx-5 text-center">
          <img
            className="my-6 rounded-full " alt=""
            src="../../../public/img/facha.png"
          ></img>
          <p className="font-bold">
            ¡Tu carrito está vacío! <br />
            Una vez que añadas algo a tu carrito, aparecerá aquí. ¿Listo para empezar?
          </p>
          <Link
            to="/"
            className="px-3 py-2 mt-5 text-xs font-bold text-white transition-all duration-500 bg-blue-500 rounded btn hover:text-z-dark-blue hover:bg-white"
          >
            Ver productos
          </Link>
        </div>
      </div>
    ) : (
      /* Carrito content */
      <div className="w-full mx-auto my-6 bg-white">
        <h2 className="self-center py-8 text-xl font-bold text-center underline text-z-dark-blue md:text-2xl lg:text-2xl">
          Carrito de compras
        </h2>
        <table className="w-full mx-auto">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="items-center text-xs text-z-dark-blue md:text-lg lg:text-lg">
                Producto
              </th>
              <th className="items-center text-xs text-z-dark-blue md:text-lg lg:text-lg">
                Precio
              </th>
              <th className="items-center text-xs text-z-dark-blue md:text-lg lg:text-lg">
                Cantidad
              </th>
              <th className="items-center text-xs text-z-dark-blue md:text-lg lg:text-lg">
                Subtotal
              </th>
              <th className="items-center text-xs text-z-dark-blue md:text-lg lg:text-lg">
                Eliminar
              </th>
            </tr>
          </thead>
          {cart.map((item) => (
            <thead key={item.producto.marca}>
              <tr className="border-b border-gray-200">
                <th className="flex flex-col items-center ">
                  <img
                    className="h-36 w-36"
                    src={item.producto.img}
                    alt="Imagen de producto"
                  />
                  <div className="flex flex-col ">
                    <p className="text-xs text-z-dark-blue md:text-lg lg:text-lg ">
                      {item.producto.nombre}
                    </p>
                  </div>
                </th>
                <th className="text-sm text-z-dark-blue md:text-lg lg:text-lg">
                  ${item.producto.precio}
                </th>
                <th className="text-sm text-z-dark-blue md:text-lg lg:text-lg">
                  {item.cantidad}
                </th>
                <th className="text-sm text-z-dark-blue md:text-lg lg:text-lg">
                  ${item.cantidad * item.producto.precio}
                </th>
                <th>
                  <button
                    className="text-sm text-z-dark-blue md:text-lg lg:text-lg"
                    onClick={() => deleteItem(item.producto.id)}

                  >
                    <Icon icon="mdi-light:delete" />
                  </button>
                </th>
              </tr>
            </thead>
          ))}
        </table>
        <div className="flex flex-col justify-between w-4/5 mx-auto mt-2 mb-2 md:flex-row">
          <button
            className="w-full my-3 text-base font-bold text-white capitalize transition-all duration-500 bg-blue-500 rounded btn hover:text-whit hover:bg-z-pink md:text-xl lg:text-xl md:w-1/3"
            onClick={() => emptyCart()}
          >
            Vaciar Carrito
          </button>

          <div className="flex flex-col self-start w-full md:w-2/5">
            <div className="flex flex-row justify-between my-2 text-sm font-bold md:text-lg lg:text-lg ">
              <p>Cantidad de productos:</p>
              <p>{cart.reduce((acc, ite) => acc + ite.cantidad, 0)}</p>
            </div>
            <div className="flex flex-row justify-between my-2 text-base font-bold md:text-xl lg:text-xl ">
              <p className="underline">Total:</p>
              <p>${totalCart()}</p>
            </div>
            <div className="flex flex-row justify-between my-2 text-sm font-bold md:text-lg lg:text-lg">
              <p>¡Envío gratis!</p>
            </div>
            <Link
              to="/checkout"
              className="mt-3 mb-6 text-base font-bold text-white capitalize transition-all duration-500 bg-blue-500 rounded btn hover:text-z-dark-blue hover:bg-white md:text-xl lg:text-xl"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};
export default Cart;
