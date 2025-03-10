import ProductItem from "../productItem/productItem";

const ProductList = ({ products, addToCart }) => {
  return (
    <section>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </section>
  );
};

export default ProductList;
