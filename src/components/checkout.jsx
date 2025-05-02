import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { carrito, vaciarCarrito } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [pedidoId, setPedidoId] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (carrito.length === 0) {
      toast.error("Tu carrito está vacío.");
      return;
    }

    const pedido = {
      cliente: { nombre, telefono, email },
      productos: carrito,
      total: carrito.reduce(
        (acc, prod) => acc + prod.precio * prod.cantidad,
        0
      ),
      fecha: new Date().toISOString(),
    };

    try {
      const pedidosRef = collection(db, "pedidos");
      const docRef = await addDoc(pedidosRef, pedido);
      setPedidoId(docRef.id);
      vaciarCarrito();

      toast.success(`¡Compra realizada! ID: ${docRef.id}`, {
        position: "top-center",
        autoClose: 2500,
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error al generar el pedido: ", error);
      toast.error("Hubo un error. Intenta nuevamente.");
    }
  };

  return (
    <div className="container my-5">
      <h2>Finalizar compra</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          className="form-control my-2"
          type="text"
          placeholder="Tu teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <input
          className="form-control my-2"
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn btn-primary my-2" type="submit">
          Enviar
        </button>
      </form>

      {pedidoId && (
        <div className="alert alert-success mt-3">
          Gracias por tu compra. Tu número de pedido es:{" "}
          <strong>{pedidoId}</strong>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Checkout;

