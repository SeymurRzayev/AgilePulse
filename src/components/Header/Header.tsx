import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="container">
      <header>
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Agile Pulse logo" />
          </Link>
        </div>
        {/* Navigation */}
        <nav>
          <div className="nav-left">
            <ul>
              <li>
                <Link to="/">Ana səhifə</Link>
              </li>
              <li>
                <Link to="#">Təlimlər</Link>
              </li>
              <li>
                <Link to="#">İmtahanlar</Link>
              </li>
              <li>
                <Link to="#">Haqqımızda</Link>
              </li>
            </ul>
          </div>

          <div className="nav-right">
            <ul>
              <li className="blue-btn">
                <Link to="/sign-up">Qeydiyyat</Link>
              </li>
              <li className="bordered-transparent-btn">
                <Link to="/sign-in">Daxil ol</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
