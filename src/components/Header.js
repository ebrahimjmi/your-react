import { LOGO_URL } from "../utils/Constant";
export const Header = () => {
  return (
    <header className="header border-bottom">
      <div className="container">
        <div className="flex justify-space-between">
          <div className="site-logo">
            <img
              src={LOGO_URL}
              width={100}
            />
          </div>
          <nav>
            <ul className="flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;