import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const descrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(1);
  };

  return (
    <div className="itemCountContainer">
      <div className="itemCountText">
        <p>Stock: {stock} </p>
        <p>Cantidad: {count} </p>
      </div>
      <div className="botonesItemCount">
        <button className="btnCounter" onClick={descrementar}>
          -
        </button>
        <button className="btnCounter" onClick={reset}>
          Reset
        </button>
        <button className="btnCounter" onClick={incrementar}>
          +
        </button>
      </div>
      <div className="btnAgregar">
        <button className="btnCounter" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
