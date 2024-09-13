import Footer from "../components/Footer";
import Header from "../components/Header";
import Homeİmg from "../assets/cart.jpg";
import "../styles/homepage.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <div className="home-container">
          <div className="home-text">
            <h1>
              Welcome to the <i>shopping</i>
            </h1>
            <p>
              Discover the world of amazing products and more with us.
              Experience quality and style like never before! Whether you're
              looking for the latest trends or timeless classics, we offer a
              wide range of options to suit every taste. From fashion to
              electronics, home décor to beauty products, we've got you covered.
              Shop with confidence, knowing that every item has been carefully
              curated for your satisfaction. Let us be your guide to a more
              stylish and modern lifestyle!
            </p>
            <Link to="/products">Go to the shopping</Link>
          </div>
          <div className="home-img">
            <img src={Homeİmg} alt=""/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
