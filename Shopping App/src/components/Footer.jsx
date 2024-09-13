import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-margin"></div>
      <footer>
        
          <h2>Logo</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
