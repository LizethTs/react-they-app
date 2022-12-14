import React, { useEffect, useState } from "react";
import "./ItemProductContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where  } from "firebase/firestore";
import { FirestoreDb } from "../../firebase/firebaseConfig";

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
    const getProducts = async () => {
      try {
        const productsCollection =
          category === "todos"
            ? collection(FirestoreDb, "productos")
            : query(
                collection(FirestoreDb, "productos"),
                where("categoria", "==", `${category}`)
              );

        const storeSnapshot = await getDocs(productsCollection);

        const storeList = storeSnapshot.docs.map((doc) => doc.data());
        setItems(storeList);
        setLoading(false)
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getProducts();
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
