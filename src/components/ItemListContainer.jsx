import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "Productos");

    getDocs(productosRef)
      .then((resp) => {
        const productosFirebase = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductos(productosFirebase);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Productos</h1>
      <div className="row g-4">
        {productos.map((producto) => (
          <div key={producto.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={producto.Imagen}
                className="card-img-top"
                alt={producto.Nombre}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{producto.Nombre}</h5>
                <p className="card-text">Precio: ${producto.Precio}</p>
                <p className="card-text">Stock: {producto.Stock}</p>
                <button className="btn btn-primary mt-auto">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
