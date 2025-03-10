const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>${item.price} x {item.quantity}</p>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))
      )}
      <h3>Total: ${total}</h3>
    </section>
  );
};

export default Cart;
