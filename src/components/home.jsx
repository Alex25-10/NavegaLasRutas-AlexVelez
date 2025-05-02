import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center my-5">
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">Bienvenido a ReactCommerce</h1>
          <p className="fs-4">Encontrá los mejores productos al mejor precio.</p>
          <Link to="/productos" className="btn btn-primary btn-lg mt-3">
            Ver Productos
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Productos de calidad</h5>
              <p className="card-text">Seleccionamos artículos de alta calidad para vos.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Envíos rápidos</h5>
              <p className="card-text">Recibí tu compra en tiempo récord en todo el país.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Soporte 24/7</h5>
              <p className="card-text">Estamos para ayudarte en cualquier momento.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

