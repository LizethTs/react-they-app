import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {

  const [isAdded, setIsAdded] = useState(false);

  const navigate = useNavigate();

  function onAdd(count) {
    setIsAdded(true);
    console.log(`se agregado ${count} productos`);
  }

  const goToCart = () => {
    navigate(`/ItemCart`, { replace: true });
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
          {!isAdded ? (
            <ItemCount
              stock={item.stock}
              initial={1}
              onAdd={onAdd}
              isAdded={isAdded}
            />
          ) : (
            <>
              <p className="itemSuccess">Se agregado exitosamente</p>
              <button className="btnCounter" onClick={() => goToCart()}>
                finaliza tu compra
              </button>
            </>
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
