import { useState, createContext } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto, cantidad) => {
    const productoIsInCart = cart.findIndex(
      (prod) => prod.producto.id == producto.id
    );

    if (productoIsInCart == -1) {
      setCart([...cart, { producto, cantidad }]);
    } else {
      const newCart = [...cart];
      newCart[productoIsInCart].cantidad += cantidad;
      setCart(newCart);
    }
  };

  const deleteItem = (productoId) => {
    const newCart = cart.filter((item) => item.producto.id !== productoId);
    setCart(newCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const cartQuantity = () => {
    const totalQuantity = cart.reduce(
      (total, item) => total + item.cantidad,
      0
    );
    return totalQuantity;
  };

  const totalCart = () => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.producto.precio * item.cantidad,
      0
    );
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteItem,
        emptyCart,
        cartQuantity,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
