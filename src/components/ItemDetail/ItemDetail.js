import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="itemDetailContainer">
      <div className="itemDetailHeader">
        <div className="itemDetailImage">
          <img src={item.image} alt={item.nombre} />
        </div>
        <div className="itemDetailContent">
          <h3> {item.nombre}</h3>
          <p>${item.precio}</p>
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