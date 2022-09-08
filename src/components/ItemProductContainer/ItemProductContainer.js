import React, { useEffect, useState } from "react";
import "./ItemProductContainer.css";
import productos from "../../productos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemProductContainer = ({ greeting }) => {
  const { id } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(id);

  const handleCategory = (categoria) => {
    setLoading(true);
    setCategory(categoria);
  };

  useEffect(() => {
    const getProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });

    getProductos
      .then((response) => {
        if (category === "todos") {
          setItems(response);
        } else {
          const itemsFiltrados = response.filter(
            (producto) => producto.categoria === category
          );
          setItems(itemsFiltrados);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [category]);
  return (
    <div className="itemProductContainer">
      <div className="productAside">
        <ul className="productCategory">
          <li className="itemCategory" onClick={() => handleCategory("pelota")}>
            Pelota
          </li>
          <li
            className="itemCategory"
            onClick={() => handleCategory("tirador")}
          >
            Tirador
          </li>
          <li
            className="itemCategory"
            onClick={() => handleCategory("mordedor")}
          >
            Mordedor
          </li>
          <li className="itemCategory" onClick={() => handleCategory("todos")}>
            Todos
          </li>
        </ul>
      </div>
      <div className="itemListContainer">
        <p className="titleItemProductContainer">{greeting}</p>
        {loading ? <p>LOADING...</p> : <ItemList items={items} />}
      </div>
    </div>
  );
};

export default ItemProductContainer;
