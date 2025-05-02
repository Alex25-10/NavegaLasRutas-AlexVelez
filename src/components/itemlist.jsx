import Item from "./item";

const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.length > 0 ? (
        products.map((prod) => (
          <Item key={prod.id} item={prod} />
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ItemList;
