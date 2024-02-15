import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../hooks/context/UserContext";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const {loggedInUser, setUserName} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="header border-bottom shadow-xl ">
      <div className="container m-auto">
        <div className="flex justify-between items-center">
          <div className="site-logo">
            <Link to='/'><img src={LOGO_URL} width={100} /></Link>
          </div>
          <nav>
            <ul className="flex">
              <li>
                <h3>status: {useOnlineStatus? 'online' : 'offline'}</h3>
              </li>
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
                <Link to="/cart">Cart({cartItems?.length})</Link>
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
              <li>
                {loggedInUser}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
