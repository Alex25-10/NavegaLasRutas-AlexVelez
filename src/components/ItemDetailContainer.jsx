import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "Productos", itemId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      }
    };

    fetchItem();
  }, [itemId]);

  if (!item) {
    return <div className="text-center my-5">Cargando...</div>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

