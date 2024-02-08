import { useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
export const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <header className="header border-bottom">
      <div className="container">
        <div className="flex justify-space-between">
          <div className="site-logo">
            <Link to='/'><img src={LOGO_URL} width={100} /></Link>
          </div>
          <nav>
            <ul className="flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact US</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
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
