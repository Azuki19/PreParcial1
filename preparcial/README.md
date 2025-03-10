# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



<p>import { useState } from "react";</p>
<p>import "./App.css";</p>
<p>import data from "./data/data.json";</p>
<p>import ProductList from "./components/productList/productList";</p>
<p>import Cart from "./components/cart/cart";</p>

<p>function App() {</p>
<p>&nbsp;&nbsp;const [cart, setCart] = useState([]);</p>

<p>&nbsp;&nbsp;// Añadir productos al carrito</p>
<p>&nbsp;&nbsp;const addToCart = (product) => {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;setCart((prevCart) => {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const exists = prevCart.find((item) => item.id === product.id);</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return exists</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;? prevCart.map((item) =></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [...prevCart, { ...product, quantity: 1 }];</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;});</p>
<p>&nbsp;&nbsp;};</p>

<p>&nbsp;&nbsp;// Eliminar producto completamente del carrito</p>
<p>&nbsp;&nbsp;const removeFromCart = (id) => {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;setCart((prevCart) => prevCart.filter((item) => item.id !== id));</p>
<p>&nbsp;&nbsp;};</p>

<p>&nbsp;&nbsp;// Ajustar cantidad de un producto</p>
<p>&nbsp;&nbsp;const updateQuantity = (id, amount) => {</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;setCart((prevCart) =></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prevCart</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map((item) =></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.id === id ? { ...item, quantity: item.quantity + amount } : item</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter((item) => item.quantity > 0)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;);</p>
<p>&nbsp;&nbsp;};</p>

<p>&nbsp;&nbsp;return (</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;section&gt;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Tienda&lt;/h1&gt;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ProductList products={data} addToCart={addToCart} /&gt;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} /&gt;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/section&gt;</p>
<p>&nbsp;&nbsp;);</p>
<p>}</p>

<p>export default App;</p>
