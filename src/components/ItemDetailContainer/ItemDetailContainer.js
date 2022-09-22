import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FirestoreDb } from "../../firebase/firebaseConfig";


const ItemDetailContainer = () => {
  
  const { id } = useParams();

  const [item, setItem] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsCollection = query(
          collection(FirestoreDb, "productos"),
          where("id", "==", `${id}`)
        );
        const storeSnapshot = await getDocs(productsCollection);
        const storeList = storeSnapshot.docs.map((doc) => doc.data());
        setItem(storeList[0]);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getProducts();
  }, [id]);

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
