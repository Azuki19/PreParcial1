const ProductItem = ({ product, addToCart }) => {
  return (
    <section>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><b>${product.price}</b></p>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </section>
  );
};

export default ProductItem;
