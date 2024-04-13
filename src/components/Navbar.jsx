import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../App";


const Navbar = () => {
  const { cart, setCart } = useContext(cartContext);
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            <a className="navbar-brand" href="#!">
              <Link
                to="/"
                style={{
                  color: "purple",
                  fontFamily: "Mogra, system-ui",
                  fontSize: "2rem",
                  textDecoration: "none",
                }}
              >
                Trending World
              </Link>
            </a>
            
          </span>
          <span>
            <button
              className=" btn-outline-dark"
              type="submit"
              style={{
                borderRadius: "5px",
                backgroundColor: "orange",
                border: "none",
                padding: "5px 15px",
              }}
            >
              <Link
                to="/cartPage"
                style={{ color: "black", textDecoration: "none" }}
              >
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  
                  {cart.length}
                </span>
              </Link>
            </button>
            
          </span>
        </div>
      </nav>
      <br />
    
    </div>
  );
};

export default Navbar;





 