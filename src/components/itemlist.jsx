import Item from "./item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ItemList;
