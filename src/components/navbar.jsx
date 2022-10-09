import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.svg";

const Navbar = () => {
  const [changeToggler, setChangeToggler] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg position-absolute p-md-5">
      <div className="container-fluid">
        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setChangeToggler(!changeToggler)}
        >
          {changeToggler ? (
            <FontAwesomeIcon icon={faXmark} className="grey" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-white" />
          )}
        </button>
        <img src={logo} alt="logo" className="logo" />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a
                className="nav-link p-2 white black bolder"
                aria-current="page"
                href="#"
              >
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-2 white black bolder" href="#">
                shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-2 white black bolder" href="#">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-2 white black bolder" href="#">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
