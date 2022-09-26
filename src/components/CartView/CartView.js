import React, { useContext, useState } from "react";
import "./CartView.css";
import { CartContext } from "../../context/CartProvider";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { FirestoreDb } from "../../firebase/firebaseConfig";

const CartView = () => {
  const navigate = useNavigate();
  const { cart, removeItem, getTotal, clear } = useContext(CartContext);
  const [userOrderId, setUserOrderId] = useState();

  const handleSubmitButton = () => {
    addOrder();
    // navigate("/");
  };

  const addOrder = async () => {
    const order = {
      buyer: {
        name: "UserERTY12345",
        phone: "0541133446677",
        email: "UserERTY12345@mailbox.com",
      },
      items: cart.map((itemCart) => {
        return {
          id: itemCart.item.id,
          title: itemCart.item.nombre,
          price: itemCart.item.precio,
          quantity: itemCart.cantidad,
        };
      }),
      date: new Date(Date.now()).toLocaleString(),
      total: getTotal(),
    };

    try {
      const ordersCollection = collection(FirestoreDb, "ordenes");
      addDoc(ordersCollection, order).then(({ id }) => {
        setUserOrderId(id);
        clear();
      });
    } catch (error) {
      console.log("Add Order Error:", error);
    }
  };

  const volverInicio = () => {
    navigate("/");
  };

  return (
    <div className="ContainerCartView">
      <p className="titleCartView">Mi carrito de compras</p>
      {cart.length ? (
        <div>
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
                <div className="itemCartView">
                  Cantidad: {cartItem.cantidad}
                </div>
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
            <button
              className="btnConfirmarCartView"
              onClick={() => handleSubmitButton()}
            >
              Confirmar compra
            </button>
          </div>
        </div>
      ) : !cart.length && userOrderId ? (
        <div className="emptyCartContainer">
          <p className="ordenNumberTitle">Tu orden de compra es</p>
          <p className="orderNumber">{userOrderId}</p>
          <div className="btncontainerCartView">
            <button className="btnVolverCartView">
              Imprimir
            </button>
            <button className="btnVolverCartView" onClick={() => volverInicio()} >
              Volver a inicio
            </button>
          </div>
        </div>
      ) : (
        <div className="emptyCartContainer">
          <img
            className="emptyCart"
            src={"/assets/emptycart.jpg"}
            alt={"Empty Cart State"}
          />
          <p>El carrito esta vacio..</p>
          <button onClick={() => volverInicio()} className="btnVolverCartView">
            Volver a inicio
          </button>
        </div>
      )}
    </div>
  );
};

export default CartView;
