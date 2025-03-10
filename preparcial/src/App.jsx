import { useState } from "react";
import "./App.css";
import data from "./data/data.json";
import ProductList from "./components/productList/productList";
import Cart from "./components/cart/cart";

function App() {
  const [cart, setCart] = useState([]);

  // Añadir productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      return exists
        ? prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Eliminar producto completamente del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Ajustar cantidad de un producto
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <section>
      <h1>Tienda</h1>
      <ProductList products={data} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </section>
  );
}

export default App;
