import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../productos";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  
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
        </div>
      }
    </>
  );
};

export default ItemDetailContainer;
