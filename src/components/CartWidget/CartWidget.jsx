import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import "./CardWiget.css";

const CartWidget = () => {
  const { cart, cartQuantity } = useContext(CartContext);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
          {
          cart.length > 0 ?
          <span className="badge badge-sm indicator-item">
            {cartQuantity() == 0 ? null : cartQuantity()}
          </span> : <p className="hidden"></p>
          }
        </div>
      </label>
      <div tabIndex="0" className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100">
        <div className="card-body">
          <span className="text-lg font-bold text-black">{ cart.reduce((acc, item) => acc + item.cantidad, 0)} Items</span>
          <span className="text-info">Subtotal: ${ cart.reduce((acc, item) => acc + (item.cantidad * item.producto.precio), 0)}</span>
          <div className="card-actions">
            <Link to="/cart" className="text-white bg-blue-500 rounded-md btn btn-block">Ver Carrito</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;

