import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import productos from "../../productos";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    getProductos
      .then((response) => setItems(response))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="itemListContainer">
      <h3 className="titleItemListContainer">{greeting}</h3>
      {loading ? <p>LOADING...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
