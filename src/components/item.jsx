import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      {product.image && (
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;

