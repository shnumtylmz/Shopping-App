import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/product.css";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import CategorySidebar from "../components/Sidebar"; 
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = category
          ? `https://fakestoreapi.com/products/category/${category}`
          : "https://fakestoreapi.com/products";
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <div className="container">
      <CategorySidebar />
        <div className="content">
          
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>
                  <strong>${product.price.toFixed(2)}</strong>
                </p>
                <div className="product-btn">
                  <Link to={`/products/${product.id}`}>View Details</Link>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
