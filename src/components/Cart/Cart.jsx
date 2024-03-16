import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Icon } from "@iconify/react";

const Cart = () => {
  const { cart, deleteItem, emptyCart, totalCart } = useContext(CartContext);

  return (
    <div className="mt-32">
      {/* Carrito = vacío */}
      {cart.length === 0 ? (
        <div className="min-h-[300px] grid place-content-center my-6 bg-white w-11/12 md:w-3/4 lg:w-3/4 mx-auto pb-7">
          <div className="mx-5 text-center">
            <img className="my-6 rounded-full" alt="" src="/img/facha.png" />
            <p className="font-bold">
              ¡Tu carrito está vacío! <br />
              Añade un producto para poder continuar , ¿ Estamos de acuerdo que
              Messi es mejor que Cristiano ?
            </p>
            <Link
              to="/"
              className="px-3 py-2 mt-5 text-xs font-bold text-white transition-all duration-500 bg-blue-500 rounded btn hover:text-z-dark-blue hover:bg-white"
            >
              Si , Messi es mejor & Ver productos
            </Link>
          </div>
        </div>
      ) : (
        /* Carrito content */
        <div className="pt-5 bg-gray-100">
          <h1 className="mb-10 text-2xl font-bold text-center">
            Carrito de Compras
          </h1>
          <div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0">
            <table className="rounded-lg md:w-2/3">
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.producto.id}
                    className="p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start"
                  >
                    <td>
                      <img
                        src={item.producto.img}
                        alt="product-image"
                        className="w-full rounded-lg sm:w-40"
                      />
                    </td>
                    <td className="justify-center sm:ml-4 sm:flex sm:w-full">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {item.producto.nombre}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">
                          ${item.producto.precio}
                        </p>
                      </div>
                      <div className="flex mt-4 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center gap-3 pl-4 border-gray-100">
                          <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                             -{" "}
                          </span>
                          <p className="w-8 h-8 text-center bg-white border outline-none gap-2text-xs">
                            {item.cantidad}
                          </p>
                          <span className="px-3 py-1 duration-100 bg-gray-100 rounded-r cursor-pointer hover:bg-blue-500 hover:text-blue-50">
                             +{" "}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">
                            ${item.cantidad * item.producto.precio}
                          </p>
                          <button
                            className="text-sm text-z-dark-blue md:text-lg lg:text-lg"
                            onClick={() => deleteItem(item.producto.id)}
                          >
                            <Icon icon="mdi-light:delete" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* subtotal */}

            <div className="h-full p-6 mt-6 bg-white rounded-lg shadow-md md:mt-0 md:w-1/3">
              <div className="h-full p-6 mt-6 shadow-md -lg md:mt-0">
                <div className="flex mb-2">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">: ${totalCart()}</p>
                </div>
                <div className="flex">
                  <p className="text-gray-700">Cantidad de productos</p>
                  <p className="text-gray-700">
                    : {cart.reduce((acc, ite) => acc + ite.cantidad, 0)}
                  </p>
                </div>
                <hr className="my-4" />
                <div className="flex">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">${totalCart()}</p>
                    <p className="text-sm text-gray-700">Envio gratis</p>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="mt-3 mb-6 text-base font-bold text-white capitalize transition-all duration-500 bg-blue-500 rounded btn hover:text-z-dark-blue hover:bg-white md:text-xl lg:text-xl"
                >
                  Checkout
                </Link>
              </div>
              <button
                className="mb-6 text-base font-bold text-white capitalize transition-all duration-500 bg-blue-500 rounded mt-7 btn hover:text-z-dark-blue hover:bg-white md:text-xl lg:text-xl"
                onClick={() => emptyCart()}
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
