import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "../styles/productdetails.css";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const {addToCart} = useCart();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);

        const relatedRes = await axios.get('https://fakestoreapi.com/products');
        setRelatedProducts(relatedRes.data.filter(p => p.id !== id).slice(0, 4)); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <div className="detail-container">
        {product && (
          <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <div className="detail-content">
              <h3>{product.title}</h3>
              <div className="text">
                <strong>${product.price.toFixed(2)}</strong>
                <p className="desc">{product.description}</p>
              </div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        )}
        <div className="side-bar">
          <h1>Related Products</h1>
          <div className="related-products">
            {relatedProducts.map((item) => (
              <div key={item.id} className="related-item">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <strong>${item.price.toFixed(2)}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetail;
