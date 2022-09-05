import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../productos";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  function onAdd(count) {
    console.log(`se agregado ${count} productos`);
  }

  const [item, setItem] = useState([]);

  const getProducto = () =>
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(productos.find((producto) => producto.id === "2")),
        2000
      );
    });

  useEffect(() => {
    getProducto().then((response) => setItem(response));
  }, []);

  console.log(item);
  return (
    <div className="itemDetailContainer">
      <ItemDetail item={item} />
      <ItemCount stock={50} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
