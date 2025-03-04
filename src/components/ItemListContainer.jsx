const ItemListContainer = ({ mensaje }) => {
    return (
      <div style={{
        textAlign: "center",
        marginTop: "20px",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "10px",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <h2>{mensaje}</h2>
      </div>
    );
  };
  
  export default ItemListContainer;
  