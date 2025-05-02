import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const productosRef = collection(db, "Productos");

        let q = productosRef;

        if (categoriaId) {
          let categoriaNormalizada = "";

          if (categoriaId === "ropa") categoriaNormalizada = "Ropa";
          if (categoriaId === "electronica") categoriaNormalizada = "Electrónica";
          if (categoriaId === "hogar") categoriaNormalizada = "Hogar";

          q = query(productosRef, where("Categoria", "==", categoriaNormalizada));
        }

        const querySnapshot = await getDocs(q);
        const productosDB = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setItems(productosDB);
      } catch (error) {
        console.error("Error al obtener productos", error);
      }
    };

    getProductos();
  }, [categoriaId]);

  const nombresCategoria = {
    ropa: "Ropa",
    electronica: "Electrónica",
    hogar: "Hogar",
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">
        {categoriaId ? nombresCategoria[categoriaId] : "Inicio"}
      </h1>
      <div className="row">
        {items.map(producto => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={producto.Imagen} className="card-img-top" alt={producto.Nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.Nombre}</h5>
                <p className="card-text">{producto.Descripcion}</p>
                <p className="card-text fw-bold">${producto.Precio}</p>
                <Link to={`/item/${producto.id}`} className="btn btn-primary">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

