import "./Header.scss";
import logo from "../../logo.svg";

const Header = () => {
  return (
    <div className="container">
      <header>
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Agile Pulse logo" />
        </div>
        {/* Navigation */}
        <nav>
          <div className="nav-left">
            <ul>
              <li>
                <a href="#">Ana səhifə</a>
              </li>
              <li>
                <a href="#">Təlimlər</a>
              </li>
              <li>
                <a href="#">İmtahanlar</a>
              </li>
              <li>
                <a href="#">Haqqımızda</a>
              </li>
            </ul>
          </div>

          <div className="nav-right">
            <ul>
              <li>
                <a href="#">Qeydiyyat</a>
              </li>
              <li>
                <a href="#">Daxil ol</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
