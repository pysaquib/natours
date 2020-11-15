import "./header.css";
import Logo from "../assets/img/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={Logo} alt="Logo" className="logo"></img>
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
        <a href="#" className="btn btn-white">
          Discover all tours
        </a>
      </div>
    </header>
  );
};

export default Header;
