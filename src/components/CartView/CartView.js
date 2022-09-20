import React, { useContext } from "react";
import "./CartView.css";
import { CartContext } from "../../context/CartProvider";
import { useNavigate } from "react-router-dom";

const CartView = () => {
  const navigate = useNavigate();
  const { cart, removeItem, getTotal, clear } = useContext(CartContext);

  const handleSubmitButton = () => {
    clear();
    navigate("/");
  };
  
  const volverInicio = () =>{
    navigate("/");
  }

  return (
    <div className="ContainerCartView">
      <p className="titleCartView">Mi carrito de compras</p>
      {cart.length ? (<div>
        <ul>
          {cart.map((cartItem, index) => (
            <li className="itemContainerCartView" key={index}>
              <img
                src={cartItem.item.image}
                alt={cartItem.item.nombre}
                className="itemImageCartView"
              />
              <div className="itemCartView">{cartItem.item.nombre}</div>
              <div className="itemCartView"> $ {cartItem.item.precio}</div>
              <div className="itemCartView">Cantidad: {cartItem.cantidad}</div>
              <button
                onClick={() => removeItem(cartItem.item.id)}
                className="btnRemoveCartView"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <div className="totalCartView">
          <p className="tituloTotalCartView">Precio Total: $ {getTotal()} </p>
          <button onClick={() => handleSubmitButton()} className="btnConfirmarCartView">Confirmar compra</button>
        </div>
      </div>): (<div className="emptyCartContainer">
        <img src={"/assets/emptycart.jpg"} className="emptyCart"/>
        <p>El carrito esta vacio..</p>
        <button onClick={() => volverInicio()} className="btnVolverCartView">Volver a inicio</button>
      </div>)}

    </div>
  );
};

export default CartView;
