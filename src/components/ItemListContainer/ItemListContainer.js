import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore";
import { FirestoreDb } from "../../firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const productsCollection = collection(FirestoreDb, "productos");
        const storeSnapshot = await getDocs(productsCollection);
        const storeList = storeSnapshot.docs.map((doc) => doc.data());
        setItems(storeList);
        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="itemListContainer">
      <h3 className="titleItemListContainer">{greeting}</h3>
      {loading ? <p>LOADING...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
