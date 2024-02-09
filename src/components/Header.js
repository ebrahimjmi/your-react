import { useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
export const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <header className="header border-bottom bg-pink-50">
      <div className="container m-auto">
        <div className="flex justify-between items-center">
          <div className="site-logo">
            <Link to='/'><img src={LOGO_URL} width={100} /></Link>
          </div>
          <nav>
            <ul className="flex">
              <li className="mx-4">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-4">
                <Link to="/about">About</Link>
              </li>
              <li className="mx-4">
                <Link to="/contact">Contact US</Link>
              </li>
              <li className="mx-4">
                <Link to="/grocery">Grocery</Link>
              </li>
              <li className="mx-4">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="mx-4"> 
                <button
                  onClick={(e) =>
                    loginBtn === "Login"
                      ? setLoginBtn("Logout")
                      : setLoginBtn("Login")
                  }
                >
                  {loginBtn}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
