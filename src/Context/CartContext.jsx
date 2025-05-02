
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    try {
      const storedCart = localStorage.getItem("carrito");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error al cargar carrito del localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: cantidad,
      imagen: item.imagen,
    };

    const nuevoCarrito = [...carrito];
    const index = nuevoCarrito.findIndex((prod) => prod.id === itemAgregado.id);

    if (index !== -1) {
      nuevoCarrito[index].cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }

    setCarrito(nuevoCarrito);
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((prod) => prod.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  const incrementarCantidad = (id) => {
    setCarrito(carrito.map((prod) =>
      prod.id === id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
    ));
  };

  const decrementarCantidad = (id) => {
    setCarrito(carrito
      .map((prod) =>
        prod.id === id && prod.cantidad > 1
          ? { ...prod, cantidad: prod.cantidad - 1 }
          : prod
      )
      .filter((prod) => prod.cantidad > 0));
  };

  const cantidadTotal = () =>
    carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  const totalCarrito = () =>
    carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
        cantidadTotal,
        totalCarrito,
        incrementarCantidad,
        decrementarCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
