import { createContext, useState } from "react";

export const CartContext = createContext();
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    console.log("agregando item..");
    if (!isInCart(item.id)) {
      setCart((cart) => [...cart, { item, cantidad }]);
    } else {
      console.log("El producto ya existe");
    }
  };

  const removeItem = (itemId) => {
    console.log("removiendo item..");
    const newCart = cart.filter((cartItem) => cartItem.item.id !== itemId);
    setCart(newCart);
  };

  const clear = () => {
    console.log("limpieando items..");
    setCart([]);
  };

  const isInCart = (id) => {
    console.log("buscando item..");
    const item = cart.find((cartItem) => {
      return cartItem.item.id === id;
    });
    return item ? true : false;
  };

  const getTotal = () => {
    let total = 0;
    cart &&
      cart.forEach((cartItem) => {
        total = total + cartItem.cantidad * cartItem.item.precio;
      });
    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
