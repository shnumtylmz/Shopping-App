import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <>
      <Header />
      <div className="container">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your Cart is empty.</p>
        ) : (
          <div className="cart-container">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>x{item.quantity}</div>
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <strong>${item.price.toFixed(2)}</strong>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="total-price">
        <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
