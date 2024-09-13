import { Link } from 'react-router-dom';
import '../styles/header.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Header = () => {
  const {cart} = useCart();
  const totalProducts = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <nav id='navbar'>
      <h2>Logo</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <Link to="/cart">
            <FaShoppingCart className='header-icon'/>
            {totalProducts > 0 && <span className="cart-count">{totalProducts}</span>}
          </Link>
      </ul>
    </nav>
  );
};

export default Header;
