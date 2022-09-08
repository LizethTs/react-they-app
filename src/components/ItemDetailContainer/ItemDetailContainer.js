import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../productos";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  function onAdd(count) {
    console.log(`se agregado ${count} productos`);
  }

  const { id } = useParams();

  const [item, setItem] = useState([]);

  const getProducto = () =>
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(productos.find((producto) => producto.id === id)),
        2000
      );
    });

  useEffect(() => {
    getProducto().then((response) => setItem(response));
  }, []);

  return (
    <>
      { item && 
        <div className="itemDetailContainer">
          <ItemDetail item={item} />
          <ItemCount stock={50} initial={1} onAdd={onAdd} />
        </div>
      }
    </>
  );
};

export default ItemDetailContainer;
