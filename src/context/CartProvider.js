import { createContext, useState } from "react";

export const CartContext = createContext();
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    console.log("agregando item..");
    if(!isInCart(item.id)){
      setCart((cart) => [...cart, { item, cantidad }]);
    }else{
      console.log("El producto ya existe");
    }
  };

  const removeItem = (itemId) => {
    console.log("removiendo item..");
    const newCart = cart.filter((item) => item.id !== item);
    setCart(newCart);
  };

  const clear = () => {
    console.log("limpieando items..");
    setCart([]);
  };

  const isInCart = (id) => {
    console.log("buscando item..");
    const newCart = cart.find((item) => item.id === id);
    return newCart ? true : false;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
