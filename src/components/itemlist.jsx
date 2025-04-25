import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.length > 0 ? (
        products.map((prod) => (
          <Item key={prod.id} product={prod} />
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ItemList;