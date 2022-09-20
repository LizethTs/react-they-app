import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartProvider";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  // const [isAdded, setIsAdded] = useState(false);

  const navigate = useNavigate();

  function onAdd(count) {
    // setIsAdded(true);
    addItem(item, count);
    console.log(`se agregado ${count} productos`);
  }

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="itemDetailContainer">
      <div className="itemDetailHeader">
        <div className="itemDetailImage">
          <img src={item.image} alt={item.nombre} />
        </div>
        <div className="itemDetailContent">
          <h3> {item.nombre}</h3>
          <p className="itemPrecio">${item.precio}</p>
          {/* {!isAdded ? ( */}
          {isInCart(item.id) ? (
            <>
              <p className="itemSuccess">El producto se encuentra en tu carrito</p>
              <button className="btnCounter" onClick={() => goToCart()}>
                Finaliza tu compra
              </button>
            </>
          ) : (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
      <div className="itemDetailDescription">
        <h4>Descripción</h4>
        <p>{item.description}</p>
        <p>{item.marca}</p>
        <p>{item.color}</p>
        <p>{item.stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
